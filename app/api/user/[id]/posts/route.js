import Post from "@models/post";
import User from "@models/user";
import { connectToDB } from "@util/database";

export async function GET(req, { params }) {
  try {
    await connectToDB();

    const posts = await Post.find({
      creator: params.id,
    }).populate("creator");

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch posts", { status: 500 });
  }
}
