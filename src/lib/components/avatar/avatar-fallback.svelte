<script module lang="ts">
  export interface AvatarFallbackProps {
    fallback: string;
  }
</script>

<script lang="ts">
  import { getAvatarContext } from "./context";

  const { fallback }: AvatarFallbackProps = $props();

  const ctx = getAvatarContext();
</script>

<span {...ctx.api.getFallbackProps()}>{fallback}</span>
