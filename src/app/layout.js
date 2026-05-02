"use client";
import Header from "@/Components/Header";
import "./globals.css";
import Footer from "@/Components/Footer";
import config from "@/config/config";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

// export const metadata = {
//   title: config.appName,
//   description: "Electronics e-commerce, online shopping",
// };

const RootLayout = ({ children }) => {
  return (
    <Provider store={store}>
      <html>
        <body className="flex flex-col min-h-screen">
          <Header />
          <main className="grow ">{children}</main>
          <Footer />
        </body>
      </html>
    </Provider>
  );
};

export default RootLayout;
