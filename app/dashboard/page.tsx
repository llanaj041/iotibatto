export default function DashboardPage() {
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
              Home
            </div>

            <div className="hover:bg-gray-800 px-4 py-3 rounded-xl cursor-pointer transition">
              Profilo
            </div>

            <div className="hover:bg-gray-800 px-4 py-3 rounded-xl cursor-pointer transition">
              Community
            </div>

            <div className="hover:bg-gray-800 px-4 py-3 rounded-xl cursor-pointer transition">
              Messaggi
            </div>

            <div className="hover:bg-gray-800 px-4 py-3 rounded-xl cursor-pointer transition">
              Notifiche
            </div>

            <div className="hover:bg-gray-800 px-4 py-3 rounded-xl cursor-pointer transition">
              Impostazioni
            </div>
          </nav>
        </div>

        <div className="bg-[#1E293B] rounded-2xl p-5">
          <p className="text-gray-400 text-sm">
            Account Premium
          </p>

          <h2 className="text-3xl font-bold mt-2">
            PRO
          </h2>

          <button className="mt-5 bg-blue-600 hover:bg-blue-500 transition w-full py-3 rounded-xl font-semibold">
            Upgrade
          </button>
        </div>
      </aside>

      {/* CONTENT */}
      <section className="flex-1 p-10">

        {/* TOPBAR */}
        <div className="flex justify-between items-center mb-10">
          
          <div>
            <h1 className="text-4xl font-bold">
              Bentornato 👋
            </h1>

            <p className="text-gray-400 mt-2">
              Questa è la tua dashboard personale.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <input
              placeholder="Cerca..."
              className="bg-[#1E293B] px-5 py-3 rounded-xl outline-none border border-gray-700 w-80"
            />

            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center font-bold">
              A
            </div>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-3 gap-6 mb-10">

          <div className="bg-[#111827] p-6 rounded-3xl border border-gray-800">
            <p className="text-gray-400">
              Followers
            </p>

            <h2 className="text-4xl font-bold mt-3">
              12.4K
            </h2>
          </div>

          <div className="bg-[#111827] p-6 rounded-3xl border border-gray-800">
            <p className="text-gray-400">
              Post Pubblicati
            </p>

            <h2 className="text-4xl font-bold mt-3">
              248
            </h2>
          </div>

          <div className="bg-[#111827] p-6 rounded-3xl border border-gray-800">
            <p className="text-gray-400">
              Notifiche
            </p>

            <h2 className="text-4xl font-bold mt-3">
              18
            </h2>
          </div>
        </div>

        {/* BIG SECTION */}
        <div className="bg-[#111827] border border-gray-800 rounded-3xl p-8">
          
          <h2 className="text-2xl font-bold mb-4">
            Attività recente
          </h2>

          <div className="space-y-4">

            <div className="bg-[#1E293B] p-5 rounded-2xl">
              Hai aggiornato il tuo profilo.
            </div>

            <div className="bg-[#1E293B] p-5 rounded-2xl">
              Nuovo follower ricevuto.
            </div>

            <div className="bg-[#1E293B] p-5 rounded-2xl">
              Benvenuto nella nuova piattaforma IoTiBatto 🚀
            </div>

          </div>
        </div>

      </section>
    </main>
  );
}