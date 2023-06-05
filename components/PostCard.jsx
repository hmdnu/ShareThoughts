"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Modal from "./Modal";
import EmptyFeed from "./EmptyFeed";

export default function PostCards({ setUserPosts, posts, setPosts, isEmpty, setPostModal, setIsPostModal }) {
  const [modal, setModal] = useState(false);
  const [userId, setUserId] = useState("");

  function handleOpenModal(post) {
    setModal(true);
    document.body.style.overflow = "hidden";
    setUserId(post);
  }

  function handleCloseModal(e) {
    if (e.target.id === "container") {
      setModal(false);
      document.body.style.overflow = "auto";
    }
  }

  return (
    <div className="flex flex-col-reverse">
      {isEmpty ? (
        <EmptyFeed />
      ) : (
        <>
          {posts.map((post) => (
            <div key={post._id} className="mt-5 bg-slate-100 p-5 rounded-xl flex items-center gap-5 relative">
              <Link href={`profile/${post.creator._id}`}>
                <Image src={post.creator.image} alt="profile" width={40} height={40} className="rounded-full" />
              </Link>
              <div>
                <Link href={`profile/${post.creator._id}`} className="hover:text-blue-300 cursor-pointer">
                  <h1 className="font-semibold">{post.creator.username}</h1>
                </Link>
                <h2 className="text-gray-400 font-light text-sm">{post.creator.email}</h2>
                <p className="mt-1 sm:text-base text-sm">{post.post}</p>
              </div>
              <button className="absolute top-2 right-5 w-[20px] h-[20px] cursor-pointer text-lg font-bold" onClick={() => handleOpenModal(post)}>
                ...
              </button>
            </div>
          ))}
        </>
      )}

      {modal && <Modal setUserPosts={setUserPosts} posts={posts} setPosts={setPosts} post={userId} handleCloseModal={handleCloseModal} modal={modal} setModal={setModal} setPostModal={setPostModal} setIsPostModal={setIsPostModal} />}
    </div>
  );
}
