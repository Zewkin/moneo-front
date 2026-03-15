const insights = [
  {
    category: "trends & Macro / Aug 23, 2025",
    title: "BlackRock's Ethereum ETF Rockets to $10B, Third-Fastest in History",
    imageSize: 326,
    width: 328,
    image: "/figma/insights-1.png",
  },
  {
    category: "predictions / Aug 23, 2025",
    title: "Bitcoin Could Hit $150K This Year, Says Mike Novogratz—But Ethereum Might Outperform BTC",
    imageSize: 456,
    width: 456,
    image: "/figma/insights-2.png",
  },
  {
    category: "opinion/ Aug 23, 2025",
    title: "Will Ethereum Continue to Rally? This Bitcoin OG Is Bullish on ETH",
    imageSize: 326,
    width: 328,
    image: "/figma/insights-3.png",
  },
];

export default function InsightsSection() {
  return (
    <section style={{ backgroundColor: "#161613" }}>
      <div className="relative flex flex-col items-center" style={{ maxWidth: 1440, margin: "0 auto", paddingTop: 56, paddingBottom: 130, gap: 100 }}>
        <h2 className="font-ogg" style={{ fontSize: 36, lineHeight: "40px", color: "#fff" }}>
          Insights
        </h2>
        <div className="flex items-center justify-center" style={{ width: "100%", gap: 230 }}>
          {insights.map((item) => (
            <article key={item.title} className="flex flex-col" style={{ width: item.width, flexShrink: 0, gap: 16 }}>
              <span style={{ fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.0417em", color: "#fff", lineHeight: "18px" }}>
                {item.category}
              </span>
              <img src={item.image} alt="" style={{ width: item.imageSize, height: item.imageSize, objectFit: "cover" }} />
              <div style={{ paddingBottom: 16 }}>
                <h3 className="font-ogg" style={{ fontSize: 24, lineHeight: "28px", color: "#fff" }}>
                  {item.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
        <div style={{ position: "absolute", left: 1001, top: 400, backgroundColor: "#fff", padding: "2px 24px", borderRadius: 9999 }}>
          <span style={{ fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.0417em", color: "#161613", lineHeight: "18px" }}>
            drag
          </span>
        </div>
      </div>
    </section>
  );
}
