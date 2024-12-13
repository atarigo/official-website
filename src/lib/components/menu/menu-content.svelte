<script lang="ts">
  import { portal } from "@zag-js/svelte";
  import { getMenuContext } from "./context";

  const ctx = getMenuContext();
</script>

<div use:portal {...ctx.api.getPositionerProps()}>
  <ul {...ctx.api.getContentProps()}>
    <li {...ctx.api.getItemProps({ value: "edit" })}>Edit</li>
    <li {...ctx.api.getItemProps({ value: "duplicate" })}>Duplicate</li>
    <li {...ctx.api.getItemProps({ value: "delete" })}>Delete</li>
    <li {...ctx.api.getItemProps({ value: "export" })}>Export...</li>
  </ul>
</div>

<style>
  [data-part="content"] {
    z-index: 1000;
  }
</style>
