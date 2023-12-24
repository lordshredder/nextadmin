import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authConfig";
import { connectToDB } from "./lib/utils";
import { Member } from "./lib/models";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToDB();
    const member = await Member.findOne({ member: credentials.username });


    console.log(` member: ${member.member} ${member.password}`);

    if (!member) throw new Error("Wrong credentials!");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      member.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong credentials!");

    return member;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to login!");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        try {
            let user = null;
            console.log(`test1.1:`);
            user = await login(credentials);
            console.log(`test1.2:`);
            return user;
        } catch (err) {
            console.log(err)
            return null;
        }
      },
    }),
  ],
  // ADD ADDITIONAL INFORMATION TO SESSION
//   callbacks: {
//     async jwt({ token, user }) {
//       if (user) {
//         token.username = user.username;
//         token.img = user.img;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       if (token) {
//         session.user.name = token.username;
//         session.user.image = token.img;
//       }
//       return session;
//     },
//   },
});