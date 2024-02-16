
import NextAuth from "next-auth";
import GithHub from "next-auth/providers/github";
import credentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcrypt";
import { authConfig } from "./auth.config";


const login = async (credentials:any) => {
    try {
      connectToDb();
      const user = await User.findOne({ username: credentials.username });
  
      if (!user) throw new Error("Wrong credentials!");
  
      const isPasswordCorrect = await bcrypt.compare(
        credentials.password,
        user.password
      );
  
      if (!isPasswordCorrect) throw new Error("Wrong credentials!");
  
      return user;
    } catch (err) {
      console.log(err);
      throw new Error("Failed to login!");
    }
  };
  
export const { handlers: { GET, POST }, auth, signIn, signOut } = NextAuth(
    {
        ...authConfig,
        providers:
            [GithHub(
                {
                    clientId: process.env.GITHUB_ID,
                    clientSecret: process.env.GITHUB_SECRET
                }),
            credentialsProvider({
                async authorize(credentials) {
                    try {
                        const user:any= await login(credentials);
                        
                        return user;
                    } catch (err) {
                        console.log(err);
                        return null;
                    }
                }
            })
            ],
        callbacks: {
            async signIn(params) {
                const { user, account, profile } = params;
                if (account?.provider === "github") {
                    try {
                        connectToDb();
                        const user = await User.findOne({ email: profile?.email })
                        if (!user) {
                            const newUser = new User({
                                username: profile?.login,
                                email: profile?.email,
                                img: profile?.avatar_url,
                            });
                            await newUser.save();
                        }
                    } catch (err) {
                        console.log(err);
                        return false;
                    }
                }
                return true;
            },
           ...authConfig.callbacks,
        }
    }
);
