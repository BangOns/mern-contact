"use client";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { axiosPerson } from "@/axios/Config";
import { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const SchemaAddNewPerson = z.object({
  oldName: z.string(),
  name: z
    .string({
      required_error: "Name is required",
      invalid_type_error: "Name must be a string",
    })
    .nonempty("Name is in required"),
  email: z
    .string()
    .nonempty("Email is in required")
    .email("Email is not valid"),
  gender: z.enum(["Male", "Female"], {
    message: "Gender must be Male or Female",
  }),
});
type TypeSchemaPerson = z.infer<typeof SchemaAddNewPerson>;

export default function MyFormEdit({ id }: { id: string }) {
  const SelectGenderAll = SchemaAddNewPerson.shape.gender._def.values;
  const [errorToDb, errorToDbSet] = useState("");
  const formAdd = useForm<TypeSchemaPerson>({
    resolver: zodResolver(SchemaAddNewPerson),
    defaultValues: {
      oldName: "",
      name: "",
      email: "",
      gender: undefined,
    },
  });
  const { control, handleSubmit, setValue } = formAdd;
  const router = useRouter();
  async function onSubmitted(values: TypeSchemaPerson) {
    try {
      const { oldName, name, email, gender } = values;
      const responseDone = await axiosPerson.put(`/users/${id}`, {
        oldName,
        name,
        email,
        gender,
      });
      if (responseDone.statusText.toLowerCase() === "ok") {
        toast.success("Data Updated");
        router.push("/");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        errorToDbSet(error.response?.data.data[0].msg);
      }
    }
  }
  async function GetDataByID() {
    const response = await axiosPerson.get(`/users/${id}`);
    const user = response.data.data;
    setValue("oldName", formAdd.getValues("oldName") || user.name);
    setValue("name", user.name);
    setValue("email", user.email);
    setValue("gender", user.gender);
  }

  useEffect(() => {
    GetDataByID();
  }, [setValue]);
  return (
    <section>
      <Form {...formAdd}>
        <form
          onSubmit={handleSubmit(onSubmitted)}
          className="space-y-6 border rounded-lg p-3 "
        >
          <FormField
            control={control}
            name="oldName"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    placeholder="username"
                    type="hidden"
                    value={field.value}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="username" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="email" type="email" {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  value={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a gender" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {SelectGenderAll?.map((gender) => (
                      <SelectItem key={gender} value={gender}>
                        {gender}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormMessage>{errorToDb}</FormMessage>

          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </section>
  );
}
