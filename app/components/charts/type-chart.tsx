import React, { useEffect, useState } from "react";
import axios from "axios";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, CategoryScale, LinearScale } from "chart.js";

Chart.register(ArcElement);
Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(ArcElement);

const backgroundColor = ["aquamarine", "burlywood", "firebrick", "gray"];
const labels = ["Bug/Error", "Feature Request", "Security", "Other"];
const options = {
  maintainAspectRatio: false,
  responsive: false,
};

export type TypeCounts = {
  "Bug/Error": number;
  "Feature Request": number;
  Security: number;
  Other: number;
};

interface Ticket {
  _id: string;
  status: string;
  type: string;
}

const TypeChart: React.FC = () => {
  const [, setTickets] = useState<Ticket[]>([]);
  const [data, setData] = useState({
    labels: labels,
    datasets: [
      {
        data: [0, 0, 0, 0],
        backgroundColor: backgroundColor,
      },
    ],
  });
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    axios
      .get<Ticket[]>(`${API_URL}/tickets/`)
      .then((res) => {
        const ticketData = res.data;
        setTickets(ticketData);
        const typeCounts: TypeCounts = {
          "Bug/Error": 0,
          "Feature Request": 0,
          Security: 0,
          Other: 0,
        };

        ticketData.forEach((ticket) => {
          if (ticket.status !== "Resolved") {
            typeCounts[ticket.type as keyof TypeCounts]++;
          }
        });

        setData({
          labels: labels,
          datasets: [
            {
              data: [
                typeCounts["Bug/Error"],
                typeCounts["Feature Request"],
                typeCounts.Security,
                typeCounts.Other,
              ],
              backgroundColor: backgroundColor,
            },
          ],
        });
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Doughnut data={data} options={options} height={300} width={500} />
    </div>
  );
};

export default TypeChart;
