<script module lang="ts">
  import type { Snippet } from "svelte";

  export interface MenuProps extends Omit<menu.Context, "id" | "orientation"> {
    children: Snippet;
  }
</script>

<script lang="ts">
  import { useId } from "$lib/components/use-id";
  import * as menu from "@zag-js/menu";
  import { normalizeProps, useMachine } from "@zag-js/svelte";
  import { setMenuContext } from "./context";

  const { children }: MenuProps = $props();

  const [snapshot, send] = useMachine(menu.machine({ id: useId() }));
  const api = $derived(menu.connect(snapshot, send, normalizeProps));

  setMenuContext({
    get api() {
      return api;
    }
  });
</script>

{@render children?.()}
