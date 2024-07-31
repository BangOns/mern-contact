"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { axiosPerson } from "@/axios/Config";
import ButtonDelete from "./ButtonDelete";
import { useEffect, useState } from "react";
import LoadingTable from "./LoadTable";

export default function TableList() {
  const [dataPerson, dataPersonSet] = useState([]);
  async function GetDataAllUserByAPI() {
    const response = await axiosPerson.get("/users");
    dataPersonSet(response.data.data);
  }
  useEffect(() => {
    GetDataAllUserByAPI();
  }, [dataPerson]);
  return (
    <section className="max-w-full md:w-4/6 lg:w-1/2 mt-5">
      <Table>
        <TableCaption>
          Ini adalah Table List Nama dan Email yang diambil dari database
          Mongodb
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="">Number</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Gender</TableHead>
            <TableHead className="text-right">Aksi</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataPerson.length !== 0 ? (
            dataPerson.map((persons: IPerson) => (
              <TableRow key={persons._id}>
                <TableCell className="font-medium">
                  {persons._id.substring(1, 5)}
                </TableCell>
                <TableCell>{persons.name}</TableCell>
                <TableCell>{persons.email}</TableCell>
                <TableCell>{persons.gender}</TableCell>
                <TableCell className="text-right flex gap-2 justify-end">
                  <Button
                    asChild
                    size={"sm"}
                    className="bg-green-500 text-white hover:bg-green-700"
                  >
                    <Link href={`/details/${persons._id}`}>Details</Link>
                  </Button>
                  <ButtonDelete id={persons._id} />
                </TableCell>
              </TableRow>
            ))
          ) : (
            <>
              <LoadingTable />
              <LoadingTable />
              <LoadingTable />
              <LoadingTable />
            </>
          )}
        </TableBody>
      </Table>
    </section>
  );
}
