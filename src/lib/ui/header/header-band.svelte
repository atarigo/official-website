<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import Logo from "../logo.svelte";

  interface HeaderBandProps extends HTMLAttributes<HTMLDivElement> {
    title: string;
  }

  const { title }: HeaderBandProps = $props();
</script>

<div class="middle flex gap-2">
  <Logo />
  <h1 class="capitalize">{title}</h1>
</div>
