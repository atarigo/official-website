<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <!-- 棋盤背景 -->
  <rect width="200" height="200" fill="#DEB887" />

  <!-- 畫出棋盤線 -->
  <g stroke="black" stroke-width="0.5">
    <!-- 水平線 -->
    <line x1="20" y1="20" x2="180" y2="20" />
    <line x1="20" y1="40" x2="180" y2="40" />
    <line x1="20" y1="60" x2="180" y2="60" />
    <line x1="20" y1="80" x2="180" y2="80" />
    <line x1="20" y1="100" x2="180" y2="100" />
    <line x1="20" y1="120" x2="180" y2="120" />
    <line x1="20" y1="140" x2="180" y2="140" />
    <line x1="20" y1="160" x2="180" y2="160" />
    <line x1="20" y1="180" x2="180" y2="180" />

    <!-- 垂直線 -->
    <line x1="20" y1="20" x2="20" y2="180" />
    <line x1="40" y1="20" x2="40" y2="180" />
    <line x1="60" y1="20" x2="60" y2="180" />
    <line x1="80" y1="20" x2="80" y2="180" />
    <line x1="100" y1="20" x2="100" y2="180" />
    <line x1="120" y1="20" x2="120" y2="180" />
    <line x1="140" y1="20" x2="140" y2="180" />
    <line x1="160" y1="20" x2="160" y2="180" />
    <line x1="180" y1="20" x2="180" y2="180" />
  </g>

  <!-- 星位點 -->
  <g fill="black">
    <circle cx="60" cy="60" r="1.5" />
    <circle cx="140" cy="60" r="1.5" />
    <circle cx="60" cy="140" r="1.5" />
    <circle cx="140" cy="140" r="1.5" />
    <circle cx="100" cy="100" r="1.5" />
  </g>

  <!-- 棋子 -->
  <!-- 黑1 -->
  <g>
    <circle cx="60" cy="60" r="8" fill="black" />
    <text x="60" y="63" text-anchor="middle" fill="white" font-size="7">1</text>
  </g>

  <!-- 白2 -->
  <g>
    <circle cx="60" cy="40" r="8" fill="white" stroke="black" stroke-width="0.5" />
    <text x="60" y="43" text-anchor="middle" fill="black" font-size="7">2</text>
  </g>

  <!-- 黑3 -->
  <g>
    <circle cx="80" cy="40" r="8" fill="black" />
    <text x="80" y="43" text-anchor="middle" fill="white" font-size="7">3</text>
  </g>

  <!-- 白4 -->
  <g>
    <circle cx="80" cy="60" r="8" fill="white" stroke="black" stroke-width="0.5" />
    <text x="80" y="63" text-anchor="middle" fill="black" font-size="7">4</text>
  </g>
</svg>
