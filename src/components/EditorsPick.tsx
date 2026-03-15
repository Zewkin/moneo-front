import SectionHeader from "./SectionHeader";

const articles = [
  {
    category: "Crypto / Aug 23, 2025",
    title: "Bitcoin 'Buy The Dip' Calls Surge, But Liquidity Trends Point to $107K as Potential Magnet",
    author: "By Omkar Godbole",
    desc: "Liquidity trends and buy-the-dip mentions point to potential for a deeper sell-off.",
    image: "/figma/editors-1.png",
  },
  {
    category: "Markets / Aug 23, 2025",
    title: "Metamask Token Hype Builds, While Aster Open Positions Surge 46%: Crypto Markets Today",
    author: "By Omkar Godbole, Oliver Knight",
    desc: "Much will depend on the ability of bitcoin bulls to overcome important resistance levels at $113,500 and $115,000, one analyst said.",
    image: "/figma/editors-2.png",
  },
  {
    category: "Crypto / Aug 23, 2025",
    title: "Hyperliquid's Newly Launched USDH Stablecoin Sees Over $2M Volume in Early Trading",
    author: "By Omkar Godbole",
    desc: "USDH, backed by cash and U.S. Treasury securities, aims to reduce dependency on external stablecoins.",
    image: "/figma/editors-3.png",
  },
  {
    category: "Crypto / Aug 23, 2025",
    title: "LYS Labs Moves Beyond Data and Aims to Become the Operating System for Automated Global Finance",
    author: "By Omkar Godbole",
    desc: "Web3 data infrastructure company building the intelligence layer for machine finance on Solana.",
    image: "/figma/editors-4.png",
  },
];

export default function EditorsPick() {
  return (
    <section style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 16, paddingRight: 16, paddingBottom: 80 }}>
      <SectionHeader title="the best of the week" />
      <div className="flex" style={{ gap: 16, marginTop: 24 }}>
        {articles.map((article, index) => (
          <article key={article.title} className="flex flex-col" style={{ width: index === 0 ? 340 : 339, flexShrink: 0, gap: 16 }}>
            <span style={{ fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.0417em", color: "#161613", lineHeight: "18px" }}>
              {article.category}
            </span>
            <img src={article.image} alt="" style={{ width: "100%", height: 256, objectFit: "cover" }} />
            <div className="flex flex-col" style={{ gap: 24, paddingBottom: 16 }}>
              <h3 className="font-ogg" style={{ fontSize: 24, lineHeight: "28px", color: "#161613" }}>
                {article.title}
              </h3>
              <div className="flex flex-col" style={{ gap: 8 }}>
                <span style={{ fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.0417em", color: "#161613", lineHeight: "18px" }}>
                  {article.author}
                </span>
                <p className="font-ui" style={{ fontSize: 14, lineHeight: "18px", letterSpacing: "-0.006em", color: "#434343" }}>
                  {article.desc}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
