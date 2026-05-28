"use client";

import { useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const auth = getAuth();

  const router = useRouter();

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  async function register() {
    try {
      await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      router.push("/dashboard");
    } catch (error) {
      alert("Errore registrazione");
    }
  }

  return (
    <main className="min-h-screen bg-[#0B1120] text-white flex items-center justify-center">

      <div className="bg-[#111827] p-10 rounded-3xl w-[400px] border border-gray-800">

        <h1 className="text-4xl font-bold mb-8 text-center">
          Registrati
        </h1>

        <div className="space-y-5">

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full bg-[#1E293B] border border-gray-700 px-5 py-4 rounded-2xl outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full bg-[#1E293B] border border-gray-700 px-5 py-4 rounded-2xl outline-none"
          />

          <button
            onClick={register}
            className="w-full bg-blue-600 hover:bg-blue-500 transition py-4 rounded-2xl font-bold"
          >
            Crea Account
          </button>

        </div>

      </div>

    </main>
  );
}