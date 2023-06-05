"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CreatePost from "./CreatePost";

import PostCards from "./PostCard";
import Skeleton from "./Skeleton";

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);
  const [isPostModal, setIsPostModal] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        const res = await fetch("/api/posts");
        const post = await res.json();

        if (post.length === 0) setIsEmpty(true);

        setPosts(post);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  function handleOpenCreatePost() {
    setIsPostModal(true);
    document.body.style.overflow = "hidden";
  }

  function handleCloseCreatePost(e) {
    if (e.target.id === "container") {
      setIsPostModal(false);
      document.body.style.overflow = "auto";
    }
  }

  return (
    <div>
      {!isPostModal ? (
        <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg font-semibold" onClick={handleOpenCreatePost}>
          Post sesuatu
        </button>
      ) : (
        <CreatePost input={input} setInput={setInput} closeModal={handleCloseCreatePost} />
      )}

      {/* Posts */}
      <div>{isLoading ? <Skeleton /> : <PostCards isPostModal={isPostModal} setIsPostModal={setIsPostModal} isEmpty={isEmpty} setPosts={setPosts} posts={posts} />}</div>
    </div>
  );
}
