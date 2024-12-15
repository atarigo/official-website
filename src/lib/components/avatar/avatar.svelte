<script module lang="ts">
  import type { HTMLAttributes } from "svelte/elements";

  export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
    alt: string;
    src: string;
  }
</script>

<script lang="ts">
  import { useId } from "$lib/components/use-id";
  import * as avatar from "@zag-js/avatar";
  import { normalizeProps, useMachine } from "@zag-js/svelte";
  import { setAvatarContext } from "./context";

  const { children, alt, src }: AvatarProps = $props();

  const [snapshot, send] = useMachine(avatar.machine({ id: useId() }));
  const api = $derived(avatar.connect(snapshot, send, normalizeProps));

  setAvatarContext({
    get api() {
      return api;
    }
  });
</script>

<div {...api.getRootProps()} class="h-16 w-auto">
  {@render children?.()}

  <img {alt} {src} class="h-full w-full object-contain" {...api.getImageProps()} />
</div>
