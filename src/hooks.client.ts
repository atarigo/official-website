import { clerkProvider } from "$lib/clerk/clerk-provider";

clerkProvider({
  publishableKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
  options: { afterSignOutUrl: "https://app.atari-go.io" }
});
