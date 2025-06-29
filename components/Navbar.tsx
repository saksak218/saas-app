import Image from "next/image";
import Link from "next/link";
import NavItems from "./NavItems";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src="/images/logo.svg" alt="logo" width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-4 sm:gap-8">
        <NavItems />

        <SignedOut>
          <SignInButton>
            <button className="max-sm:text-sm btn-signin max-sm:shrink-0">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
