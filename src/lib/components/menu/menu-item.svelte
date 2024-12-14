<script module lang="ts">
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
    value: string;
    label?: string;
    children?: Snippet;
  }
</script>

<script lang="ts">
  import { getMenuContext } from "./context";

  const { value, label, children }: MenuItemProps = $props();

  const ctx = getMenuContext();
</script>

<li {...ctx.api.getItemProps({ value })} class="rounded px-2 py-1 capitalize hover:bg-muted">
  {#if children}
    {@render children()}
  {:else}
    {label}
  {/if}
</li>
