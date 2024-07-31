import { Button } from "@/components/ui/button";
import TableList from "@/myComponents/TableList";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container w-full mx-auto mt-5 ">
      <header className="text-3xl">
        <h1>Daftar List Nama dan Email</h1>
        <Button asChild className="bg-sky-500 font-medium text-white mt-5">
          <Link href={"/add"}>Tambah List</Link>
        </Button>
      </header>
      <TableList />
    </main>
  );
}
