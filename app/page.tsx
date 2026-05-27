"use client";

import { useState } from "react";

export default function Home() {

  const [bets, setBets] = useState({
    interMilan: "",
    romaJuve: "",
    napoliLazio: "",
  });

  const [history, setHistory] = useState<any[]>([]);

  const odds = {
    interMilan: {
      "1": 1.85,
      "X": 3.40,
      "2": 4.20,
    },

    romaJuve: {
      "1": 2.10,
      "X": 3.20,
      "2": 3.10,
    },

    napoliLazio: {
      "1": 1.70,
      "X": 3.60,
      "2": 4.80,
    },
  };

  function selectBet(match: string, value: string) {

    setBets({
      ...bets,
      [match]: value,
    });

  }

  function calculateTotalOdds() {

    let total = 1;

    Object.entries(bets).forEach(([match, value]) => {

      if (value !== "") {

        total *= odds[match as keyof typeof odds][
          value as "1" | "X" | "2"
        ];

      }

    });

    return total.toFixed(2);

  }

  function saveTicket() {

    const newTicket = {
      bets: { ...bets },
      totalOdds: calculateTotalOdds(),
      date: new Date().toLocaleString(),
    };

    setHistory([newTicket, ...history]);

  }

  return (

    <main className="min-h-screen bg-gradient-to-b from-[#050816] via-[#071229] to-[#0F172A] text-white">

      {/* NAVBAR */}

      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050816]/80 border-b border-blue-500">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

          <h1 className="text-3xl font-black text-blue-400">
            iotibatto.it
          </h1>

          <nav className="hidden md:flex gap-8 font-semibold">

            <a href="#" className="hover:text-blue-400 transition">
              Home
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              Schedine
            </a>

            <a href="#" className="hover:text-blue-400 transition">
              Classifica
            </a>

          </nav>

        </div>

      </header>

      {/* HERO */}

      <section className="text-center px-6 py-24">

        <div className="inline-block px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500 text-blue-300 text-sm mb-8">
          🔥 Fantasy Football Serie A
        </div>

        <h2 className="text-6xl md:text-7xl font-black max-w-5xl mx-auto leading-tight bg-gradient-to-r from-white via-blue-300 to-blue-500 bg-clip-text text-transparent">
          Costruisci la tua schedina
        </h2>

        <p className="mt-8 text-xl text-gray-300 max-w-3xl mx-auto">
          Scegli i risultati delle partite e crea la schedina perfetta.
        </p>

      </section>

      {/* CONTENT */}

      <section className="max-w-7xl mx-auto px-6 pb-24 grid lg:grid-cols-3 gap-8">

        {/* MATCHES */}

        <div className="lg:col-span-2 space-y-8">

          {[
            {
              key: "interMilan",
              home: "Inter",
              away: "Milan",
            },

            {
              key: "romaJuve",
              home: "Roma",
              away: "Juventus",
            },

            {
              key: "napoliLazio",
              home: "Napoli",
              away: "Lazio",
            },
          ].map((match) => (

            <div
              key={match.key}
              className="bg-[#0F172A]/80 border border-blue-500 rounded-3xl p-8"
            >

              <div className="flex justify-between items-center text-3xl font-bold">

                <span>{match.home}</span>

                <span className="text-blue-400">
                  VS
                </span>

                <span>{match.away}</span>

              </div>

              <div className="grid grid-cols-3 gap-4 mt-10">

                {["1", "X", "2"].map((value) => (

                  <button
                    key={value}
                    onClick={() => selectBet(match.key, value)}
                    className={`py-5 rounded-2xl font-bold text-xl transition-all duration-300 ${
                      bets[match.key as keyof typeof bets] === value
                        ? "bg-blue-600 scale-105 shadow-[0_0_25px_rgba(37,99,235,0.7)]"
                        : "bg-gray-700 hover:bg-gray-600"
                    }`}
                  >
                    {value} • {
                      odds[match.key as keyof typeof odds][
                        value as "1" | "X" | "2"
                      ]
                    }
                  </button>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* BET SLIP */}

        <div className="space-y-8">

          <div className="bg-[#0F172A]/80 border border-blue-500 rounded-3xl p-8 sticky top-28">

            <h3 className="text-3xl font-bold mb-8 text-blue-400">
              La tua schedina
            </h3>

            <div className="space-y-6">

              <div className="border-b border-gray-700 pb-4">

                <p className="text-gray-400">
                  Inter vs Milan
                </p>

                <p className="text-2xl font-bold mt-2">
                  {bets.interMilan || "-"}
                </p>

              </div>

              <div className="border-b border-gray-700 pb-4">

                <p className="text-gray-400">
                  Roma vs Juventus
                </p>

                <p className="text-2xl font-bold mt-2">
                  {bets.romaJuve || "-"}
                </p>

              </div>

              <div className="border-b border-gray-700 pb-4">

                <p className="text-gray-400">
                  Napoli vs Lazio
                </p>

                <p className="text-2xl font-bold mt-2">
                  {bets.napoliLazio || "-"}
                </p>

              </div>

            </div>

            <div className="mt-10 bg-[#071229] rounded-2xl p-6 border border-blue-500">

              <p className="text-gray-400">
                Quota Totale
              </p>

              <h4 className="text-5xl font-black text-blue-400 mt-3">
                {calculateTotalOdds()}
              </h4>

            </div>

            <button
              onClick={saveTicket}
              className="w-full mt-10 bg-blue-600 hover:bg-blue-500 transition py-5 rounded-2xl font-bold text-xl shadow-[0_0_30px_rgba(37,99,235,0.6)]"
            >
              Conferma schedina
            </button>

          </div>

          {/* HISTORY */}

          <div className="bg-[#0F172A]/80 border border-blue-500 rounded-3xl p-8">

            <h3 className="text-3xl font-bold mb-8 text-blue-400">
              Cronologia schedine
            </h3>

            <div className="space-y-6">

              {history.length === 0 && (

                <p className="text-gray-400">
                  Nessuna schedina giocata
                </p>

              )}

              {history.map((ticket, index) => (

                <div
                  key={index}
                  className="border border-gray-700 rounded-2xl p-5 bg-[#071229]"
                >

                  <p className="text-sm text-gray-400 mb-3">
                    {ticket.date}
                  </p>

                  <div className="space-y-2">

                    <p>
                      Inter vs Milan:
                      <span className="text-blue-400 font-bold ml-2">
                        {ticket.bets.interMilan || "-"}
                      </span>
                    </p>

                    <p>
                      Roma vs Juventus:
                      <span className="text-blue-400 font-bold ml-2">
                        {ticket.bets.romaJuve || "-"}
                      </span>
                    </p>

                    <p>
                      Napoli vs Lazio:
                      <span className="text-blue-400 font-bold ml-2">
                        {ticket.bets.napoliLazio || "-"}
                      </span>
                    </p>

                  </div>

                  <div className="mt-5 text-2xl font-black text-green-400">

                    Quota: {ticket.totalOdds}

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}

      <footer className="border-t border-blue-500 py-10 text-center text-gray-400">

        <p>
          © 2026 iotibatto.it — Tutti i diritti riservati
        </p>

      </footer>

    </main>

  );

}