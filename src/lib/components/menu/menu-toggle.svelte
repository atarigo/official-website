<script lang="ts">
  import { getMenuContext } from "./context";

  const { title } = $props();
  const ctx = getMenuContext();
</script>

<button {...ctx.api.getTriggerProps()}>{title}</button>
