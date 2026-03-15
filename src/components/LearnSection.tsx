const categories = [
  { name: "Crypto for Beginners", active: true },
  { name: "Trading Basics", active: false },
  { name: "Glossary", active: false },
  { name: "Airdrops & Bonuses", active: false },
  { name: "Guides & Tools", active: false },
  { name: "History", active: false },
];

const articles = [
  { title: "What id Berachain?", image: "/figma/learn-1.png" },
  { title: "What id Mohad?", image: "/figma/learn-2.png" },
  { title: "What is decentralized science (DeSci)?", image: "/figma/learn-3.png" },
  { title: "What is Binance's web3 wallet?", image: "/figma/learn-4.png" },
  { title: "What is Pump.fun and how do you create your own memecoin?", image: "/figma/learn-5.png" },
  { title: "What is Polymarket?", image: "/figma/learn-6.png" },
];

export default function LearnSection() {
  return (
    <section style={{ backgroundColor: "#f0f0eb" }}>
      <div
        className="flex flex-col items-center"
        style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 16, paddingRight: 16, paddingTop: 32, paddingBottom: 56, gap: 0 }}
      >
        <div className="flex justify-center" style={{ width: "100%" }}>
          <h2 className="font-ogg" style={{ fontSize: 36, lineHeight: "40px", color: "#161613", textAlign: "center" }}>
            Learn
          </h2>
        </div>
        <div className="flex flex-wrap justify-center" style={{ gap: 16, paddingTop: 16, paddingBottom: 32 }}>
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              className="font-ogg"
              style={{
                fontSize: 18,
                lineHeight: "22px",
                cursor: "pointer",
                backgroundColor: category.active ? "#161613" : "#fff",
                color: category.active ? "#fff" : "#161613",
                padding: "10px 24px",
                borderRadius: 32,
                border: "none",
              }}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap justify-center" style={{ gap: 16, paddingBottom: 32 }}>
          {articles.map((article) => (
            <article
              key={article.title}
              className="flex flex-col overflow-hidden"
              style={{ width: 383, backgroundColor: "#fff", borderRadius: 12, gap: 16, paddingBottom: 16 }}
            >
              <img src={article.image} alt="" style={{ width: "100%", height: 220, objectFit: "cover" }} />
              <div className="flex flex-col" style={{ padding: "0 16px 16px" }}>
                <h3 className="font-ogg" style={{ fontSize: 24, lineHeight: "28px", color: "#161613" }}>
                  {article.title}
                </h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
