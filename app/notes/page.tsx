import Link from "next/link";
import React, { Suspense } from "react";
import { CreateNote, Note } from "../../components";
import { app } from "../../lib/mongodb";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferedRegion = "auto";

const getNotes = async () => {
  const collection = app.currentUser
    ?.mongoClient("mongodb-atlas")
    .db("Next13")
    .collection("notes");

  return await collection?.find({});
};

const Notes = async () => {
  console.log(app.currentUser);

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
            <Suspense key={_id} fallback={<p>Loading note...</p>}>
              <Link href={`/notes/${_id}`}>
                <Note isDone={isDone} title={title} text={text} />
              </Link>
            </Suspense>
          )
        )}
      </section>
      <CreateNote />
    </main>
  );
};

export default Notes;
