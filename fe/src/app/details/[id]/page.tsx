import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";
import { ImageImport } from "@/utils/ImportImage";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { axiosPerson } from "@/axios/Config";

async function GetDataByID(paramsId: string) {
  const response = await axiosPerson.get(`/users/${paramsId}`);
  return response.data.data;
}

export default async function page(params: any) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response: IPerson = await GetDataByID(params.params.id);

  return (
    <div className=" w-full h-screen grid place-items-center">
      <Card className="w-1/4">
        <CardHeader className="w-full p-0 h-auto ">
          <figure className="w-full ">
            <Image
              src={ImageImport.ImageBGProfile}
              alt="bgProfile"
              className="rounded h-48 object-cover "
              width={500}
              height={300}
            />
            <figcaption className="w-full grid place-items-center">
              <Image
                src={ImageImport.ImagePPProfile}
                alt="ppProfile"
                className="w-20 h-20 -mt-11 border-4  border-white border-spacing-1 rounded-full object-cover"
                width={500}
                height={300}
              />
            </figcaption>
          </figure>
        </CardHeader>
        <CardContent>
          <h4 className="font-medium text-lg text-center">{response?.name}</h4>
          <p className="text-center text-sm font-medium text-slate-500/50">
            {response?.email}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between ">
          <Button
            asChild
            className="w-1/3 bg-red-500 hover:bg-red-700 text-white"
          >
            <Link href={"/"}>Back</Link>
          </Button>
          <Button
            asChild
            className="w-1/3 bg-sky-500 hover:bg-sky-700 text-white"
          >
            <Link href={`/edit/${response?._id}`}>Edit</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
