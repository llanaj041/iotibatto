import "./globals.css";

import { AuthProvider } from "./context/AuthContext";

export const metadata = {
  title: "IoTiBatto",
  description: "Nuova piattaforma premium",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}