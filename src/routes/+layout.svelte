<script lang="ts">
  import "../app.css";
  let { children } = $props();
  /* 
  const toggleTheme = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    const isDarkMode = target.ownerDocument.documentElement.classList.toggle("dark");
    // NOT in the iFrame
    if (target.ownerDocument === document)
      localStorage.setItem("color-theme", isDarkMode ? "dark" : "light");
  }; 
  */
</script>

<svelte:head>
  <title>Atrai Go</title>
  <script>
    if ("color-theme" in localStorage) {
      localStorage.getItem("color-theme") === "dark"
        ? document.documentElement.classList.add("dark")
        : document.documentElement.classList.remove("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        document.documentElement.classList.add("dark");
      }
    }
  </script>
</svelte:head>

{@render children()}
