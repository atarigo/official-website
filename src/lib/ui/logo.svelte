<script>
  import Logo from "$lib/assets/logo-rmbg.png";
  import Avatar from "$lib/components/avatar/avatar.svelte";
  import AvatarFallback from "$lib/components/avatar/avatar-fallback.svelte";
</script>

<Avatar alt="logo" src={Logo}>
  <AvatarFallback fallback="Logo" />
</Avatar>
