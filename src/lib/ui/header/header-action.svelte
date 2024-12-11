<script lang="ts">
  import { onMount } from "svelte";

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

<div>
  <input bind:this={inputElement} type="text" placeholder="Search" class="rounded px-2" />
</div>
