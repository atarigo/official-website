<script lang="ts">
  import "../app.css";
  let { children } = $props();

  import { Footer, Header } from "$lib/ui";
</script>

<svelte:head>
  <title>Atrai Go</title>
</svelte:head>

<div class="grid h-screen grid-rows-[auto_1fr_auto]">
  <Header />
  <main class="md:p-8">
    {@render children()}
  </main>
  <Footer />
</div>
