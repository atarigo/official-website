import { clerk } from "$lib/clerk/store";
import { Clerk } from "@clerk/clerk-js";

type ClerkProviderOptions = {
  // todo: append the options you want to use
  // # ref: https://clerk.com/docs/components/clerk-provider
  afterSignOutUrl: string;

  signInForceRedirectUrl: string;
};

type ClerkProviderProps = {
  publishableKey: string;
  options: ClerkProviderOptions;
};

export const clerkProvider = async ({ publishableKey, options }: ClerkProviderProps) => {
  const instance = new Clerk(publishableKey);
  await instance.load(options);

  instance.addListener((event) => {
    if (event.user) {
      document.dispatchEvent(new CustomEvent("clerk-sveltekit:user", { detail: event.user }));
    }
  });

  clerk.set(instance);
};
