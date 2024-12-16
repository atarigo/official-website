<script lang="ts">
  import { onMount } from "svelte";
  import ClerkUserButton from "$lib/clerk/clerk-user-button.svelte";
  import ClerkSignInButton from "$lib/clerk/clerk-sign-in-button.svelte";
  import ClerkSignOutButton from "$lib/clerk/clerk-sign-out-button.svelte";

  let inputElement: HTMLInputElement;

  const handleKeydown = (event: KeyboardEvent) => {
    if (event.ctrlKey && event.key.toLowerCase() == "k") {
      event.preventDefault();
      inputElement.focus();
    }
  };

  onMount(() => {
    document.addEventListener("keydown", handleKeydown);

    return () => {
      document.removeEventListener("keydown", handleKeydown);
    };
  });
</script>

<div class="middle hidden gap-4 md:flex">
  <input bind:this={inputElement} type="text" placeholder="Search" class="rounded px-2" />
  <ClerkSignInButton />
  <ClerkUserButton />
</div>
