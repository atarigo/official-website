<script lang="ts">
  import { IconMenu } from "@tabler/icons-svelte";
  import HeaderAction from "./header-action.svelte";
  import HeaderBand from "./header-band.svelte";
  import HeaderNavigate from "./header-navigate.svelte";

  // todo: enhance header styles
  // interface HeaderProps extends HTMLAttributes<HTMLDivElement> {
  //   fluid?: boolean;
  // }

  // const { fluid } = $props();

  let title = "Atrai Go";
</script>

<header class="sticky top-0 z-10 bg-background/50 backdrop-blur-sm">
  <div class="between middle flex gap-4 p-4">
    <HeaderBand {title} />
    <div class="md:black hidden">
      <HeaderNavigate />
      <HeaderAction />
    </div>
    <div class="md:hidden">
      <button>
        <IconMenu />
      </button>
    </div>
  </div>
</header>
