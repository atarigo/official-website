<script lang="ts">
  import MenuContent from "$lib/components/menu/menu-content.svelte";
  import MenuGroup from "$lib/components/menu/menu-group.svelte";
  import MenuItem from "$lib/components/menu/menu-item.svelte";
  import MenuToggle from "$lib/components/menu/menu-toggle.svelte";
  import Menu from "$lib/components/menu/menu.svelte";

  import { IconMenu2 } from "@tabler/icons-svelte";

  const menuItems = [
    { label: "feature", value: "feature" },
    { label: "playground", value: "playground" },
    { label: "docs", value: "docs" },
    { label: "pricing", value: "pricing" }
  ];
</script>

<div class="block md:hidden">
  <Menu>
    <MenuToggle>
      <IconMenu2 />
    </MenuToggle>
    <MenuContent>
      <MenuGroup>
        {#each menuItems as item}
          <MenuItem value={item.value}>
            <a
              href={`/${item.value}`}
              class="text-foreground hover:no-underline focus:outline-none"
            >
              {item.label}
            </a>
          </MenuItem>
        {/each}
      </MenuGroup>
    </MenuContent>
  </Menu>
</div>
