import User from "@models/user";
import { connectToDB } from "@util/database";

export async function GET(req, { params }) {
  try {
    await connectToDB();

    const user = await User.findById(params.id);

    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch user", { status: 500 });
  }
}
