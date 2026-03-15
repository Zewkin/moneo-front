import { ArrowOutIcon } from "./Icons";

const footerLinks: Record<string, string[]> = {
  News: ["Markets", "Companies", "Legal", "Security", "Press Release"],
  Insights: ["Trends & Macro", "Predictions", "Opinion", "Comment", "Personal Cases", "Top Tier"],
  stories: ["Lessons", "Successes", "Life Style"],
  learn: ["Crypto for Beginners", "Trading Basics", "Glossary", "Airdrops & Bonuses", "Guides & Tools", "History"],
  Rankings: ["Exchanges", "Wallets", "Brokers & CFD", "Tokens"],
  "Video & Podcasts": [],
};

const socialPaths = [
  "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.14.14 0 0 0-.07-.2c-.08-.06-.2-.04-.28-.02-.12.02-1.96 1.25-5.54 3.69-.52.36-1 .53-1.42.52-.47-.01-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.24.37-.49 1.02-.75 3.98-1.73 6.64-2.87 7.97-3.43 3.79-1.58 4.58-1.86 5.09-1.87.11 0 .37.03.53.14.14.1.18.23.2.33-.01.06.01.24 0 .38z",
  "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z",
  "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
];

const linkEntries = Object.entries(footerLinks);
const row1 = linkEntries.slice(0, 3);
const row2 = linkEntries.slice(3);

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#161613" }}>
      <div style={{ maxWidth: 1440, margin: "0 auto", position: "relative", height: 648 }}>
        <div className="flex flex-col" style={{ position: "absolute", left: 20, top: 50, width: 334, gap: 18 }}>
          <h2 className="font-boldonse" style={{ fontSize: 40, color: "#fff", lineHeight: "48px", textTransform: "uppercase", letterSpacing: "-0.03em" }}>
            moneo media
          </h2>
          <p className="font-ogg" style={{ fontSize: 18, lineHeight: "22px", color: "#fff", fontStyle: "italic" }}>
            Clear about crypto, fintech &amp; new money
          </p>
        </div>

        <div className="flex items-end" style={{ position: "absolute", left: 20, top: 177, gap: 8 }}>
          <div style={{ width: 325, padding: "8px 0", borderBottom: "1px solid #373737" }}>
            <span className="font-ui" style={{ fontSize: 14, lineHeight: "18px", color: "#898989" }}>
              Subscribe for updates
            </span>
          </div>
          <button className="font-ui" style={{ fontSize: 14, fontWeight: 500, color: "#161613", backgroundColor: "#F2312D", border: "none", borderRadius: 4, padding: "8px 24px", lineHeight: "20px", cursor: "pointer" }}>
            Subscribe
          </button>
        </div>

        <div className="flex flex-wrap" style={{ position: "absolute", left: 840, top: 50, width: 580, gap: 72 }}>
          {[row1, row2].map((row, rowIndex) => (
            <div key={rowIndex} className="flex" style={{ gap: 72 }}>
              {row.map(([section, links]) => (
                <div key={section} className="flex flex-col" style={{ width: 138, gap: 16 }}>
                  <span style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", color: "#fff", letterSpacing: "0.0833em", lineHeight: "18px" }}>
                    {section}
                  </span>
                  <div className="flex flex-col" style={{ gap: 2 }}>
                    {links.map((link) => (
                      <a key={link} href="#" className="font-ui" style={{ fontSize: 14, color: "#c3c3c3", textDecoration: "none", padding: "2px 0", lineHeight: "18px" }}>
                        {link}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between" style={{ position: "absolute", left: 0, top: 560, width: 1440, padding: "32px 20px" }}>
          <div className="flex items-center" style={{ gap: 32 }}>
            {socialPaths.map((path, index) => (
              <a key={index} href="#" style={{ color: "#fff" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d={path} />
                </svg>
              </a>
            ))}
          </div>
          <div className="flex items-center" style={{ gap: 21 }}>
            {["NEWSLETTERS", "Join as an Author", "back us", "send a tip"].map((text) => (
              <a key={text} href="#" style={{ fontSize: 12, fontWeight: 900, textTransform: "uppercase", color: "#fff", textDecoration: "none", letterSpacing: "0.0417em", display: "flex", alignItems: "center", gap: 6, lineHeight: "18px" }}>
                {text}
                <ArrowOutIcon color="#fff" size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
