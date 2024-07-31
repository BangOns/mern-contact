"use client";
import { Button } from "@/components/ui/button";
import { OctagonAlert } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="w-screen h-screen">
      <div className="w-full h-full grid place-items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="flex items-center">
            <OctagonAlert />
            <h1 className="text-3xl text-center font-bold inline">404</h1>
          </div>
          <h2 className="text-center text-2xl mb-4">Page Not Found</h2>
          <Button
            className="bg-green-500 hover:bg-green-700 font-medium"
            onClick={() => router.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
