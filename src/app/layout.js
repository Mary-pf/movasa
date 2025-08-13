import "./globals.css";

export const metadata = {
  title: "مواسا",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        {/* لینک فونت وزیر از jsDelivr */}
        <link
          href="https://cdn.jsdelivr.net/gh/rastikerdar/vazir-font@v30.1.0/dist/font-face.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body style={{ fontFamily: "Vazir, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
