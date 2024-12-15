<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  interface CardProps extends HTMLAttributes<HTMLDivElement> {
    class?: string;
  }
  const { children, ...props }: CardProps = $props();
</script>

<div class={"w-full rounded border bg-background p-4" + props.class}>
  <div class="grid grid-rows-[auto_1fr_auto] gap-4">
    {@render children?.()}
  </div>
</div>
