// "use client";

import Header from "@/Components/Header";
import "./globals.css";
import Footer from "@/Components/Footer";
import config from "@/config/config";
import AppProvider from "@/app/proivider/appProvider";
import MainLayout from "@/layouts/MainLayout";

export const metadata = {
  title: config.appName,
  description: "Electronics e-commerce, online shopping",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <MainLayout>
            <Header />
            <main className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white">
              {children}
            </main>
            <Footer />
          </MainLayout>
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;