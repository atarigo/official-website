<script module lang="ts">
  export interface CardHeaderProps {
    title: string;
  }
</script>

<script lang="ts">
  const { title }: CardHeaderProps = $props();
</script>

<div class="border-b p-4">
  <h3>{title}</h3>
</div>
