import { ArrowOutIcon, ArrowRightIcon } from "./Icons";

type DropdownLink = {
  label: string;
  highlighted?: boolean;
  leadingIcon?: "arrow-right";
};

type MenuItem = {
  id: string;
  label: string;
  dropdown?: {
    panelWidth: number;
    badge?: string;
    links: DropdownLink[];
  };
};

const menuItems: MenuItem[] = [
  {
    id: "news",
    label: "news",
    dropdown: {
      panelWidth: 120,
      links: [
        { label: "Markets" },
        { label: "Companies" },
        { label: "Legal" },
        { label: "Security" },
        { label: "Press release", highlighted: true, leadingIcon: "arrow-right" },
      ],
    },
  },
  {
    id: "insights",
    label: "Insights",
    dropdown: {
      panelWidth: 133,
      links: [
        { label: "Trends & Macro" },
        { label: "Predictions" },
        { label: "Opinion" },
        { label: "Comment" },
        { label: "Personal Cases" },
        { label: "Top Tier" },
      ],
    },
  },
  {
    id: "stories",
    label: "Stories",
    dropdown: {
      panelWidth: 99,
      links: [
        { label: "Lessons" },
        { label: "Successes" },
        { label: "Life style" },
      ],
    },
  },
  {
    id: "learn",
    label: "Learn",
    dropdown: {
      panelWidth: 166,
      links: [
        { label: "Crypto for Beginners" },
        { label: "Trading Basics" },
        { label: "Glossary" },
        { label: "Airdrops & Bonuses" },
        { label: "Guides & Tools" },
        { label: "History" },
      ],
    },
  },
  {
    id: "rankings",
    label: "Rankings",
    dropdown: {
      panelWidth: 124,
      badge: "Without human bias",
      links: [
        { label: "Exchanges" },
        { label: "Wallets" },
        { label: "Brokers & CFD" },
        { label: "Tokens" },
      ],
    },
  },
  {
    id: "video-podcasts",
    label: "Video&Podcasts",
  },
];

export default function Menu() {
  const authorLink = (
    <a
      href="#"
      className="flex items-center"
      style={{
        gap: 2,
        color: "#f2312d",
        fontSize: 12,
        fontWeight: 600,
        textDecoration: "none",
        textTransform: "uppercase",
        letterSpacing: "0.0713em",
        lineHeight: "18px",
      }}
    >
      Join as an Author&nbsp;
      <ArrowOutIcon color="#f2312d" size={18} />
    </a>
  );

  return (
    <nav className="menu-nav">
      <div
        className="flex items-center justify-between"
        style={{ maxWidth: 1440, margin: "0 auto", padding: "12px 20px", gap: 159 }}
      >
        {authorLink}

        <div className="menu-links">
          {menuItems.map((item) => {
            const dropdownRootWidth = item.dropdown ? item.dropdown.panelWidth + 18 : undefined;

            return (
              <div
                key={item.id}
                className={`menu-item-wrap${item.dropdown ? " has-dropdown" : ""}`}
              >
                <button
                  type="button"
                  className="menu-trigger"
                  aria-expanded={undefined}
                  aria-haspopup={item.dropdown ? "menu" : undefined}
                >
                  {item.label}
                </button>

                {item.dropdown ? (
                  <div
                    className="menu-dropdown"
                    role="menu"
                    aria-label={`${item.label} submenu`}
                    style={{ width: dropdownRootWidth }}
                  >
                    <div className="menu-dropdown-panel">
                      {item.dropdown.badge ? (
                        <div className="menu-dropdown-badge-row">
                          <span className="menu-dropdown-badge">{item.dropdown.badge}</span>
                        </div>
                      ) : null}

                      <div
                        className="menu-dropdown-list"
                        style={{ width: item.dropdown.panelWidth }}
                      >
                        {item.dropdown.links.map((link) => (
                          <button
                            key={link.label}
                            type="button"
                            className={`menu-dropdown-link${link.highlighted ? " is-highlighted" : ""}`}
                            role="menuitem"
                          >
                            {link.leadingIcon === "arrow-right" ? (
                              <ArrowRightIcon color="#161613" size={16} strokeWidth={1.7} />
                            ) : null}
                            <span>{link.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        <div style={{ opacity: 0, pointerEvents: "none" }} aria-hidden="true">
          {authorLink}
        </div>
      </div>
    </nav>
  );
}
