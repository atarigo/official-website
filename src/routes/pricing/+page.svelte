<script lang="ts">
  import Card from "$lib/components/card/card.svelte";
  import CardHeader from "$lib/components/card/card-header.svelte";
  import CardContent from "$lib/components/card/card-content.svelte";
  import CardActions from "$lib/components/card/card-actions.svelte";
  import Button from "$lib/components/button/button.svelte";
</script>

<div class="container mx-auto">
  <h1 class="my-4 text-center">Pricing</h1>

  <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
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
        <Button onclick={() => console.log("start for free")}>start for free</Button>
      </CardActions>
    </Card>

    <Card>
      <CardHeader title="Pro"></CardHeader>
      <CardContent>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
        </ul>
      </CardContent>
      <CardActions>
        <Button onclick={() => console.log("buy now")}>buy now</Button>
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
        <Button onclick={() => console.log("contact sales")}>sales</Button>
      </CardActions>
    </Card>
  </div>
</div>

<style>
  /* todo: refactor me */

  li {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
</style>
