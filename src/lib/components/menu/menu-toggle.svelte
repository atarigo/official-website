<script lang="ts">
  import { getMenuContext } from "./context";

  const { children } = $props();

  const { api } = getMenuContext();
</script>

<button
  {...api.getTriggerProps()}
  class="rounded px-4 py-2 capitalize hover:bg-muted hover:underline active:scale-95"
>
  {@render children?.()}
</button>
