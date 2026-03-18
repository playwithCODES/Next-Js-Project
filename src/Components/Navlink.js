import navlinks from "@/Constants/navlinks";
import { HOME_ROUTE } from "@/Constants/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = () => {
  const pathname = usePathname();
  return (
    <div>
      <nav className="hidden md:flex items-center text-xl font-bold space-x-6 text-gray-700">
        {navlinks.map((navlink) => {
          const isActive =
           pathname == navlink.route ||
           (navlink.route!==HOME_ROUTE && pathname.startsWith(navlink.route))
          return (
            <Link
              key={navlink.route}
              href={navlink.route}
              className={`${isActive? "text-primary" : "text-gray-700 dark:text-gray-300"} font-medium hover:text-primary dark:hover:text-primary`}
            >
              {navlink.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navlink;
