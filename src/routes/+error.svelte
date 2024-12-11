<script lang="ts">
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";

  onMount(() => {
    goto("/");
  });
</script>

<div class="h-[512px] bg-gray-500/50 p-4">
  <h1>Oops!</h1>
</div>
