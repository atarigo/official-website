<script lang="ts">
  const { children } = $props();
</script>

<div class="middle right flex w-full gap-2 p-4">
  {@render children?.()}
</div>
