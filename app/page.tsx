import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center gap-6">
      <h1 className="text-5xl font-bold">
        IoTiBatto 🚀
      </h1>

      <p className="text-zinc-400">
        Benvenuto nel nuovo sito
      </p>

      <div className="flex gap-4">
        <Link
          href="/login"
          className="bg-white text-black px-6 py-3 rounded-xl"
        >
          Accedi
        </Link>

        <Link
          href="/register"
          className="bg-zinc-800 px-6 py-3 rounded-xl"
        >
          Registrati
        </Link>
      </div>
    </main>
  );
}