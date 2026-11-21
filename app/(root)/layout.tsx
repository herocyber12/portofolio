import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";

export const metadata: Metadata = {
  title: "Krisna Joko Purjianto | Software Engineer",
};

export default function RootRedirectLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="relative h-dvh w-full overflow-hidden bg-[#06100f]">{children}</body>
    </html>
  );
}
