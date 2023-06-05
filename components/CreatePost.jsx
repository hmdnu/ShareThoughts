"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import Form from "./Form";

export default function CreatePost({ closeModal, input, setInput }) {
  const [isLoading, setIsLoading] = useState(false);

  const { data: session } = useSession();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    async function getEditValue() {}
    getEditValue();
  }, []);

  async function handlePost(e) {
    e.preventDefault();

    if (!session?.user) {
      alert("Log in dulu bro");
    } else {
      if (input.length === 0) {
        alert("Gk bisa kirim postingan kosong");
      } else {
        try {
          setIsLoading(true);
          await fetch("/api/posts/post", {
            method: "POST",
            body: JSON.stringify({
              post: input,
              userId: session?.user.id,
            }),
          });
        } catch (error) {
          console.error(error);
        } finally {
          setInput("");
          setIsLoading(false);
          window.location.reload();
        }
      }
    }
  }

  return (
    <div id="container" onClick={closeModal} className="bg-[rgb(0,0,0,0.5)] fixed z-20 left-0 right-0 top-0 bottom-0 flex justify-center">
      <div className="absolute top-20 sm:w-[30%] w-[80%]">
        <Form closeModal={closeModal} handlePost={handlePost} setInput={setInput} input={input} isLoading={isLoading} />
      </div>
    </div>
  );
}
