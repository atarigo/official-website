<script lang="ts">
  import LowApproach from "./games/low-approach.svelte";
  import OneSpaceHightApproach from "./games/one-space-hight-approach.svelte";
  import TwoSpaceHighApproach from "./games/two-space-high-approach.svelte";

  // todo: game play
  // todo: ai tutorial

  interface Game {
    id: number;
    name: string;
    component: any;
    steps: string[];
  }

  const games: Game[] = [
    {
      id: 1,
      name: "小目一間高夾定石",
      component: OneSpaceHightApproach,
      steps: [
        "黑棋先在小目（3-4點）下子",
        "白棋一間高夾（在黑1的右邊一間高位置）",
        "黑棋往下延伸防守",
        "白棋繼續往下攻擊",
        "黑棋採取反攻，和白棋對抗"
      ]
    },
    {
      id: 2,
      name: "小目低掛定石",
      component: LowApproach,
      steps: ["黑棋下小目", "白棋低掛（在黑1的正上方）", "黑棋往右延伸", "白棋防守右側"]
    },
    {
      id: 3,
      name: "小目二間高夾定石",
      component: TwoSpaceHighApproach,
      steps: [
        "黑棋下小目",
        "白棋二間高夾（在黑1右邊兩格）",
        "黑棋往下延伸",
        "白棋往中間逼近",
        "黑棋加強位置"
      ]
    }
  ];

  let selected = $state();
</script>

<section class="space-y-4 rounded-xl bg-gray-400/20 p-4">
  <div class="middle flex gap-8 border-b">
    <h2>Playground</h2>
    <select class="bg-background p-2 text-foreground" bind:value={selected}>
      {#each games as game}
        <option value={game.id}>
          {game.name}
        </option>
      {/each}
    </select>
  </div>

  <div class="grid grid-cols-2 overflow-y-auto">
    <div class="max-w-content">
      {#if selected}
        <!-- todo: svelte:component is deprecated -->
        <svelte:component this={games.find((g) => g.id === selected)?.component} />
      {/if}
    </div>
    <div class="flex flex-col p-8">
      <ol class="list-decimal">
        {#if selected}
          {#each games.find((g) => g.id === selected)?.steps! as step}
            <li class="mb-4">
              <p class="text-2xl">{step}</p>
            </li>
          {/each}
        {/if}
      </ol>
    </div>
  </div>
</section>
