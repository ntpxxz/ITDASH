
import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async () => {
  try {
    await connectToDB(); // Corrected: Ensure that you await the connection
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }  
}
