"use client";

import { useAuth } from "../context/AuthContext";

import { getAuth, signOut } from "firebase/auth";

import {
  collection,
  getDocs,
  addDoc,
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

  const [title, setTitle] = useState("");

  const [content, setContent] = useState("");

  async function logout() {
    await signOut(auth);

    router.push("/login");
  }

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

  async function createPost() {

    if (!title || !content) return;

    await addDoc(collection(db, "posts"), {
      title,
      content,
      author: user?.email,
    });

    setTitle("");
    setContent("");

    fetchPosts();
  }

  useEffect(() => {
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

          </nav>

        </div>

        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-500 transition w-full py-3 rounded-2xl font-semibold"
        >
          Logout
        </button>

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
              Dashboard realtime IoTiBatto.
            </p>

          </div>

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

        {/* CREATE POST */}
        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8 mb-10">

          <h2 className="text-2xl font-bold mb-6">
            Crea Post
          </h2>

          <div className="space-y-4">

            <input
              value={title}
              onChange={(e) =>
                setTitle(e.target.value)
              }
              placeholder="Titolo"
              className="w-full bg-[#1E293B] border border-gray-700 p-4 rounded-2xl outline-none"
            />

            <textarea
              value={content}
              onChange={(e) =>
                setContent(e.target.value)
              }
              placeholder="Scrivi qualcosa..."
              className="w-full bg-[#1E293B] border border-gray-700 p-4 rounded-2xl outline-none h-40"
            />

            <button
              onClick={createPost}
              className="bg-blue-600 hover:bg-blue-500 transition px-8 py-4 rounded-2xl font-semibold"
            >
              Pubblica Post
            </button>

          </div>

        </div>

        {/* POSTS */}
        <div className="space-y-6">

          {posts.map((post, index) => (

            <div
              key={index}
              className="bg-[#111827] border border-gray-800 rounded-3xl p-8"
            >

              <h2 className="text-3xl font-bold mb-4">
                {post.title}
              </h2>

              <p className="text-gray-300 text-lg">
                {post.content}
              </p>

              <p className="text-blue-400 mt-6">
                {post.author}
              </p>

            </div>

          ))}

        </div>

      </section>

    </main>
  );
}