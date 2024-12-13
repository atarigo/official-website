<script>
  import MenuContent from "$lib/components/menu/menu-content.svelte";
  import MenuToggle from "$lib/components/menu/menu-toggle.svelte";
  import Menu from "$lib/components/menu/menu.svelte";
</script>

<div class="flex hidden gap-4 md:flex">
  <Menu>
    <MenuToggle title="Actions" />
    <MenuContent />
  </Menu>
</div>
