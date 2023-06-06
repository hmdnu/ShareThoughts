import Post from "@models/post";
import User from "@models/user";
import { connectToDB } from "@util/database";

export async function GET(request) {
  try {
    await connectToDB();
    const posts = await Post.find().populate({ path: "creator" });

    const response = new Response(JSON.stringify(posts), { status: 200 });

    // Add a unique identifier to the URL to force a cache-busting reload
    const url = new URL(request.url);
    url.searchParams.set("t", Date.now());
    response.headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");
    response.headers.set("Location", url.toString());

    // return response;
    return response;
  } catch (error) {
    return new Response("Failed to fetch all posts", { status: 500 });
  }
}
