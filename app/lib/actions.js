"use server";

import { revalidatePath } from "next/cache";
import { Hitplan, Member, CbStats, Unit, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { signIn } from "./auth";

export const updateMemberRoster = async (formData) => {
    const { id, rosterstring } =
      Object.fromEntries(formData);
  
    try {
      connectToDB();
        console.log(formData);
      const updateFields = {
        id,
        rosterstring,
      };
  
      Object.keys(updateFields).forEach(
        (key) =>
          (updateFields[key] === "" || undefined) && delete updateFields[key]
      );
  
      //await Member.findByIdAndUpdate(id, updateFields);
  
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create user!");
    }
  
    revalidatePath("/dashboard/roster");
    //redirect("/dashboard/roster");
  };

export const addMember = async (formData) => {
  const { id, member,  password, urlroster, sync, killer, status }  =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newMember = new Member({
      id,
      member,
      password: hashedPassword,
      urlroster,
      sync,
      killer,
      status
    });

    await newMember.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/members");
  redirect("/dashboard/members");
};


export const addUser = async (formData) => {
  const { id, username,  password, img, isAdmin }  =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const exists = await User.findOne({username});
    if(exists){
      return "Username is already taken.";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newMember = new User({
      id,
      username,
      password: hashedPassword,
      img,
      isAdmin
    });

    await newMember.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/members");
  redirect("/dashboard/members");
};

export const updateMember = async (formData) => {
  const { id, member,  password, urlroster, sync, killer, status } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    let updateFields = {};

    if(password !== "" || undefined){

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updateFields = {
        member,
        password: hashedPassword,
        urlroster,
        sync,
        killer,
        status
      };
    } else {
      updateFields = {
        member,
        urlroster,
        sync,
        killer,
        status
      };
    }
    //Member.schema.add({password: 'String'});
    console.log(updateFields);

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Member.findOneAndUpdate({id: id}, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update member!");
  }

  revalidatePath("/dashboard/members");
  redirect("/dashboard/members");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};

// export const authenticate = async (prevState, formData) => {
//   const { username, password } = Object.fromEntries(formData);
//   try {
//     console.log(`test1:`);
//     await signIn("credentials", { username, password });
//     console.log(`test2:`);
//   } catch (err) {
//     console.log("ERROR STARTS HERE");
//     console.log(err);
//     console.log("ERROR ENDS HERE");
//     return "Worg Credentials!";
//   }
// };

export const deleteMember = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Member.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/members");
};

