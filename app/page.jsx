import { Navbar, CreatePost, Feed } from "@components";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="sm:w-[50%] w-[80%] mx-auto mt-24 mb-10">
        <Feed />
      </section>
    </>
  );
}
