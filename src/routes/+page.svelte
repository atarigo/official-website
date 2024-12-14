<script>
  import Button from "$lib/components/button/button.svelte";
  import { goto } from "$app/navigation";
</script>

<section class="mx-auto h-[512px] max-w-3xl flex-col p-8">
  <hgroup class="text-center">
    <h1>Your Personal</h1>
    <h2>AI GO Master</h2>
  </hgroup>
  <p>
    Transform your Go journey with cutting-edge AI tutoring. Whether you're a beginner or an
    advanced player, our AI mentor adapts to your skill level, learning pace, and goals to create a
    personalized learning path. Get instant feedback, play matches, and analyze games 24/7 – embark
    on your unique journey to Go mastery.
  </p>
  <div class="center mt-8 flex gap-8">
    <Button onclick={() => (window.location.href = "https://google.com")}>Get Started</Button>
    <Button onclick={() => goto("/playground")}>Demo</Button>
  </div>
</section>

<div class="h-[512px] bg-sky-500 p-4">
  <h1>debug</h1>
</div>

<div class="h-[512px] bg-red-300 p-4">
  <h1>debug</h1>
</div>
