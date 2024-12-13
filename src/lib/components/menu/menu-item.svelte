<script lang="ts">
  import type { Snippet } from "svelte";
  import { getMenuContext } from "./context";

  interface MenuItemProps {
    value: string;
    label?: string;
    children?: Snippet;
  }

  const { value, label, children }: MenuItemProps = $props();

  const { api } = getMenuContext();
</script>

<li {...api.getItemProps({ value })} class="rounded px-2 py-1 capitalize hover:bg-muted">
  {#if label}
    {label}
  {:else}
    {@render children?.()}
  {/if}
</li>
