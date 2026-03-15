import { TickerDownIcon, TickerUpIcon } from "./Icons";

const tickerData = [
  { symbol: "BTC", change: "3.1%", up: true },
  { symbol: "SOL", change: "0.5%", up: false },
  { symbol: "XRP", change: "0.03%", up: true },
  { symbol: "ETH", change: "5.5%", up: true },
];

function TickerItem({ symbol, change, up }: { symbol: string; change: string; up: boolean }) {
  return (
    <div className="flex items-center flex-shrink-0" style={{ gap: 4 }}>
      <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.0713em", textTransform: "uppercase", color: "#161613", lineHeight: "18px" }}>{symbol}</span>
      {up ? <TickerUpIcon /> : <TickerDownIcon />}
      <span style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.0713em", color: up ? "#00881B" : "#F2312D", lineHeight: "18px" }}>
        {change}
      </span>
    </div>
  );
}

export default function Ticker() {
  const items = [...tickerData, ...tickerData, ...tickerData, ...tickerData];

  return (
    <div className="overflow-hidden" style={{ backgroundColor: "#F0F0EB" }}>
      <div className="ticker-scroll flex items-center whitespace-nowrap" style={{ gap: 32, padding: "12px 20px" }}>
        {items.map((item, i) => <TickerItem key={i} {...item} />)}
        {items.map((item, i) => <TickerItem key={`d${i}`} {...item} />)}
      </div>
    </div>
  );
}
