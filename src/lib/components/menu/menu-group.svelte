<script lang="ts">
  import { getMenuContext } from "./context";

  const { children } = $props();

  const ctx = getMenuContext();
</script>

<ul {...ctx.api.getContentProps()} class="rounded border-2 bg-background p-2 focus:outline-none">
  {@render children?.()}
</ul>

<style>
  [data-scope="menu"] {
    z-index: 1000;
  }
</style>
