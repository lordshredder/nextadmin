export const authConfig = {
    pages: {
      signIn: "/login",
    },
    providers: [],
    callbacks: {
      // FOR MORE DETAIL ABOUT CALLBACK FUNCTIONS CHECK https://next-auth.js.org/configuration/callbacks
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
          token.username = user.username;
          token.isAdmin = user.isAdmin;
          token.img = user.img;
        }
        return token;
      },
      async session({ session, token }) {
        if (token) {
          session.user.id = token.id;
          session.user.username = token.username;
          session.user.isAdmin = token.isAdmin;
          session.user.img = token.img;
        }
        return session;
      },
      authorized({ auth, request }) {
        const user = auth?.user;
        const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
        const isOnDashboard = request.nextUrl?.pathname.startsWith("/dashboard");
        const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
  
        // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
  
        if (isOnAdminPanel && !user?.isAdmin) {
          return false;
        }
  
        // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
  
        if (isOnDashboard && !user) {
          return false;
        }
  
        // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
  
        if (isOnLoginPage && user) {
          return Response.redirect(new URL("/dashboard", request.nextUrl));
        }
  
        return true
      },
    },
  };