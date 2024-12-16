<script module lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  export interface ClerkSignInButtonProps extends HTMLAttributes<HTMLDivElement> {
    // show sign-in modal or redirect to custom sign-in page
    mode?: "modal" | "redirect";

    // redirect to this url after sign-in
    afterSignInUrl?: string;

    // redirect to this url after sign-up
    afterSignUpUrl?: string;

    // only used when mode is "redirect" and custom sign-in page
    redirectUrl?: string;

    children?: Snippet;
  }
</script>

<script lang="ts">
  import type { Clerk } from "@clerk/types";
  import Button from "$lib/components/button/button.svelte";
  import { clerk } from "$lib/clerk/store";

  const {
    afterSignInUrl,
    afterSignUpUrl,
    redirectUrl,
    mode = "modal",
    children
  }: ClerkSignInButtonProps = $props();

  const signIn = (clerk: Clerk) => {
    const opts = { afterSignInUrl, afterSignUpUrl, redirectUrl };
    if (mode === "modal") {
      clerk?.openSignIn(opts);
    } else {
      clerk?.redirectToSignIn(opts);
    }
  };
</script>

{#if $clerk && !$clerk.user}
  <Button onclick={() => signIn($clerk)}>
    {#if children}
      {@render children()}
    {:else}
      Sign In
    {/if}
  </Button>
{/if}
