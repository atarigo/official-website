<script lang="ts">
  const { children, onclick } = $props();
</script>

<button type="button" class="rounded border bg-sky-500 px-4 py-1 active:scale-95" {onclick}>
  {@render children()}
</button>
