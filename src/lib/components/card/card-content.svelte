<script lang="ts" module>
  import type { Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";

  export interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
    children: Snippet;
  }
</script>

<script>
  const { children }: CardContentProps = $props();
</script>

<div class="p-4">
  {@render children?.()}
</div>
