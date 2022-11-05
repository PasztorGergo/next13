import Link from "next/link";
import React from "react";
import { CreateNote, Note } from "../../components";
import { app, credentials } from "../../lib/mongodb";

const getNotes = async () => {
  const user = await app.logIn(credentials);
  const collection = user
    .mongoClient("mongodb-atlas")
    .db("Next13")
    .collection("notes");

  return await collection?.find({});
};

const Notes = async () => {
  const notes = await getNotes();
  console.table(notes);
  return (
    <main className="mt-24">
      <section className="flex justify-evenly gap-y-3 mb-4">
        {notes?.map(
          ({
            _id,
            text,
            title,
            isDone,
          }: {
            _id: string;
            text: string;
            title: string;
            isDone: boolean;
          }) => (
            <Link href={`/notes/${_id}`}>
              <Note key={_id} isDone={isDone} title={title} text={text} />
            </Link>
          )
        )}
      </section>
      <CreateNote />
    </main>
  );
};

export default Notes;
