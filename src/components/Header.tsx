import { ArrowOutIcon, ChevronDownIcon, MenuIcon, SearchIcon } from "./Icons";

export default function Header() {
  return (
    <header>
      <div style={{ backgroundColor: "#f0f0eb" }}>
        <div className="flex items-center justify-between" style={{ maxWidth: 1440, margin: "0 auto", minHeight: 48 }}>
          <div className="flex items-center" style={{ height: 48 }}>
            <div className="flex items-center justify-center" style={{ width: 48, height: 48, padding: 10, cursor: "pointer" }}>
              <MenuIcon color="#161613" />
            </div>
            <div className="flex items-center justify-center" style={{ height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10 }}>
              <div style={{ position: "relative", width: 41.27, height: 24.05 }}>
                <span className="font-boldonse" style={{ position: "absolute", left: 0, top: 1.05, fontSize: 23.42, lineHeight: 1, letterSpacing: "-0.03em", color: "#161613", textTransform: "uppercase" }}>m</span>
                <span className="font-boldonse" style={{ position: "absolute", left: 17.27, top: 0, fontSize: 23.42, lineHeight: 1, letterSpacing: "-0.03em", color: "#161613", textTransform: "uppercase" }}>m</span>
              </div>
            </div>
            <div className="flex items-center" style={{ height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10 }}>
              <span className="font-ui" style={{ fontSize: 14, fontWeight: 500, color: "#161613", lineHeight: "20px" }}>Today:&nbsp;August 22, 2025</span>
            </div>
          </div>

          <div className="flex items-center" style={{ height: 48 }}>
            <div className="flex items-center" style={{ paddingLeft: 24, paddingRight: 24, gap: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 500, letterSpacing: "0.0833em", textTransform: "uppercase", color: "#161613", lineHeight: "18px" }}>NEWSLETTERS</span>
              <ArrowOutIcon color="#161613" size={18} />
            </div>
            <div className="flex items-center" style={{ height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10, gap: 8 }}>
              <span className="font-ui" style={{ fontSize: 14, fontWeight: 500, color: "#161613", lineHeight: "20px" }}>Eng</span>
              <ChevronDownIcon color="#161613" size={16} />
            </div>
            <div className="flex items-center justify-center" style={{ width: 48, height: 48, padding: 10 }}>
              <SearchIcon color="#161613" size={20} />
            </div>
            <div className="flex items-center" style={{ height: 48, paddingLeft: 24, paddingRight: 24, paddingTop: 10, paddingBottom: 10 }}>
              <span className="font-ui" style={{ fontSize: 14, fontWeight: 500, color: "#161613", lineHeight: "20px" }}>Login</span>
            </div>
            <div className="flex items-center justify-center" style={{ height: 48, paddingLeft: 16, paddingRight: 16, paddingTop: 8, paddingBottom: 8 }}>
              <button className="font-ui" style={{ fontSize: 14, fontWeight: 500, lineHeight: "20px", color: "#161613", backgroundColor: "#f2312d", borderRadius: 4, border: "none", paddingLeft: 16, paddingRight: 16, paddingTop: 6, paddingBottom: 6, minHeight: 32, cursor: "pointer" }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-end justify-between" style={{ maxWidth: 1440, margin: "0 auto", padding: "32px 20px 16px", gap: 192 }}>
        <img
          src="/figma/header-cta-left.png"
          alt=""
          style={{ width: 280, height: 91, objectFit: "contain", flexShrink: 0 }}
        />

        <div className="flex flex-col items-center" style={{ width: 530, gap: 16 }}>
          <h1 className="font-boldonse" style={{ fontSize: 40, lineHeight: "48px", color: "#161613", textTransform: "uppercase", letterSpacing: "-0.03em" }}>
            moneo media
          </h1>
          <p className="font-ogg" style={{ fontSize: 18, lineHeight: "22px", letterSpacing: "-0.0223em", color: "#161613", textAlign: "center", fontStyle: "italic" }}>
            Clear about crypto, fintech &amp; new money
          </p>
        </div>

        <img
          src="/figma/header-cta-right.png"
          alt=""
          style={{ width: 280, height: 91, objectFit: "contain", flexShrink: 0 }}
        />
      </div>
    </header>
  );
}
