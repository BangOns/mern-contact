import { TableCell, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function LoadingTable() {
  return (
    <TableRow>
      <TableCell className="font-medium">....</TableCell>
      <TableCell>....</TableCell>
      <TableCell>....</TableCell>
      <TableCell>....</TableCell>
      <TableCell className="text-right flex gap-2 justify-end">
        <Button
          asChild
          size={"sm"}
          className="bg-green-500 text-white hover:bg-green-700"
        >
          ....
        </Button>
        <Button
          asChild
          size={"sm"}
          className="bg-red-500 text-white hover:bg-red-700"
        >
          ....
        </Button>
      </TableCell>
    </TableRow>
  );
}
