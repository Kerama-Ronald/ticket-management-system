import { NextResponse } from "next/server";
import connectMongo from "@/lib/config";
import Ticket from "@/lib/models/ticket";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    await connectMongo();

    const {
      title,
      description,
      projectName,
      assignee,
      priority,
      status,
      type,
    } = await request.json();

    const newTicket = new Ticket({
      title,
      description,
      projectName,
      assignee,
      priority,
      status,
      type,
    });

    await newTicket.save();
    let json_response = {
      status: "success",
      data: "Ticket successfully created.",
    };
    return NextResponse.json(json_response, { status: 200 });
  } catch (e) {
    let error_response = {
      status: "fail",
      message: e,
    };
    return new NextResponse(JSON.stringify(error_response), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}