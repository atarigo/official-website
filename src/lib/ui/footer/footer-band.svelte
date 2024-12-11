<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  interface FooterBandProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
  }

  const { title }: FooterBandProps = $props();
</script>

<div class="middle flex gap-2">
  <h1 class="capitalize">{title}</h1>
</div>
