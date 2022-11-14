"use client";
import Link from "next/link";
import React from "react";
import { stripeJS } from "../../lib/stripe";

const Navbar = () => (
  <nav className="w-full py-4 px-2 flex justify-between bg-zinc-50 fixed top-0 left-0">
    <Link href="/">
      <h2 className="font-bold text-lg text-zinc-800 cursor-pointer">
        Notes App
      </h2>
    </Link>
    <ul className="flex grow-[0.3] justify-around items-center font-medium text-sky-500">
      <Link href="/notes">
        <li>Notes</li>
      </Link>
      <Link href="/about">
        <li>About</li>
      </Link>
      <Link href="/contacts">
        <li>Contact</li>
      </Link>
      <li>
        <button
          onClick={async () => {
            const { sessionId } = await (
              await fetch("api/checkout", {
                method: "POST",
              })
            ).json();

            (await stripeJS)?.redirectToCheckout({ sessionId });
          }}
        >
          Check out
        </button>
      </li>
    </ul>
  </nav>
);

export default Navbar;
