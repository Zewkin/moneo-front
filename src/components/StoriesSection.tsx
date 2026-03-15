import { ReadIcon } from "./Icons";
import SectionHeader from "./SectionHeader";

const stories = [
  {
    category: "lessons",
    title: "SharpLink to Commence $1.5B Stock Buyback Program",
    desc: "SharpLink said it will make the repurchases at a time and in amounts depending on the market conditions and share price.",
    image: "/figma/story-1.png",
  },
  {
    category: "successes / Aug 23, 2025",
    title: "While CFTC Awaits New Chairman, Acting Chief Pham Gets Rolling on Crypto",
    desc: "As U.S. President Donald Trump's chairman nominee, Brian Quintenz, remains in a confirmation holding pattern, the CFTC starts another \"crypto sprint.\"",
    image: "/figma/story-2.png",
  },
  {
    category: "successes / Aug 23, 2025",
    title: "OpenEden: Has Stablecoin Summer Peaked?",
    desc: "Stablecoins have gotten a lot of attention over the past few weeks, sparking conversations in the crypto world, traditional finance and regulators both on Capitol Hill and around the world.",
    image: "/figma/story-3.png",
  },
  {
    category: "life style / Aug 23, 2025",
    title: "Ether Likely to Top $5K, BTC May See New High as Powell Sparks Rally, Asset Managers Say",
    desc: "While Powell's stance supports a crypto rally, potential risks include corporate treasury adoption challenges and equity market volatility.",
    image: "/figma/story-4.png",
  },
  {
    category: "lessons",
    title: "LYS Labs Moves Beyond Data and Aims to Become the Operating System for Automated Global Finance",
    desc: "Web3 data infrastructure company building the intelligence layer for machine finance on Solana, today announced a series of significant milestones that underscore its rapid growth and adoption.",
    image: "/figma/story-5.png",
  },
  {
    category: "lessons",
    title: "Morning Minute: MetaMask Confirms Token, Airdrop SZN Incoming",
    desc: "MetaMask is just one of several major protocols set to launch tokens in the near future. Is Airdrop SZN finally here?",
    image: "/figma/story-6.png",
  },
];

export default function StoriesSection() {
  return (
    <section style={{ maxWidth: 1440, margin: "0 auto", paddingLeft: 16, paddingRight: 16, paddingTop: 40, paddingBottom: 80 }}>
      <SectionHeader title="stories" />
      <div className="flex" style={{ marginTop: 24, gap: 16 }}>
        <div style={{ width: 340, flexShrink: 0 }}>
          <h2 style={{ fontSize: 26, lineHeight: "28px", color: "#161613", opacity: 0 }}>The best of the week</h2>
        </div>
        <div className="flex flex-col" style={{ width: 931, gap: 24 }}>
          {stories.map((story, index) => (
            <article key={story.title} className="flex" style={{ gap: 16, paddingBottom: 24, borderBottom: index === stories.length - 1 ? "none" : "1px dashed #161613" }}>
              <div style={{ width: 339, height: 219, flexShrink: 0, overflow: "hidden" }}>
                <img src={story.image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div className="flex flex-col" style={{ width: 576, gap: 16 }}>
                <span style={{ fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.0417em", color: "#161613", lineHeight: "18px" }}>
                  {story.category}
                </span>
                <div className="flex flex-col" style={{ gap: 8 }}>
                  <div className="flex flex-col" style={{ gap: 16 }}>
                    <h3 className="font-ogg" style={{ fontSize: 24, lineHeight: "28px", color: "#161613" }}>
                      {story.title}
                    </h3>
                    <p className="font-ui" style={{ fontSize: 14, lineHeight: "18px", letterSpacing: "-0.006em", color: "#161613" }}>
                      {story.desc}
                    </p>
                  </div>
                  <div className="flex items-center" style={{ gap: 2, paddingRight: 2 }}>
                    <span style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.0833em", color: "#161613", lineHeight: "18px" }}>
                      Aug 22, 2025 /&nbsp;
                    </span>
                    <div className="flex items-center" style={{ gap: 6, paddingLeft: 2, paddingRight: 2 }}>
                      <ReadIcon />
                      <span className="font-ui" style={{ fontSize: 14, color: "#161613", lineHeight: "18px" }}>
                        6 min
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
