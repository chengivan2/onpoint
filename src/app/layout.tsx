import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ScrollToTop from './rootcomponents/ScrollToTop';
import { inter, alegreyaSans } from './rootcomponents/fonts';

export const metadata: Metadata = {
  title: "OnPoint",
  description: "We will take you anywhere",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${alegreyaSans} ${inter.variable}`}>
      <body className={`antialiased flex flex-col bg-lightmode-bg-color dark:bg-darkmode-bg-color`}>
        <ThemeProvider
        attribute="class"
        enableSystem
        defaultTheme="system">
          {children}
        </ThemeProvider>
        <ScrollToTop />
      </body>
    </html>
  );
}
