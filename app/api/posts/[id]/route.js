import { connectToDB } from "@util/database";
import Post from "@models/post";
import User from "@models/user";

// get post
export async function GET(req, { params }) {
  try {
    await connectToDB();
    const post = await Post.findById(params.id).populate("creator");
    if (!post) return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(post), { status: 500 });
  } catch (error) {
    return new Response("Failed to fetch all posts", { status: 500 });
  }
}

// update prompt
export async function PATCH(req, { params }) {
  const { post } = await req.json();
  try {
    await connectToDB();

    const existingPost = await Post.findById(params.id);
    if (!existingPost) return new Response("Post not found", { status: 400 });

    existingPost.post = post;

    await existingPost.save();

    return new Response(JSON.stringify(existingPost), { status: 200 });
  } catch (err) {
    return new Response("Failed to update prompt", {
      status: 500,
    });
  }
}

// delete post

export async function DELETE(req, { params }) {
  try {
    await connectToDB();

    await Post.findByIdAndRemove(params.id);
    return new Response("Prompt deleted succesfully");
  } catch (err) {
    return new Response("Failed to delete prompt", { status: 500 });
  }
}
