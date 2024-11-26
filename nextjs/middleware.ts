import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(["/", "/pricing", "/api/upload"]);

export default clerkMiddleware((auth, request) => {
  if (!auth().userId && !isPublicRoute(request)) {
    auth().protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|json|xml|txt|webp)).*)",
    "/",
    "/(api|trpc)(.*)",
  ],
};
