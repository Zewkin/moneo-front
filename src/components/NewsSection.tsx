import SectionHeader from "./SectionHeader";

const newsRow1 = [
  {
    category: "Markets / Aug 23, 2025",
    title: "The 7 Largest Publicly Traded Ethereum Treasury Firms",
    desc: "Publicly traded firms are now stacking Ethereum, pulling in billions of dollars of ETH. These are the largest holders.",
    image: "/figma/news-hero.png",
  },
  {
    category: "Markets / Aug 23, 2025",
    title: "'Ethereum Avengers' Firm to Generate ETH Using $1.5 Billion Stockpile",
    desc: 'The firm received a $645 million "anchor investment" from its Consensys-linked co-founder and chair.',
    image: "/figma/news-card-2.png",
  },
  {
    category: "business / Aug 23, 2025",
    title: "Another Sports Betting Powerhouse Is Getting Into Prediction Markets",
    desc: "PrizePicks gets green light for prediction markets as sports betting giants rush into the booming billion-dollar sector.",
    image: "/figma/news-card-3.png",
  },
];

const newsRow2 = [
  {
    category: "Artificial Intelligence / Aug 23, 2025",
    title: "Do LLMs Dream of Electric Sheep? New AI Study Shows Surprising Results",
    desc: "A new AI study finds that large language models show stable, surprising behaviors when left alone.",
    image: "/figma/news-card-4.png",
  },
  {
    category: "Markets / Aug 23, 2025",
    title: "Cipher Stock Rises as Bitcoin Miner Boosts Debt Offering to $1.1 Billion Following Google Deal",
    desc: "Bitcoin miner Cipher Mining has upped the price of its convertible debt offering after announcing a $3 billion deal backstopped by Google.",
    image: "/figma/news-card-5.png",
  },
  {
    category: "Markets / Aug 23, 2025",
    title: "UK's New Digital ID Scheme 'Target for Hackers'",
    desc: "Tech experts have highlighted privacy and security risks in the UK government's new mandatory Digital ID card scheme.",
    image: "/figma/news-card-6.png",
  },
  {
    category: "technology / Aug 23, 2025",
    title: "NYM Privacy Token Pumps as UK Demand for VPNs Spikes",
    desc: "The Nym token has jumped considerably in the past day as UK VPN demand spikes 6,000% amid a new age verification law.",
    image: "/figma/news-card-7.png",
  },
];

type NewsItem = (typeof newsRow1)[number];

function NewsCard({ item, imgH }: { item: NewsItem; imgH: number }) {
  return (
    <article className="flex flex-col" style={{ gap: 16 }}>
      <span style={{ fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.0417em", color: "#161613", lineHeight: "18px" }}>
        {item.category}
      </span>
      <img src={item.image} alt="" style={{ width: "100%", height: imgH, objectFit: "cover" }} />
      <div className="flex flex-col" style={{ gap: 24, paddingBottom: 16 }}>
        <h3 className="font-ogg" style={{ fontSize: 24, lineHeight: "28px", color: "#161613" }}>
          {item.title}
        </h3>
        <p className="font-ui" style={{ fontSize: 14, lineHeight: "18px", letterSpacing: "-0.006em", color: "#434343" }}>
          {item.desc}
        </p>
      </div>
    </article>
  );
}

export default function NewsSection() {
  return (
    <section style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 20, paddingRight: 20, paddingBottom: 40 }}>
      <SectionHeader title="news / markets" />
      <div className="flex" style={{ gap: 16, marginTop: 27 }}>
        <div style={{ width: 690, flexShrink: 0 }}>
          <NewsCard item={newsRow1[0]} imgH={467} />
        </div>
        <div style={{ width: 339, flexShrink: 0 }}>
          <NewsCard item={newsRow1[1]} imgH={256} />
        </div>
        <div style={{ width: 339, flexShrink: 0 }}>
          <NewsCard item={newsRow1[2]} imgH={313} />
        </div>
      </div>
      <div className="flex" style={{ gap: 17, marginTop: 56 }}>
        <div style={{ width: 339, flexShrink: 0 }}>
          <NewsCard item={newsRow2[0]} imgH={256} />
        </div>
        <div style={{ width: 339, flexShrink: 0 }}>
          <NewsCard item={newsRow2[1]} imgH={256} />
        </div>
        <div style={{ width: 339, flexShrink: 0 }}>
          <NewsCard item={newsRow2[2]} imgH={397} />
        </div>
        <div style={{ width: 339, flexShrink: 0 }}>
          <NewsCard item={newsRow2[3]} imgH={256} />
        </div>
      </div>
    </section>
  );
}
