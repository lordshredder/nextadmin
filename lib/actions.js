"use server";

import { revalidatePath } from "next/cache";
import { Boss, Member, Unit, User, Stats } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcryptjs";
import { signIn, signOut } from "./auth";
import { getPreviousCBDate, getPreviousMonth } from "./data";

export const updateMemberRoster = async (prevState, formData) => {
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
  
      const result = await Member.findOneAndUpdate({id: id}, updateFields);
        result.save();
        revalidatePath("/dashboard/roster");
        return {
          message: "success",
          errors: undefined,
        };
      } catch (err) {
        console.log(err);
        return {
          message: "error",
          errors: "Could not update roster.",
        };
      }

  };


  export const addUnit = async (formData) => {
    const { id, name,  imagelink, element, range, stars }  =
      Object.fromEntries(formData);

      const actualid = imagelink.split('/').pop().replace('.webp', '');
    console.log("inside ADDUNIT" + actualid + element + name + id, range, stars);
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
        range,
        stars
      });
  
      await newUnit.save();
    } catch (err) {
      console.log(err);
      //throw new Error("Failed to create unit!");
    }
  
    revalidatePath("/dashboard/admin/units");
  };

  export const editUnit = async (formData) => {
    const { name,  imagelink, element, range, stars }  =
      Object.fromEntries(formData);

    const actualid = imagelink.split('/').pop().replace('.webp', '');
    console.log("inside editUNIT" + actualid + element + name + range + stars);
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
        stars: stars
      };
      
      Object.keys(updateUnitFields).forEach(
        (key) =>
          (updateUnitFields[key] === "" || undefined) && delete updateUnitFields[key]
      );

      const result = await Unit.findOneAndUpdate({id: actualid}, updateUnitFields, {upsert: true});
      result.save();
    } catch (err) {
      console.log(err);
      //throw new Error("Failed to update unit!");
    }
  
    //revalidatePath("/dashboard/admin/units");
    revalidatePath("/dashboard/admin/units");
    redirect("/dashboard/");
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

  revalidatePath("/dashboard/admin/members");
  redirect("/dashboard/admin/members");
};


export const addUser = async (formData) => {
  const { id, username,  password, img, isAdmin }  =
    Object.fromEntries(formData);

  try {
    connectToDB();
    const idExists = await User.findOne({id});
    if(idExists){
      return {
        message: "error",
        errors: "Id exists.",
      };
    }

    const exists = await User.findOne({username});
    if(exists){
      return {
        message: "error",
        errors: "Username is already taken.",
      };
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
        level: 295
      });
      await newMember.save();

    }
    const statsExist = await Stats.findOne({id});
    if(!statsExist){
      const member = await Member.findOne({id});
      const prevMonth = getPreviousMonth(new Date());
      const clanDate = getPreviousCBDate(prevMonth);
      const newStats = new Stats({
        cbdate: clanDate,
        id: id,
        clan: member.clan,
        memberobj: member._id,
      });
      await newStats.save();

    }

  } catch (err) {
    console.log(err);
    return {
      message: "error",
      errors: "Failed to create user!",
    };
  }

  revalidatePath("/dashboard/admin/members");
  redirect("/dashboard/admin/members");
};

export const updateBoss = async (prevState, formData) => {
  // const { id,  imagelink, element, rank, name, attacktype, multitarget, hp1, 
  //   hp2, 
  //   hp3, 
  //   hp4, 
  //   pdef1, 
  //   pdef2, 
  //   pdef3, 
  //   pdef4,
  //   fpdef1,
  //   fpdef2,
  //   fpdef3,
  //   fpdef4,
  //   mdef1,
  //   mdef2,
  //   mdef3,
  //   mdef4,
  //   fmdef1,
  //   fmdef2,
  //   fmdef3,
  //   fmdef4 }  =
  //   Object.fromEntries(formData);
    const { id,  imagelink, element, rank, name, attacktype, multitarget, hp, def, mdef }  =
      Object.fromEntries(formData);

  const actualid = imagelink.split('/').pop().replace('.webp', '');
  console.log("inside editUNIT" + actualid + element + name);
  try {
    // connectToDB();

    // const idExists = await Boss.findOne({id: actualid});
    // if(!idExists){
    //   return "Boss doesn't exist.";
    // }
    // let updateBossFields = {};

    // updateBossFields = {
    //   id: actualid,
    //   imagelink: imagelink,
    //   element: element,
    //   name: name,
    //   attacktype: attacktype,
    //   multitarget: multitarget,
    // };
    
    // Object.keys(updateBossFields).forEach(
    //   (key) =>
    //     (updateBossFields[key] === "" || undefined) && delete updateBossFields[key]
    // );

    // const result = await Boss.findOneAndUpdate({id: actualid}, updateBossFields, {upsert: true});
    // result.save();
    //throw new Error("Failed to update boss!");
    revalidatePath("/clanbattle");
    return {
      message: "success",
      errors: undefined,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "error",
      errors: "Something went wrong.",
    };
    //throw new Error("Failed to update boss!");
  }

  //revalidatePath("/dashboard/admin/units");
  // revalidatePath("/clanbattle");
  // redirect("/clanbattle/");
};

export const selfUpdateMember = async (prevState, formData) => {
  let { id, member, level, username, password, status } =
    Object.fromEntries(formData);

  try {
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
      };
    } else {
      updateUserFields = {
        id,
        username,
      };
    }

    updateMemberFields = {
      member,
      level,
      status,
    };
    

    Object.keys(updateMemberFields).forEach(
      (key) =>
        (updateMemberFields[key] === "" || undefined) && delete updateMemberFields[key]
    );

    Object.keys(updateUserFields).forEach(
      (key) =>
        (updateUserFields[key] === "" || undefined) && delete updateUserFields[key]
    );
    await Member.findOneAndUpdate({id: id}, updateMemberFields, {upsert: false});
    await User.findOneAndUpdate({id: id}, updateUserFields, {upsert: false});
    revalidatePath("/dashboard/settings");
    return {
      message: "success",
      errors: undefined,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "error",
      errors: "Could not update user.",
    };
  }
  //redirect("/dashboard/admin/members");
};

export const updateMember = async (prevState, formData) => {
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
    };
    

    Object.keys(updateMemberFields).forEach(
      (key) =>
        (updateMemberFields[key] === "" || undefined) && delete updateMemberFields[key]
    );

    Object.keys(updateUserFields).forEach(
      (key) =>
        (updateUserFields[key] === "" || undefined) && delete updateUserFields[key]
    );
    await Member.findOneAndUpdate({id: id}, updateMemberFields, {upsert: false});
    await User.findOneAndUpdate({id: id}, updateUserFields, {upsert: false});
    revalidatePath("/dashboard/admin/members");
    return {
      message: "success",
      errors: undefined,
    };
  } catch (err) {
    console.log(err);
    return {
      message: "error",
      errors: "Failed to update member.",
    };
    
  }


  //redirect("/dashboard/admin/members");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
    return {
      message: "success",
      errors: undefined,
    };
  } catch (err) {
    console.log("TEMPORARY FIX");
    if(err.message === "NEXT_REDIRECT") redirect("/dashboard/");
    return {     
      message: "error",
      errors: "Wrong Credentials.",
    };
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

export const logout = async (formData) => {
  await signOut();
};

