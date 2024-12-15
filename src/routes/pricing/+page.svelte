<script lang="ts">
  import Card from "$lib/components/card/card.svelte";
  import CardHeader from "$lib/components/card/card-header.svelte";
  import CardContent from "$lib/components/card/card-content.svelte";
  import CardActions from "$lib/components/card/card-actions.svelte";
  import Button from "$lib/components/button/button.svelte";
</script>

<div class="debug container mx-auto">
  <h1 class="text-center">Pricing</h1>

  <div class="grid grid-cols-3 gap-8">
    <Card>
      <CardHeader title="Trail"></CardHeader>
      <CardContent>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </CardContent>
      <CardActions>
        <Button onclick={() => console.log("launch")}>launch</Button>
      </CardActions>
    </Card>

    <Card>
      <CardHeader title="Pro"></CardHeader>
      <CardContent>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>3</li>
          <li>3</li>
        </ul>
      </CardContent>
      <CardActions>
        <Button onclick={() => console.log("launch")}>launch</Button>
      </CardActions>
    </Card>

    <Card>
      <CardHeader title="Organization"></CardHeader>
      <CardContent>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>7</li>
        </ul>
      </CardContent>
      <CardActions>
        <Button onclick={() => console.log("launch")}>launch</Button>
      </CardActions>
    </Card>
  </div>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</div>
