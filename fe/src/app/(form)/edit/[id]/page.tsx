import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

import MyFormEdit from "@/myComponents/MyFormEdit";

export default function Edit({ params }: { params: any }) {
  return (
    <section className="w-full">
      <header>
        <h1 className="text-3xl font-medium font-sans">Edit Person</h1>
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
        <MyFormEdit id={params.id} />
      </section>
    </section>
  );
}
