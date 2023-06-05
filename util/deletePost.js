export default async function deletePost(post, setModal) {
  await fetch(`/api/posts/${post._id}`, {
    method: "DELETE",
  });
}
