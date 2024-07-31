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

export default function Loading() {
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
          <TableRow>
            <TableCell className="font-medium">....</TableCell>
            <TableCell>....</TableCell>
            <TableCell>....</TableCell>
            <TableCell>.....</TableCell>
            <TableCell className="text-right flex gap-2 justify-end">
              <Button
                size={"sm"}
                className="bg-green-500 text-white hover:bg-green-700"
              >
                ....
              </Button>
              <Button
                size={"sm"}
                className="bg-red-500 text-white  
      hover:bg-red-700 
      "
              >
                ....
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">....</TableCell>
            <TableCell>....</TableCell>
            <TableCell>....</TableCell>
            <TableCell>.....</TableCell>
            <TableCell className="text-right flex gap-2 justify-end">
              <Button
                size={"sm"}
                className="bg-green-500 text-white hover:bg-green-700"
              >
                ....
              </Button>
              <Button
                size={"sm"}
                className="bg-red-500 text-white  
      hover:bg-red-700 
      "
              >
                ....
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">....</TableCell>
            <TableCell>....</TableCell>
            <TableCell>....</TableCell>
            <TableCell>.....</TableCell>
            <TableCell className="text-right flex gap-2 justify-end">
              <Button
                size={"sm"}
                className="bg-green-500 text-white hover:bg-green-700"
              >
                ....
              </Button>
              <Button
                size={"sm"}
                className="bg-red-500 text-white  
      hover:bg-red-700 
      "
              >
                ....
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">....</TableCell>
            <TableCell>....</TableCell>
            <TableCell>....</TableCell>
            <TableCell>.....</TableCell>
            <TableCell className="text-right flex gap-2 justify-end">
              <Button
                size={"sm"}
                className="bg-green-500 text-white hover:bg-green-700"
              >
                ....
              </Button>
              <Button
                size={"sm"}
                className="bg-red-500 text-white  
      hover:bg-red-700 
      "
              >
                ....
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </section>
  );
}
