export const authConfig = {
    providers:[],
    pages: {
      signIn: "/login",
    },
    callbacks: {
      authorized({ auth, request: {nextUrl} }) {
        console.log(`authuser: ${auth?.user}`);
        console.log(`authuser: ${auth?.member}`);
        const isLoggedIn = !!auth?.user;

        const unprotectedPaths = ['/login','/dashboard'];

        const isProtected = !unprotectedPaths.some((path) =>
          nextUrl.pathname.startsWith(path)
        );

        if (isProtected && !isLoggedIn) {
          const redirectUrl = new URL('api/auth/signin', nextUrl.origin);
          redirectUrl.searchParams.append('callbackUrl', nextUrl.href);
          return Response.redirect(redirectUrl);
        }
  
        return true;
        // const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");
        // if (isOnDashboard) {
        //   if (isLoggedIn) return true;
        //   return false;
        // } else if (isLoggedIn) {
        //   return Response.redirect(new URL("/dashboard", request.nextUrl));
        // }
        // return true;
      },
    },
  };