<script lang="ts">
  import { portal } from "@zag-js/svelte";
  import { getMenuContext } from "./context";

  const { children } = $props();

  const ctx = getMenuContext();
</script>

<div use:portal {...ctx.api.getPositionerProps()}>
  {@render children?.()}
</div>
