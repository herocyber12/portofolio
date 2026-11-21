import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 | Krisna Joko Purjianto",
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="flex h-dvh w-full flex-col items-center justify-center gap-4 bg-[#06100f] p-6 text-center text-white">
        <p className="font-mono text-xs tracking-[0.16em] text-emerald-200/65">CRF / 404</p>
        <h1 className="text-2xl font-semibold">Page not found · Halaman tidak ditemukan</h1>
        <div className="flex gap-4 text-sm text-emerald-200">
          <Link href="/en" className="underline underline-offset-4">English</Link>
          <Link href="/id" className="underline underline-offset-4">Bahasa Indonesia</Link>
        </div>
      </body>
    </html>
  );
}
