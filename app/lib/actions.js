"use server";

import { revalidatePath } from "next/cache";
import { Member, Unit, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { signIn } from "./auth";

export const updateMemberRoster = async (formData) => {
    const { id, rosterstring } =
      Object.fromEntries(formData);
  
    try {
      if(!id || id === "") return;
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
  
      await Member.findOneAndUpdate({id: id}, updateFields);
  
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create user!");
    }
  
    revalidatePath("/dashboard/roster");
  };


  export const addUnit = async (formData) => {
    const { id, name,  imagelink, element, range }  =
      Object.fromEntries(formData);

      const actualid = imagelink.split('/').pop().replace('.webp', '');
    console.log("inside ADDUNIT" + actualid + element + name + id, range);
    try {
      connectToDB();
      const idExists = await Unit.findOne({id: actualid});
      if(idExists){
        return "Id exists.";
      }
  
      const exists = await Unit.findOne({name: name});
      if(exists){
        return "Name exists.";
      }
  
      const newUnit = new Unit({
        id: actualid,
        name,
        imagelink,
        element,
        range
      });
  
      await newUnit.save();
    } catch (err) {
      console.log(err);
      throw new Error("Failed to create unit!");
    }
  
    revalidatePath("/dashboard/admin/units");
  };

  export const editUnit = async (formData) => {
    const { name,  imagelink, element, range }  =
      Object.fromEntries(formData);

    const actualid = imagelink.split('/').pop().replace('.webp', '');
    console.log("inside editUNIT" + actualid + element + name + range);
    try {
      connectToDB();
      let updateUnitFields = {};
      const idExists = await Unit.findOne({id: actualid});
      if(!idExists){
        return "Unit doesn't exist.";
      }

      updateUnitFields = {
        id: actualid,
        imagelink: imagelink,
        element: element,
        name: name,
        range: range,
      };
      
      Object.keys(updateUnitFields).forEach(
        (key) =>
          (updateUnitFields[key] === "" || undefined) && delete updateUnitFields[key]
      );

      await Unit.findOneAndUpdate({id: actualid}, updateUnitFields, {upsert: true});

    } catch (err) {
      console.log(err);
      throw new Error("Failed to update unit!");
    }
  
    revalidatePath("/dashboard/admin/units");
  };

export const addMember = async (formData) => {
  const { id, member,  password, status }  =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newMember = new Member({
      id,
      member,
      password: hashedPassword,
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
    const idExists = await User.findOne({id});
    if(idExists){
      return "Id exists.";
    }

    const exists = await User.findOne({username});
    if(exists){
      return "Username is already taken.";
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      id,
      username,
      password: hashedPassword,
      img,
      isAdmin
    });

    await newUser.save();

    const memberExists = await Member.findOne({id});
    if(!memberExists){
      console.log("Member doesn't exist. Creating new Member");
      const newMember = new Member({
        id: id,
        member: username,
        avatar: img,
        level: 292
      });
      await newMember.save();
    }
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/admin/members");
  redirect("/dashboard/admin/members");
};

export const updateMember = async (formData) => {
  let { id, member, clan, level, username,  password, notes, status, isAdmin } =
    Object.fromEntries(formData);

  try {
    if(status === 'inactive') clan = "---";
    connectToDB();
    let updateUserFields = {};
    let updateMemberFields = {};
    if(password !== "" || undefined){

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      updateUserFields = {
        id,
        username,
        password: hashedPassword,
        isAdmin,
      };
    } else {
      updateUserFields = {
        id,
        username,
        isAdmin,
      };
    }

    updateMemberFields = {
      member,
      clan,
      level,
      notes,
      status,
      lastupdate: new Date()
    };
    

    Object.keys(updateMemberFields).forEach(
      (key) =>
        (updateMemberFields[key] === "" || undefined) && delete updateMemberFields[key]
    );

    Object.keys(updateUserFields).forEach(
      (key) =>
        (updateUserFields[key] === "" || undefined) && delete updateUserFields[key]
    );
    await Member.findOneAndUpdate({id: id}, updateMemberFields, {upsert: true});
    await User.findOneAndUpdate({id: id}, updateUserFields, {upsert: true});
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update member!");
  }

  revalidatePath("/dashboard/admin/members");
  redirect("/dashboard/admin/members");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    return "Wrong Credentials";
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
    await User.findOneAndDelete({id: id});
    await Member.findOneAndDelete({id: id});
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/admin/members");
};


export const closeDialog = async () => {
  console.log("modal closed");
}
export const confirmDialog = async () => {
  console.log("Okay");
}

