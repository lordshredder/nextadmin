import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDB } from "./utils";
import { Member, User } from "./models";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";

const login = async (credentials) => {
  try {

    connectToDB();
    const user = await User.findOne({ username: credentials.username }).lean();
    if (!user) throw new Error("User does not exist!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return user;
  } catch (err) {
    console.log(err);
    return null;
    //throw new Error("Failed to login!");
  }
};

export const logout = async (formData) => {
  await signOut();
};


export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "credentials") {
        connectToDB();
        try {
          const member = await Member.findOne({ id: account.providerAccountId });
          if (member) {
            const user = await User.findOne({

                id: account.providerAccountId
            });
            if(user){
            user.img = member.avatar;
                await user.save();
            }
          }
        } catch (err) {
          console.log(err);
          return false;
        }
      }
      return true;
    },
    ...authConfig.callbacks,
  },
});