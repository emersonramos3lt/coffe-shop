import "./globals.css";

export const metadata = {
  title: "Coffe Shop",
  description: "Best coffe in the world!"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
