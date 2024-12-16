import { clerkProvider } from "$lib/clerk/clerk-provider";

clerkProvider({
  publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
  options: {
    signInForceRedirectUrl: import.meta.env.VITE_CLERK_SIGN_IN_FORCE_REDIRECT_URL,
    afterSignOutUrl: import.meta.env.VITE_CLERK_SIGN_OUT_URL
  }
});
