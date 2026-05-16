"use client";

import { Button, Card } from "@heroui/react";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className=" flex justify-center items-center p-4">
      <Card className="max-w-[500px] p-8 shadow-lg border border-default-100 bg-black">
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-8xl font-extrabold bg-gradient-to-tr from-pink-500 to-purple-600 bg-clip-text text-transparent select-none">
            404
          </h1>

          <h2 className="font-bold text-2xl md:text-3xl text-foreground text-white">
            Oops! Page Not Found
          </h2>

          <p className="text-default-500 text-sm md:text-base max-w-[80%] text-white">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>

          <Link href={"/"}>
            <Button
              size="lg"
              className="mt-4 font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 shadow-md"
              radius="full"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
};

export default NotFound;
