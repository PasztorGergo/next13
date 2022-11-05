import React from "react";
import { credentials, app, ObjectId } from "../../../lib/mongodb";

const getNote = async (noteId: string) => {
  const user = await app.logIn(credentials);
  const collection = user
    .mongoClient("mongodb-atlas")
    .db("Next13")
    .collection("notes");

  return await collection?.findOne({ _id: new ObjectId(noteId) });
};

const Note = async ({ params }: any) => {
  const note = await getNote(params._id);

  return (
    <div className="mt-24">
      <h2>{note?.title}</h2>
      <p>{note?.text}</p>
    </div>
  );
};

export default Note;
