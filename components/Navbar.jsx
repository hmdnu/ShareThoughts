"use client";
import Link from "next/link";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import { useState } from "react";
export default function Navbar() {
  const { data: session } = useSession();
  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <nav className="border-b-[1px] border-black fixed z-10 top-0 left-0 py-5 w-full bg-white">
      <div className="md:w-[50%] w-[80%] flex justify-between items-center m-auto">
        <Link className="font-bold text-md sm:w-text-xl" href="/">
          Share
          <br className="max-sm:flex hidden max-md:flex" />
          Thoughts
        </Link>
        {/* desktop nav */}
        <div className="sm:flex hidden">
          {session?.user ? (
            <div className="flex items-center gap-5 max-md:gap-3">
              <Link href="/users" className="font-semibold cursor-pointer hover:underline">
                Tentang
              </Link>
              <Link className="cursor-pointer" href={`/profile/${session?.user.id}`}>
                <Image src={session?.user.image} width={40} height={40} alt="profile" className="rounded-full" />
              </Link>
              <Link className="bg-green-500 hover:bg-green-600 rounded-full px-2 py-1 text-white font-semibold cursor-pointer" href="/" onClick={signOut}>
                Log out
              </Link>
            </div>
          ) : (
            <Link className="bg-green-500 hover:bg-green-600 rounded-full px-2 py-1 text-white font-semibold cursor-pointer" href="/login">
              Log in
            </Link>
          )}
        </div>
      </div>

      {/* mobile nav */}

      <div className="cursor-pointer max-sm:flex absolute hidden top-5 right-11" onClick={() => setToggleDropdown((prev) => !prev)}>
        <Image src={session?.user.image} width={50} height={50} alt="profile" className="rounded-full" />
      </div>
      {toggleDropdown && (
        <div className="sm:hidden flex flex-col w-[120px] bg-slate-200 rounded-xl px-2 py-4 absolute right-10">
          {session?.user ? (
            <div className="flex flex-col items-center gap-5">
              <Link href={`/profile/${session?.user.id}`} className="font-semibold text-sm cursor-pointer hover:underline">
                Profile
              </Link>
              <Link href="/users" className="font-semibold text-sm cursor-pointer hover:underline">
                Semua user
              </Link>
              <Link className="bg-green-500 hover:bg-green-600 rounded-full px-4 py-1  max-sm:text-sm text-white font-semibold cursor-pointer" href="/" onClick={signOut}>
                Log out
              </Link>
            </div>
          ) : (
            <Link className="bg-green-500 hover:bg-green-600 rounded-full px-4 py-1 text-white font-semibold cursor-pointer" href="/login">
              Log in
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
