export default async function editPost(id, post) {
  await fetch(`/api/posts${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      userPost: post,
    }),
  });
}
