import config from "@/config/config";
const Footer = () => {
  return (
    <footer className="bg-gray-300 dark:bg-gray-800 text-black dark:text-white  py-4 text-center bottom-0 height-full w-full">
      <p>&copy; 2026 {config.appName} All rights reserved.</p>
    </footer>
  );
};

export default Footer;
