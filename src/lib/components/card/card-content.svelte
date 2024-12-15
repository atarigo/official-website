<script lang="ts" module>
  import type { HTMLAttributes } from "svelte/elements";

  // export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {}
</script>

<script>
  const { children }: HTMLAttributes<HTMLDivElement> = $props();
</script>

<div class="p-4">
  {@render children?.()}
</div>
