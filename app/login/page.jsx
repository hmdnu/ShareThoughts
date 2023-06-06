"use client";

import { useState, useEffect } from "react";
import { signIn, useSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

function LoginPage() {
  const { data: session, status } = useSession();
  const [providers, setProviders] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const setUpProvider = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setUpProvider();
  }, []);

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <section className="bg-slate-700 h-[100vh] w-full grid place-content-center">
      <>
        {providers &&
          Object.values(providers).map((provider) => (
            <button
              className="bg-white px-10 py-5 rounded-full font-semibold text-lg hover:bg-gray-300 cursor-auto"
              key={provider.name}
              onClick={() => {
                signIn(provider.id);
              }}
            >
              Login pake google aja
              <br />
              gk ada yang lain
            </button>
          ))}
      </>
    </section>
  );
}

export default LoginPage;
