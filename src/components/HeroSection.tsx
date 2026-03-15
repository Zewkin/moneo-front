import { ReadIcon } from "./Icons";

const latestNews = [
  { time: "10:55 PM", badge: "Sponsored", readTime: "6 min", title: "The Daily: Ether, Solana, Dogecoin lead crypto rally, Bitcoin whale rotates into ETH, VanEck files JitoSOL ETF, and more", hasImage: false },
  { time: "Markets", badge: null, readTime: "6 min", title: "\u2018Very good sign\u2019: Grayscale, Bitwise, and more file amendments for spot XRP ETF", hasImage: true, isBoldTime: true },
  { time: "09:45 PM", badge: null, readTime: "2 min", title: "Veteran IRS official Trish Turner steps down to join crypto tax firm", hasImage: false },
  { time: "09:30 PM", badge: null, readTime: "5 min", title: "Bitcoin treasuries\u2019 chances of big returns likely fading, says Ledn CEO", hasImage: false },
  { time: "09:22 PM", badge: "Press Release", readTime: "7 min", title: "Bitcoin treasuries\u2019 chances of big returns likely fading, says Ledn CEO", hasImage: false },
  { time: "09:10 PM", badge: null, readTime: "6 min", title: "Nyan Cat Creator Calls Meme Coins \u2018Wild West\u2019, Claims $700K in Fees\u2014But Denies Endorsement", hasImage: false },
];

export default function HeroSection() {
  return (
    <section className="flex" style={{ maxWidth: 1440, margin: "0 auto", padding: "32px 20px", gap: 16 }}>
      <div className="flex flex-col" style={{ width: 328, flexShrink: 0, gap: 16 }}>
        <article className="flex flex-col" style={{ paddingTop: 8, paddingBottom: 8, gap: 12 }}>
          <div className="flex flex-col" style={{ gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.0417em", color: "#161613", lineHeight: "18px" }}>
              Capital Market / Aug 23, 2025
            </span>
            <div className="flex" style={{ gap: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 400, lineHeight: "18px", color: "#f2312d", border: "0.5px solid #f2312d", padding: "0 4px", borderRadius: 2 }}>
                Press Release
              </span>
            </div>
          </div>
          <div style={{ width: "100%", height: 212, overflow: "hidden" }}>
            <img src="/figma/hero-card-1.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ padding: "0 4px 12px" }}>
            <h3 className="font-ogg" style={{ fontSize: 18, lineHeight: "22px", color: "#161613" }}>
              God in the Machine: Inside the Growing AI Religious Movement
            </h3>
          </div>
        </article>

        <article className="flex flex-col" style={{ backgroundColor: "#161613", padding: 8, gap: 12 }}>
          <div className="flex flex-col" style={{ gap: 6 }}>
            <span style={{ fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.0417em", color: "#fff", lineHeight: "18px" }}>Markets / Aug 23, 2025</span>
            <div className="flex" style={{ gap: 8 }}>
              <span style={{ fontSize: 11, lineHeight: "18px", color: "#d0d0cb", border: "0.5px solid #d0d0cb", padding: "0 4px", borderRadius: 2 }}>Sponsored</span>
            </div>
          </div>
          <div style={{ height: 212, overflow: "hidden" }}>
            <img src="/figma/hero-card-2.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{ padding: "0 4px 12px" }}>
            <h3 className="font-ogg" style={{ fontSize: 18, lineHeight: "22px", color: "#fff" }}>
              Why Arthur Hayes Expects Ethereum to Surge to $20,000
            </h3>
          </div>
        </article>
      </div>

      <div className="flex flex-col" style={{ width: 688, flexShrink: 0 }}>
        <div className="relative" style={{ width: "100%", height: 435, overflow: "hidden" }}>
          <img src="/figma/hero-main.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", top: 11, left: "50%", width: 328, transform: "translateX(-50%)" }}>
            <span style={{ display: "block", fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.0417em", color: "#fff", lineHeight: "18px", textAlign: "center" }}>
              Capital Market / Aug 23, 2025
            </span>
          </div>
        </div>
        <div style={{ padding: "16px 4px", display: "flex", flexDirection: "column", gap: 24 }}>
          <h2 className="font-ogg" style={{ fontSize: 36, lineHeight: "40px", color: "#161613" }}>
            Numbers and Narratives: An Evaluation Framework For Crypto Liquidity
          </h2>
          <div className="flex flex-col" style={{ gap: 8 }}>
            <div className="flex items-center" style={{ gap: 12 }}>
              <div style={{ width: 10, height: 10, backgroundColor: "#161613", borderRadius: 2 }} />
              <span style={{ fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.0417em", color: "#161613", lineHeight: "18px" }}>By Akash Girimath</span>
            </div>
            <p className="font-ogg" style={{ width: 658, fontSize: 18, lineHeight: "22px", color: "#161613" }}>
              Selecting the right market maker is critical for any project, as their strategies can significantly impact token performance and ecosystem growth. Selecting the right market maker is critical for any project, as their strategies can significantly impact token performance and ecosystem growth.
            </p>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col"
        style={{ width: 352, flexShrink: 0, backgroundColor: "#f0f0eb", borderRadius: 8, overflow: "hidden" }}
      >
        <div style={{ padding: "12px 12px 0 14px" }}>
          <span style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.0713em", color: "#f2312d", lineHeight: "18px" }}>Latest</span>
        </div>
        <div className="flex flex-col" style={{ padding: "16px 14px", gap: 16 }}>
          {latestNews.map((item, i) => (
            <div
              key={i}
              className="flex flex-col"
              style={{ paddingBottom: i === latestNews.length - 1 ? 0 : 16, gap: 12, borderBottom: i === latestNews.length - 1 ? "none" : "1px solid #d0d0cb" }}
            >
              <div className="flex items-center justify-between" style={{ paddingRight: 2, gap: 8 }}>
                <div className="flex items-center" style={{ gap: 8 }}>
                  <span style={{ fontSize: 12, fontWeight: (item as { isBoldTime?: boolean }).isBoldTime ? 900 : 500, textTransform: (item as { isBoldTime?: boolean }).isBoldTime ? "uppercase" : "none", letterSpacing: (item as { isBoldTime?: boolean }).isBoldTime ? "0.0417em" : "0.0833em", color: "#161613", lineHeight: "18px" }}>
                    {item.time}
                  </span>
                  {item.badge && (
                    <span style={{ fontSize: 11, lineHeight: "18px", color: "#f2312d", border: "0.5px solid #f2312d", padding: "0 4px", borderRadius: 2 }}>
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-center" style={{ gap: 6, paddingLeft: 2, paddingRight: 2 }}>
                  <ReadIcon />
                  <span className="font-ui" style={{ fontSize: 14, color: "#161613", lineHeight: "18px" }}>{item.readTime}</span>
                </div>
              </div>
              {item.hasImage ? (
                <div className="flex" style={{ gap: 12, justifyContent: "space-between", alignItems: "flex-end" }}>
                  <p className="font-ui" style={{ width: 204, fontSize: 14, lineHeight: "18px", letterSpacing: "-0.006em", color: "#161613" }}>{item.title}</p>
                  <div style={{ width: 64, height: 64, borderRadius: 4, flexShrink: 0, overflow: "hidden" }}>
                    <img src="/figma/latest-1.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                </div>
              ) : (
                <p className="font-ui" style={{ fontSize: 14, lineHeight: "18px", letterSpacing: "-0.006em", color: "#161613" }}>{item.title}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
