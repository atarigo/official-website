<script lang="ts">
  import { useId } from "$lib/components/use-id";
  import * as menu from "@zag-js/menu";
  import { normalizeProps, useMachine } from "@zag-js/svelte";
  import type { Snippet } from "svelte";
  import { setMenuContext } from "./context";

  interface MenuProps extends Omit<menu.Context, "id" | "orientation"> {
    children: Snippet;
  }

  const { children, ...props }: MenuProps = $props();

  const [snapshot, send] = useMachine(menu.machine({ id: useId() }), {
    context: {
      ...props
    }
  });
  const api = $derived(menu.connect(snapshot, send, normalizeProps));

  setMenuContext({
    get api() {
      return api;
    }
  });
</script>

{@render children?.()}
