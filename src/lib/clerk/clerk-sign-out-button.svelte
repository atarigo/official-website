<script module lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  export interface ClerkSignOutButtonProps extends HTMLAttributes<HTMLDivElement> {
    children?: Snippet;
  }
</script>

<script lang="ts">
  import type { Clerk } from "@clerk/types";
  import Button from "$lib/components/button/button.svelte";
  import { clerk } from "./store";

  const { children }: ClerkSignOutButtonProps = $props();

  const signOut = (clerk: Clerk) => {
    clerk.signOut();
  };
</script>

{#if $clerk && $clerk.user}
  <Button onclick={() => signOut($clerk)}>
    {#if children}
      {@render children()}
    {:else}
      Sign out
    {/if}
  </Button>
{/if}
