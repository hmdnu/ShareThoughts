import Post from "@models/post";
import { connectToDB } from "@util/database";

export async function GET() {
  try {
    await connectToDB();
    const posts = await Post.find({}).populate("creator");

    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all posts", { status: 500 });
  }
}
