"use client";

import { useAuth } from "../context/AuthContext";

import { getAuth, signOut } from "firebase/auth";

import {
  collection,
  getDocs,
} from "firebase/firestore";

import { db } from "../context/AuthContext";

import { useRouter } from "next/navigation";

import {
  useEffect,
  useState,
} from "react";

export default function DashboardPage() {

  const { user } = useAuth();

  const router = useRouter();

  const auth = getAuth();

  const [posts, setPosts] = useState<any[]>([]);

  async function logout() {
    await signOut(auth);

    router.push("/login");
  }

  useEffect(() => {
    async function fetchPosts() {

      const querySnapshot = await getDocs(
        collection(db, "posts")
      );

      const data: any[] = [];

      querySnapshot.forEach((doc) => {
        data.push(doc.data());
      });

      setPosts(data);
    }

    fetchPosts();
  }, []);

  if (!user) {
    return (
      <main className="min-h-screen bg-black text-white flex items-center justify-center">
        Caricamento...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0B1120] text-white flex">

      {/* SIDEBAR */}
      <aside className="w-72 bg-[#111827] border-r border-gray-800 p-6 flex flex-col justify-between">

        <div>

          <h1 className="text-3xl font-bold text-blue-400 mb-10">
            IoTiBatto
          </h1>

          <nav className="space-y-4">

            <div className="bg-blue-600 px-4 py-3 rounded-xl font-medium">
              Dashboard
            </div>

            <div className="hover:bg-gray-800 px-4 py-3 rounded-xl transition cursor-pointer">
              Profilo
            </div>

            <div className="hover:bg-gray-800 px-4 py-3 rounded-xl transition cursor-pointer">
              Community
            </div>

            <div className="hover:bg-gray-800 px-4 py-3 rounded-xl transition cursor-pointer">
              Messaggi
            </div>

            <div className="hover:bg-gray-800 px-4 py-3 rounded-xl transition cursor-pointer">
              Notifiche
            </div>

            <div className="hover:bg-gray-800 px-4 py-3 rounded-xl transition cursor-pointer">
              Settings
            </div>

          </nav>

        </div>

        <div className="bg-[#1E293B] rounded-3xl p-6 border border-gray-700">

          <p className="text-gray-400 text-sm">
            Piano attuale
          </p>

          <h2 className="text-3xl font-bold mt-2">
            Premium
          </h2>

          <button className="mt-5 bg-blue-600 hover:bg-blue-500 transition w-full py-3 rounded-2xl font-semibold">
            Gestisci
          </button>

        </div>

      </aside>

      {/* MAIN */}
      <section className="flex-1 p-10">

        {/* TOP */}
        <div className="flex justify-between items-center mb-10">

          <div>

            <h1 className="text-5xl font-bold">
              Bentornato 👋
            </h1>

            <p className="text-gray-400 mt-3 text-lg">
              Benvenuto nella nuova esperienza IoTiBatto.
            </p>

          </div>

          <div className="flex items-center gap-4">

            <input
              placeholder="Cerca..."
              className="bg-[#1E293B] border border-gray-700 px-5 py-3 rounded-2xl outline-none w-80"
            />

            <div className="flex items-center gap-4">

              <div className="text-right">

                <p className="font-semibold">
                  {user.email}
                </p>

                <p className="text-gray-400 text-sm">
                  Premium Member
                </p>

              </div>

              <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center font-bold text-xl">
                {user.email?.charAt(0).toUpperCase()}
              </div>

            </div>

          </div>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-3 gap-6 mb-10">

          <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-7 rounded-3xl shadow-xl">

            <p className="text-blue-100">
              Followers
            </p>

            <h2 className="text-5xl font-bold mt-4">
              12.4K
            </h2>

          </div>

          <div className="bg-[#111827] border border-gray-800 p-7 rounded-3xl">

            <p className="text-gray-400">
              Post Creati
            </p>

            <h2 className="text-5xl font-bold mt-4">
              {posts.length}
            </h2>

          </div>

          <div className="bg-[#111827] border border-gray-800 p-7 rounded-3xl">

            <p className="text-gray-400">
              Notifiche
            </p>

            <h2 className="text-5xl font-bold mt-4">
              18
            </h2>

          </div>

        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-2 gap-6">

          {/* LEFT */}
          <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

            <h2 className="text-2xl font-bold mb-6">
              Post dal Database
            </h2>

            <div className="space-y-4">

              {posts.map((post, index) => (

                <div
                  key={index}
                  className="bg-[#1E293B] rounded-2xl p-5"
                >

                  <h3 className="text-xl font-bold mb-2">
                    {post.title}
                  </h3>

                  <p className="text-gray-300">
                    {post.content}
                  </p>

                  <p className="text-blue-400 mt-3 text-sm">
                    {post.author}
                  </p>

                </div>

              ))}

            </div>

          </div>

          {/* RIGHT */}
          <div className="space-y-6">

            <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-4">
                Profilo
              </h2>

              <div className="flex items-center gap-5">

                <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-3xl font-bold">
                  {user.email?.charAt(0).toUpperCase()}
                </div>

                <div>

                  <h3 className="text-2xl font-bold">
                    {user.email}
                  </h3>

                  <p className="text-gray-400">
                    Premium Member
                  </p>

                </div>

              </div>

            </div>

            <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">

              <h2 className="text-2xl font-bold mb-5">
                Quick Actions
              </h2>

              <div className="grid grid-cols-2 gap-4">

                <button className="bg-blue-600 hover:bg-blue-500 transition p-4 rounded-2xl font-semibold">
                  Nuovo Post
                </button>

                <button className="bg-[#1E293B] hover:bg-[#273449] transition p-4 rounded-2xl font-semibold">
                  Modifica Profilo
                </button>

                <button className="bg-[#1E293B] hover:bg-[#273449] transition p-4 rounded-2xl font-semibold">
                  Community
                </button>

                <button className="bg-[#1E293B] hover:bg-[#273449] transition p-4 rounded-2xl font-semibold">
                  Messaggi
                </button>

              </div>

              <button
                onClick={logout}
                className="w-full mt-5 bg-red-600 hover:bg-red-500 transition p-4 rounded-2xl font-semibold"
              >
                Logout
              </button>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}