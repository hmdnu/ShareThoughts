import Image from "next/image";
import Spinner from "./Spinner";

export default function Profile({ user, isLoading }) {
  return (
    <section className="mt-5">
      <div className="border-[1px] border-black rounded-xl p-5 flex items-center gap-5">
        {isLoading ? <Spinner width={100} height={100} /> : <Image className="rounded-full" src={user?.image} width={100} height={100} alt="profile pic" />}

        <div className="flex flex-col gap-1 justify-center items-start w-full">
          <h1 className="font-semibold sm:text-2xl text-xl">{user?.username}</h1>
          <h1 className="text-gray-500 sm:text-lg text-sm">{user?.email}</h1>
        </div>
      </div>
    </section>
  );
}
