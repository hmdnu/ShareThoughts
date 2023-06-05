"use client";

import { Profile, Navbar, PostCards, Skeleton } from "@components";

import { useState, useEffect } from "react";

export default function MyProfile({ params }) {
  const [user, setUser] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmpty, setIsEmpty] = useState(false);

  // get user profile info
  useEffect(() => {
    async function getUser() {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/user/${params.id}`);
        const users = await res.json();

        setUser(users);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }

    getUser();
  }, [params.id]);

  // get user's posts
  useEffect(() => {
    async function getUserPosts() {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/user/${params.id}/posts`);
        const userPost = await res.json();

        if (userPost.length === 0) setIsEmpty(true);

        setUserPosts(userPost);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getUserPosts();
  }, [params.id]);

  return (
    <>
      <Navbar />
      <section className="mt-24 md:w-[50%] w-[80%] m-auto">
        <h1 className="font-bold md:text-2xl text-xl">Profil</h1>

        <Profile user={user} isLoading={isLoading} />
        <h1 className="font-semibold sm:text-2xl text-xl mt-5">Postingan</h1>
        {isLoading ? <Skeleton /> : <PostCards isEmpty={isEmpty} setUserPosts={setUserPosts} posts={userPosts} />}
      </section>
    </>
  );
}
