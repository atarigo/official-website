<script>
  // todo: types
  // @ts-nocheck
  import { onMount } from "svelte";

  // 棋盤常數
  const boardSize = 13;
  const cellSize = 30;
  const padding = 40;

  // 響應式狀態
  let canvas;
  let ctx;
  let currentPlayer = "black";
  let stones = [];
  let gameHistory = [[]];
  let lastCapturedPoint = null;

  // 檢查一個棋子的氣
  function getLiberties(x, y, color, checkedPoints = new Set()) {
    const key = `${x},${y}`;
    if (checkedPoints.has(key)) return new Set();
    checkedPoints.add(key);

    const liberties = new Set();

    function checkPoint(x, y) {
      if (x < 0 || x >= boardSize || y < 0 || y >= boardSize) return;
      const pointKey = `${x},${y}`;
      const stone = stones.find((s) => s.x === x && s.y === y);

      if (!stone) {
        liberties.add(pointKey);
      } else if (stone.color === color && !checkedPoints.has(pointKey)) {
        const subLiberties = getLiberties(x, y, color, checkedPoints);
        subLiberties.forEach((liberty) => liberties.add(liberty));
      }
    }

    // 檢查四周
    checkPoint(x - 1, y);
    checkPoint(x + 1, y);
    checkPoint(x, y - 1);
    checkPoint(x, y + 1);

    return liberties;
  }

  // 提取死子
  function captureDeadStones(x, y, color) {
    const oppositeColor = color === "black" ? "white" : "black";
    const capturedStones = [];

    [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ].forEach(([dx, dy]) => {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < boardSize && ny >= 0 && ny < boardSize) {
        const stone = stones.find((s) => s.x === nx && s.y === ny);
        if (stone && stone.color === oppositeColor) {
          const liberties = getLiberties(nx, ny, oppositeColor);
          if (liberties.size === 0) {
            stones
              .filter((s) => s.color === oppositeColor)
              .forEach((s) => {
                if (getLiberties(s.x, s.y, oppositeColor).size === 0) {
                  capturedStones.push(s);
                }
              });
          }
        }
      }
    });

    if (capturedStones.length === 1) {
      lastCapturedPoint = {
        x: capturedStones[0].x,
        y: capturedStones[0].y
      };
    } else {
      lastCapturedPoint = null;
    }

    stones = stones.filter((s) => !capturedStones.some((c) => c.x === s.x && c.y === s.y));
    return capturedStones.length > 0;
  }

  // 檢查落子是否合法
  function isValidMove(x, y, color) {
    if (stones.some((stone) => stone.x === x && stone.y === y)) {
      return false;
    }

    if (lastCapturedPoint && lastCapturedPoint.x === x && lastCapturedPoint.y === y) {
      return false;
    }

    stones = [...stones, { x, y, color }];

    const liberties = getLiberties(x, y, color);
    const hasLiberties = liberties.size > 0;

    const canCapture = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
    ].some(([dx, dy]) => {
      const nx = x + dx;
      const ny = y + dy;
      if (nx >= 0 && nx < boardSize && ny >= 0 && ny < boardSize) {
        const stone = stones.find((s) => s.x === nx && s.y === ny);
        if (stone && stone.color !== color) {
          return getLiberties(nx, ny, stone.color).size === 0;
        }
      }
      return false;
    });

    stones = stones.slice(0, -1);
    return hasLiberties || canCapture;
  }

  function drawBoard() {
    const gradient = ctx.createRadialGradient(
      canvas.width / 2,
      canvas.height / 2,
      0,
      canvas.width / 2,
      canvas.height / 2,
      canvas.width / 2
    );
    gradient.addColorStop(0, "#1a237e");
    gradient.addColorStop(1, "#0d1333");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#ffffff";
    ctx.lineWidth = 1;

    // 畫座標
    ctx.fillStyle = "#ffffff";
    ctx.font = "14px Arial";
    for (let i = 0; i < boardSize; i++) {
      ctx.fillText(boardSize - i, padding - 20, padding + i * cellSize + 5);
      ctx.fillText(String.fromCharCode(65 + i), padding + i * cellSize - 5, padding - 20);
    }

    // 畫線
    for (let i = 0; i < boardSize; i++) {
      const x = padding + i * cellSize;
      const y = padding + i * cellSize;

      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, padding + (boardSize - 1) * cellSize);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(padding + (boardSize - 1) * cellSize, y);
      ctx.stroke();
    }

    // 星位
    const starPoints = [3, 6, 9];
    for (let i of starPoints) {
      for (let j of starPoints) {
        ctx.beginPath();
        ctx.arc(padding + i * cellSize, padding + j * cellSize, 3, 0, 2 * Math.PI);
        ctx.fill();
      }
    }
  }

  function drawStone(x, y, color, isLast = false) {
    const centerX = padding + x * cellSize;
    const centerY = padding + y * cellSize;
    const radius = cellSize * 0.4;

    const gradient = ctx.createRadialGradient(
      centerX - radius / 3,
      centerY - radius / 3,
      radius / 10,
      centerX,
      centerY,
      radius
    );

    if (color === "black") {
      gradient.addColorStop(0, "#666");
      gradient.addColorStop(0.3, "#333");
      gradient.addColorStop(1, "#000");
    } else {
      gradient.addColorStop(0, "#fff");
      gradient.addColorStop(0.3, "#eee");
      gradient.addColorStop(1, "#ccc");
    }

    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();

    // 高光
    ctx.beginPath();
    ctx.arc(centerX - radius / 3, centerY - radius / 3, radius / 3, 0, Math.PI * 2);
    ctx.fillStyle = color === "black" ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.5)";
    ctx.fill();

    if (isLast) {
      ctx.beginPath();
      ctx.arc(centerX, centerY, radius / 4, 0, Math.PI * 2);
      ctx.fillStyle = color === "black" ? "#fff" : "#000";
      ctx.fill();
    }
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBoard();
    stones.forEach((stone, index) => {
      drawStone(stone.x, stone.y, stone.color, index === stones.length - 1);
    });
  }

  function handleClick(event) {
    const rect = canvas.getBoundingClientRect();
    const x = Math.round((event.clientX - rect.left - padding) / cellSize);
    const y = Math.round((event.clientY - rect.top - padding) / cellSize);

    if (x >= 0 && x < boardSize && y >= 0 && y < boardSize) {
      if (isValidMove(x, y, currentPlayer)) {
        stones = [...stones, { x, y, color: currentPlayer }];
        captureDeadStones(x, y, currentPlayer);
        gameHistory = [...gameHistory, [...stones]];
        currentPlayer = currentPlayer === "black" ? "white" : "black";
      }
    }
  }

  function undo() {
    if (gameHistory.length > 1) {
      gameHistory = gameHistory.slice(0, -1);
      stones = [...gameHistory[gameHistory.length - 1]];
      currentPlayer = currentPlayer === "black" ? "white" : "black";
      lastCapturedPoint = null;
    }
  }

  onMount(() => {
    ctx = canvas.getContext("2d");
    render();

    // 設置動畫循環
    function animate() {
      render();
      requestAnimationFrame(animate);
    }
    animate();
  });
</script>

<div class="center container mx-auto flex flex-col gap-16 p-4 md:flex-row">
  <div class="middle flex flex-col gap-4">
    <canvas bind:this={canvas} width="430" height="430" on:click={handleClick}> </canvas>

    <div class="space-x-4">
      <button on:click={undo} class="rounded bg-sky-500 px-4 py-2 hover:bg-sky-600 active:scale-95">
        undo
      </button>
      <span>current: {currentPlayer === "black" ? "black" : "white"}</span>
    </div>
  </div>

  <div class="h-[430px] w-full overflow-y-auto rounded bg-gray-600 p-4 md:w-48">
    <h4>History</h4>
    <div>
      {#each gameHistory.slice(1) as state, i}
        {@const move = state[state.length - 1]}
        <p class="[&:not(:first-child)]:mt-0.5">
          {i + 1}. {move.color === "black" ? "B" : "W"}: {String.fromCharCode(
            65 + move.x
          )}{boardSize - move.y}
        </p>
      {/each}
    </div>
  </div>
</div>

<a href="/playground/joseki">joseki</a>
