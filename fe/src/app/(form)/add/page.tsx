"use client";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import MyForm from "@/myComponents/MyForm";

export default function Add() {
  return (
    <section className="w-full">
      <header>
        <h1 className="text-3xl font-medium font-sans">Create New Person</h1>
        <Button
          asChild
          className="bg-sky-500 font-medium hover:bg-sky-700 text-white mt-5"
        >
          <Link href={"/"} className="text-xl gap-2  ">
            <ChevronLeft />
            Back
          </Link>
        </Button>
      </header>
      <section className="w-1/2 mt-10">
        <MyForm />
      </section>
    </section>
  );
}
