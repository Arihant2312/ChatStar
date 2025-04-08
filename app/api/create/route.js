import { StreamChat } from "stream-chat";
import { clerkClient, Client } from "@clerk/nextjs/server";
import { UserItem } from "stream-chat-react"; // This import might not be necessary here

const api_key = "8bhwum9tcvbk";
const api_secret = "zxrjquu2h3ujyz88e9qnpar6r6ydqdtevpxd22anj4c2k2drk698p69wwxa7py4m";

export async function POST(request) {
  try {
    function capitalize(str) {
      return str ? str.charAt(0).toUpperCase() + str.slice(1).toLowerCase() : '';
    }

    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json();

    // Create Stream Chat token for the user
    const token = serverClient.createToken(user.data.id);
    console.log("A new user has been created:", token);

    const client = await clerkClient();

    // Upsert user in Stream Chat with error handling
    try {
      await serverClient.upsertUser({
        id: user.data.id,
        role: "admin", // Assign admin role
        name: user.data.name || "Anonymous",
      });
    } catch (error) {
      console.error("Error upserting user in Stream Chat:", error);
      return new Response(JSON.stringify({ message: "Error upserting user" }), { status: 500 });
    }

    // Update user metadata in Clerk with error handling
    try {
       client.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
          token: token,
        },
      });
    } catch (error) {
      console.error("Error updating user metadata in Clerk:", error);
      return new Response(JSON.stringify({ message: "Error updating user metadata" }), { status: 500 });
    }

    const slugs = [
      "python-chat-new",
      "javascript-chat-new",
      "web-development-new",
      "machine-learning-new",
      "data-science-new",
      "blockchain-new"
    ];

    // Create and join channels with error handling
    for (const item of slugs) {
      try {
        const channel = serverClient.channel('messaging', item, {
          image: 'https://getstream.io/random_png/?name=react',
          name: capitalize(item) + " Discussions",
          members: [], // Initialize with an empty array
          created_by_id: "admin_user_id", // Replace with a secure value
        });

        await channel.create();
        await channel.addMembers([user.data.id]); 
      } catch (error) {
        console.error(`Error creating or joining channel ${item}:`, error);
        // You might want to handle individual channel creation/join failures differently
      }
    }

    return new Response(JSON.stringify({ message: "User created and added to channels" }));

  } catch (error) {
    console.error("General error:", error);
    return new Response(JSON.stringify({ message: "An unexpected error occurred" }), { status: 500 });
  }
}