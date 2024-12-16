<script module lang="ts">
  import type { Clerk, UserButtonProps } from "@clerk/types";

  export type UserButtonUiConfig = {
    clerk: Clerk;
    props: UserButtonProps;
  };
</script>

<script lang="ts">
  import { clerk } from "./store";

  const props: UserButtonProps = $props();

  const userButtonUi = (node: HTMLDivElement, { clerk, props }: UserButtonUiConfig) => {
    clerk.mountUserButton(node, props);

    return {
      update: ({ clerk: newClerk }: UserButtonUiConfig) => {
        if (clerk !== newClerk) {
          clerk.unmountUserButton(node);
          clerk = newClerk;
          clerk.mountUserButton(node, props);
        }
      },
      destroy: () => {
        clerk.unmountUserButton(node);
      }
    };
  };
</script>

{#if $clerk && $clerk.user}
  <div use:userButtonUi={{ clerk: $clerk, props }}></div>
{/if}
