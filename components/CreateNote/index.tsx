"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { app } from "../../lib/mongodb";

const CreateNote = () => {
  const { register, reset, handleSubmit } = useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const createNewNote = async (data: any) => {
    setLoading(true);
    const collection = app.currentUser
      ?.mongoClient("mongodb-atlas")
      .db("Next13")
      .collection("notes");

    await collection?.insertOne({ title: data?.title, text: data?.text });
    reset();
    setLoading(false);
    router.refresh();
  };

  return (
    <form
      className="flex flex-col max-w-[40%] gap-y-4"
      onSubmit={handleSubmit((data) => createNewNote(data))}
    >
      <input
        type="text"
        placeholder="Title"
        {...register("title")}
        disabled={loading}
        className="rounded-lg p-1 border border-sky-300 outline-none ring-0 ring-sky-500 focus:ring-2"
      />
      <input
        type="text"
        placeholder="Text"
        {...register("text")}
        disabled={loading}
        className="rounded-lg p-1 border border-sky-300 outline-none ring-0 ring-sky-500 focus:ring-2"
      />
      <button
        type="submit"
        disabled={loading}
        className="border-none rounded-lg bg-sky-500 hover:bg-sky-600 transition-colors text-white p-3 uppercase max-w-fit"
      >
        Create
      </button>
    </form>
  );
};

export default CreateNote;
