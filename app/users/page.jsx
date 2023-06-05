import { Navbar } from "@components";
import Link from "next/link";

export default function Users() {
  return (
    <>
      <Navbar />
      <section className="sm:w-[50%] w-[80%] mx-auto mt-24 mb-10">
        <h1 className="font-semibold sm:text-2xl text-xl">Tentang web ini</h1>
        <div className="bg-slate-100 w-full rounded-lg px-5 py-2 mt-5">
          <h2 className="font-semibold">ShareThoughts (berbagi pemikiran/ide/unek-unek) </h2>
          <p>Web ini dibuat untuk menambah project ke portofolio saya, dengan kata lain ini dibuat bukan untuk komersial melainkan hanya sebagai latihan.</p>
          <br />
          <p>
            Dibuat oleh{" "}
            <Link href="https://www.instagram.com/hmdnubaidillah" target="_blank" className="text-sky-500 hover:underline cursor-pointer">
              Hamdan ubaidillah
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
