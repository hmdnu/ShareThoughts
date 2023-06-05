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
            <div key={post._id} className="mt-5 bg-slate-100 p-5 rounded-xl flex flex-col  relative gap-3">
              <div className="flex items-center gap-3 pb-4 border-b-[1px]  border-slate-300">
                <Link href={`profile/${post.creator._id}`}>
                  <Image src={post.creator.image} alt="profile" width={45} height={45} className="rounded-full" />
                </Link>
                <div>
                  <Link href={`profile/${post.creator._id}`} className="hover:text-blue-300 cursor-pointer font-semibold sm:text-base text-sm">
                    {post.creator.username}
                  </Link>
                  <h2 className="text-gray-400 sm:text-sm text-xs flex flex-wrap font-medium">{post.creator.email}</h2>
                </div>
              </div>
              <p className="sm:text-base text-sm">{post.post}</p>
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
