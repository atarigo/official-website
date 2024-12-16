<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import type { Snippet } from "svelte";

  export interface ClerkSignedInProps extends HTMLAttributes<HTMLDivElement> {
    children: Snippet;
  }
</script>

<script lang="ts">
  import { clerk } from "./store";

  const { children }: ClerkSignedInProps = $props();
</script>

{#if $clerk && $clerk.user}
  {@render children()}
{/if}
