import Header from "@/Components/Header";
import "./globals.css";
import Footer from "@/Components/Footer";
import config from "@/config/config";

export const metadata={
  title:config.appName,
  description:"Electronics e-commerce, online shopping",
};

const RootLayout = ({children}) => {
  return (
    <html>
      <body className="flex flex-col min-h-screen">
      <Header/>
        <main className="grow ">
          {children}
        </main>
      <Footer/>
      </body>
    </html>
  )
}

export default RootLayout;
