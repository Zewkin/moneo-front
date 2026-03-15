import { HeadphonesIcon } from "./Icons";
import SectionHeader from "./SectionHeader";

const podcasts = [
  {
    title: "gm from Decrypt",
    desc: "gm! Decrypt journalists bring you candid deep-dive conversations with the biggest names in crypto.",
    duration: "16 min",
    image: "/figma/podcast-1.png",
  },
  {
    title: "FOMO HOUR",
    desc: "FOMO HOUR brings you the biggest daily news, updates and events from inside and outside of the Crypto, Macro and Web3 sphere!",
    duration: "16 min",
    image: "/figma/podcast-2.png",
  },
  {
    title: "GreenPill Podcast",
    desc: "GreenPill is about crypto-economic systems that create positive externalities for their neighbors & for the world.",
    duration: "16 min",
    image: "/figma/podcast-3.png",
  },
  {
    title: "Object Subject Form",
    desc: "gm! Decrypt journalists bring you candid names in crypto.",
    duration: "16 min",
    image: "/figma/podcast-4.png",
  },
];

export default function PodcastsSection() {
  return (
    <section style={{ maxWidth: 1440, margin: "0 auto", paddingTop: 40, paddingBottom: 160 }}>
      <div style={{ paddingLeft: 20, paddingRight: 20, paddingTop: 40 }}>
        <SectionHeader title="Podcasts" />
      </div>
      <div className="flex" style={{ gap: 16, paddingLeft: 20, paddingRight: 20, marginTop: 24 }}>
        {podcasts.map((podcast) => (
          <article key={podcast.title} className="flex" style={{ width: 340, flexShrink: 0, gap: 12, padding: 8, borderRadius: 6 }}>
            <img src={podcast.image} alt="" style={{ width: 115, height: 115, borderRadius: 8, objectFit: "cover", flexShrink: 0 }} />
            <div className="flex flex-col justify-between" style={{ width: 195, gap: 8 }}>
              <div className="flex flex-col" style={{ gap: 8 }}>
                <h3 className="font-ogg" style={{ fontSize: 24, lineHeight: "28px", color: "#161613" }}>
                  {podcast.title}
                </h3>
                <p className="font-ui line-clamp-3" style={{ fontSize: 14, lineHeight: "18px", letterSpacing: "-0.006em", color: "#434343" }}>
                  {podcast.desc}
                </p>
              </div>
              <div className="flex items-center" style={{ gap: 7 }}>
                <HeadphonesIcon color="#161613" />
                <span className="font-ui" style={{ fontSize: 14, color: "#161613", lineHeight: "18px" }}>
                  {podcast.duration}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
