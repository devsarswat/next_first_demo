export const authConfig ={
    pages:{
       signIn :'/login', 
    },
    providers:[],
    callbacks:{
        async jwt({token, user}:any){
            if (user){
                token.id=user.id;
                token.isAdmin=user.isAdmin;
            }
            return token;
        },
        async session({session, token}:any){
            if(token){
            session.id=token.id;
            session.isAdmin=token.isAdmin;
        }
            return session;
        },
        authorized({auth,request}:any){
            const user = auth?.user;
            
           const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
           const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
           const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
           if (isOnAdminPanel && !auth?.isAdmin){
            return false
            //    return {redirect:"/login"};
           }
              if (isOnBlogPage && !user){
                return false
                //    return {redirect:"/login"};
              }
                if (isOnLoginPage && user){
                    return Response.redirect(new URL("/",request.nextUrl))
                }
                return true;
        }
    }
}