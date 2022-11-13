"use client";

import Head from "next/head";
import React from "react";
import { useForm } from "react-hook-form";
import { app } from "../../lib/mongodb";
import * as Realm from "realm-web";
import { useRouter } from "next/navigation";

const Register = () => {
  const { register, handleSubmit, setError } = useForm();
  const router = useRouter();

  const login = async (data: any) => {
    await app.logIn(Realm.Credentials.emailPassword(data.email, data.password));
    router.push("/notes");
  };

  return (
    <>
      <Head>
        <title>My App | Login</title>
      </Head>
      <main className="h-screen grid place-items-center">
        <form
          onSubmit={handleSubmit((data) => login(data))}
          className="flex flex-col justify-between p-4 rounded-lg border border-zinc-400 gap-y-5"
        >
          <h2 className="capitalize font-bold text-xl text-zinc-800 mb-3">
            Log in
          </h2>
          <div className="flex flex-col items-center justify-start">
            <label
              htmlFor="email"
              className="capitalize font-bold text-zinc-800"
            >
              Email address
            </label>
            <input
              id="email"
              type="email"
              {...register("email")}
              className="rounded-lg p-1 border border-sky-300 outline-none ring-0 ring-sky-500 focus:ring-2"
              autoComplete="username"
            />
          </div>
          <div className="flex flex-col items-center justify-start">
            <label
              htmlFor="password"
              className="capitalize font-bold text-zinc-800"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register("password")}
              className="rounded-lg p-1 border border-sky-300 outline-none ring-0 ring-sky-500 focus:ring-2"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="rounded-lg bg-sky-500 text-white border-none outline-none p-3 font-bold"
          >
            Log in
          </button>
        </form>
      </main>
    </>
  );
};

export default Register;
