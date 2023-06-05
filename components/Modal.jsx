"use client";
import Link from "next/link";
import deletePost from "@util/deletePost";
import CreatePost from "./CreatePost";
import { useSession } from "next-auth/react";

export default function Modal({ post, posts, setPosts, handleCloseModal, setModal, setUserPosts, userPosts, setPostModal, setIsPostModal }) {
  const { data: session } = useSession();

  function handleEdit() {
    // setModal(false);
    // document.body.style.overflow = "auto";
    // setIsPostModal(true);
    // document.body.style.overflow = "hidden";
  }

  async function handleDelete() {
    const hasConfirmed = confirm("Yakin mau dihapus??");

    if (hasConfirmed) {
      try {
        deletePost(post, setModal);

        const filteredUserPost = userPosts.filter((p) => p._id !== post._id);
        setUserPosts(filteredUserPost);
        const filteredPost = posts.filter((p) => p._id !== post._id);
        setPosts(filteredPost);
      } catch (error) {
        console.error(error);
      } finally {
        window.location.reload();
      }
    } else {
      setModal(false);
      document.body.style.overflow = "auto";
    }
  }

  return (
    <div id="container" className="bg-[rgb(0,0,0,0.5)] fixed z-20 left-0 right-0 top-0 bottom-0 flex items-center justify-center" onClick={handleCloseModal}>
      <div className="bg-white flex flex-col justify-center items-center gap-5 border rounded-xl px-10 py-5 shadow-md w-[250px] h-[200px] m-auto relative">
        <Link className="bg-slate-200 hover:bg-slate-300 w-full py-1 rounded-full text-center" href={`profile/${post.creator._id}`}>
          Lihat profil
        </Link>
        {session?.user.id === post.creator._id && (
          <>
            {/* <button className="bg-slate-200 hover:bg-slate-300 w-full py-1 rounded-full" onClick={handleEdit}>
              Edit
            </button> */}
            <button className="bg-slate-200 hover:bg-slate-300 w-full py-1 rounded-full" onClick={handleDelete}>
              Hapus
            </button>
          </>
        )}
        <button className="bg-slate-200 w-full py-1 rounded-full text-red-500 font-semibold hover:bg-slate-300 cursor-pointer" id="container" onClick={handleCloseModal}>
          Batal
        </button>
      </div>
    </div>
  );
}
