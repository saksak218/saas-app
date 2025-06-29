"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItems = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-2 sm:gap-4 max-sm:shrink-0">
      {navItems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={
            (cn(pathname === href && "text-primary font-semibold"),
            "max-sm:text-sm")
          }
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItems;
