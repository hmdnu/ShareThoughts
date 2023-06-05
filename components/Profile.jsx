import Image from "next/image";
import Spinner from "./Spinner";

export default function Profile({ user, isLoading }) {
  return (
    <section className="mt-5">
      <div className="border-[1px] border-black rounded-xl p-5 flex items-center gap-5">
        {isLoading ? <Spinner width={80} height={80} /> : <Image className="rounded-full" src={user?.image} width={80} height={80} alt="profile pic" />}

        <div className="flex flex-col flex-wrap gap-1 justify-center items-start w-full">
          <p className="font-semibold sm:text-2xl text-lg">{user?.username}</p>
          <p className="font-medium text-gray-400 sm:text-md text-xs">{user?.email}</p>
        </div>
      </div>
    </section>
  );
}
