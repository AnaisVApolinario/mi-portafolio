import type { Metadata } from "next";
import { Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "../components/Providers";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anais Valverde · Backend & Full Stack Developer",
  description:
    "Portafolio de Anais Valverde, desarrolladora Full Stack con foco en backend: Java, Spring Boot y APIs REST. Lima, Perú.",
  openGraph: {
    title: "Anais Valverde · Backend & Full Stack Developer",
    description:
      "Java, Spring Boot y APIs REST, con interfaces en React y Next.js.",
    type: "website",
    locale: "es_PE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${jetbrains.variable} antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
