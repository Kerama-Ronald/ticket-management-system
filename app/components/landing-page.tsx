import React from "react";
import { FaTicketAlt } from "react-icons/fa";
import { BsCheck2Square } from "react-icons/bs";
import { RiArticleLine } from "react-icons/ri";
import { auth, useAuth } from "@clerk/nextjs";
import Link from "next/link";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const Landing: React.FC = () => {
  const { userId, user } = auth();

  return (
    <div className="min-h-screen">
      <nav className="w-full flex px-16 items-center border-b h-16 justify-between">
        <div className="h-ful flex items-center">
          <img src="/logo-large.png" alt="Logo" className="h-10" />
        </div>

        <div className="flex gap-10 mr-10">
          
            <>
              <SignedOut>
                <Link href={"/sign-in"}>
                  <button className="text-white font-medium hover:bg-neutral-500 transition-colors py-2 px-3 rounded-md">
                    Sign in
                  </button>
                </Link>
                <Link href={"/sign-up"}>
                  <button className="text-white font-medium bg-blue-600 py-2 px-3 rounded-md hover:bg-blue-800">
                    Sign up
                  </button>
                </Link>
              </SignedOut>
              <SignedIn>
                <Link href={"/dashboard"}>
                  <button className="text-white font-normal bg-blue-600 py-1.5 px-2 rounded-md hover:bg-blue-800">
                    Dashboard
                  </button>
                </Link>
              </SignedIn>
            </>
        
        </div>
      </nav>
      <br />
      <div className="w-4/5 border bg-white mx-auto p-4">
        <p className="text-lg font-medium">Support Center</p>
        <p>
          Got this {JSON.stringify(user)} -- {userId}
        </p>
        <p>
          Welcome to our support center. You can contact us through a tickets
          system. Your tickets will be answered by our staff
        </p>
        <br />
        <div className="flex justify-between w-full">
          <div className="border w-[31%] hover:-translate-y-2 p-4 transition-transform bg-red-600 rounded-md text-center">
            <center>
              <FaTicketAlt className="h-24 text-white mt-2 w-24 rotate-[135deg]" />
            </center>
            <br />
            <center className="text-lg text-white">TICKETS</center>

            <p className="text-center h-14 text-sm mt-2 text-neutral-100">
              Send tickets through our support centre and get response of your
              doubts, suggestions and issues
            </p>

            <Link href={"/tickets/create"}>
              <button className="w-full p-3 uppercase font-medium text-sm bg-neutral-50 hover:bg-neutral-200 rounded-md text-red-600">
                create ticket
              </button>
            </Link>
          </div>

          <div className="border w-[31%] p-4 bg-green-600 rounded-md text-center hover:-translate-y-2 transition-transform">
            <center>
              <BsCheck2Square className="h-24 text-white mt-2 w-24 font-bold" />
            </center>
            <br />
            <center className="text-lg text-white uppercase">
              view TICKETS
            </center>

            <p className="text-center mt-2 text-sm h-14 text-neutral-100">
              Check the status of your ticket using your ticket number and
              email.
            </p>

            <Link href={"/dashboard"}>
              <button className="w-full p-3 uppercase font-medium text-sm bg-neutral-50 hover:bg-neutral-200 rounded-md text-green-600">
                check ticket
              </button>
            </Link>
          </div>

          <div className="border w-[31%] p-4 bg-blue-500 rounded-md text-center hover:-translate-y-2 transition-transform">
            <center>
              <RiArticleLine className="h-24 text-white mt-2 w-24" />
            </center>
            <br />
            <center className="text-lg text-white">Articles</center>

            <p className="text-center h-14 mt-2 text-sm text-neutral-100">
              Take a look to our articles about common issues, guides and
              documentation
            </p>

            <button className="w-full p-3 uppercase font-medium text-sm bg-neutral-50 hover:bg-neutral-200 rounded-md text-blue-600">
              view articles
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
