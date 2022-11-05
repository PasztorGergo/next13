import React from "react";

type Props = {
  title: string;
  text: string;
  isDone: boolean;
};

const Note = ({ isDone, text, title }: Props) => {
  return (
    <div className="rounded-lg bg-zinc-200 w-fit p-5 flex flex-col gap-y-3 h-full">
      <h3 className="text-zinc-800 text-lg font-medium">{title}</h3>
      <p className="text-zinc-700 w-full">{text}</p>
    </div>
  );
};

export default Note;
