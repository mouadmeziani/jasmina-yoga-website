import { Metadata } from "next";
import { Providers } from "@/app/providers";

export const metadata: Metadata = {
  title: "Jasmina's Yoga",
  description: "Yoga in der Natur",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
