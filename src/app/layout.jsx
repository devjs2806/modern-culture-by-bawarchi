import "./globals.css";

export const metadata = {
  title: "Modern Culture By Bawarchi",
  description:
    "Luxury fine dining restaurant with royal ambience and modern elegance.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="page-shell">
        {children}
      </body>
    </html>
  );
}