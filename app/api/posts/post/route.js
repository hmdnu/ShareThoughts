import { connectToDB } from "@util/database";
import Post from "@models/post";

export async function POST(req, res) {
  const { userId, post } = await req.json();

  try {
    await connectToDB();
    const newPost = new Post({
      creator: userId,
      post,
    });

    await newPost.save();
    return new Response(JSON.stringify(newPost), {
      status: 201,
    });
  } catch (error) {
    return new Response("Failed to create new post", { status: 500 });
  }
}
