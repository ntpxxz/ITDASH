
import { User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q,page) => {
  console.log(q);
const regex = new RegExp(q,"i");
const ITEM_PER_PAGE=2
  try {
    await connectToDB(); // Corrected: Ensure that you await the connection
    const count = await User.find({username:{$regex: regex}}).count();
    
    const users = await User.find({username:{$regex: regex}})
    .limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE*(page-1));
    return (users,count);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }  
}
