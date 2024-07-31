"use client";

import { axiosPerson } from "@/axios/Config";
import { toast } from "react-toastify";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

async function DeleteDataPerson(id: string) {
  const response = await axiosPerson.delete(`/users/${id}`);
  if (response.statusText.toLowerCase() === "ok") {
    toast.success("Data Deleted");
  } else {
    toast.error("Data Not Deleted or Error");
  }
}
export default function ButtonDelete({ id }: { id: string }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger className="bg-red-500 text-white hover:bg-red-700 px-2 rounded-md">
        Delete
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            Apakah Kamu ingin menghapus akun ini?
          </AlertDialogTitle>
          <AlertDialogDescription>
            Karena jika sudah di hapus maka data tersebut tidak bisa
            dikembalikan
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => {
              DeleteDataPerson(id);
            }}
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
