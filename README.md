# D3 Candlestick Chart

Reusable vanilla JavaScript/D3 component with a responsive SVG demo. Includes 1Y/6M/3M/1M ranges, zoom/pan, SMA 20/50, Bollinger Bands (20 sessions, sample standard deviation, ±2σ), OHLCV crosshair readout, volume histogram, trend/support/resistance/Fibonacci drawings and undo. Drawing anchors remain in data coordinates during navigation.

## Run

Node.js 20+ recommended.

```
npm install
npm run dev
npm run build
npm run preview
```

## Embed

```js
import { CandlestickChart } from './src.js';
const chart = new CandlestickChart(container, { symbol: 'AAPL', data });
// data: [{date: Date or ISO string, open, high, low, close, volume}]
chart.setData(newData);
chart.destroy();
```

Demo data is explicitly synthetic and seeded; weekdays cover October 14, 2025 through October 13, 2026. Exchange holidays are not modeled. Supply licensed daily market data for production. Indicators are computed across the full dataset before restricting the viewport. Use Pan mode for navigation. Drawing tools use one click for horizontal lines, two for trend/Fibonacci. Undo removes the latest drawing. Reset restores the full year. Price scale fits visible candles. SVG scales with its container.

## Publish demo

Run `npm run build`, then deploy `dist/` to a static host. For GitHub Pages under a repository path, build with `npm run build -- --base=./` and publish `dist/` using Pages Actions or a hosting branch.

D3 zoom documentation: https://d3js.org/d3-zoom

## Limitations

Mouse/touch navigation supported by D3. Drawing placement currently uses pointer clicks; keyboard drawing and annotation editing are future improvements. No live data feed is included.

## Published demo

https://irenepeidev-wq.github.io/d3-candlestick-chart/

## Browser verification

Run npm exec playwright test (requires Microsoft Edge). Covers indicators, drawing persistence, undo, crosshair OHLCV and zoom.

