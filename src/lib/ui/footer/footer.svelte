<script lang="ts">
  import ThemeToogle from "@/ui/theme-toggle.svelte";
  import FooterBand from "./footer-band.svelte";
  import FooterCopyright from "./footer-copyright.svelte";
</script>

<footer class="p-4">
  <div class="between container mx-auto flex flex-wrap gap-4">
    <FooterBand title="Atrai Go" />
    <FooterCopyright />
    <ThemeToogle />
  </div>
</footer>
