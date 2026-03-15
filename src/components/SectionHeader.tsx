export default function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-between" style={{ borderBottom: "1px dashed #161613", paddingBottom: 8, gap: 16 }}>
      <span style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.0833em", color: "#161613", lineHeight: "18px" }}>
        {title}
      </span>
      <button
        type="button"
        className="font-ui"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
          border: "none",
          backgroundColor: "#EFEFEA",
          color: "#F2312D",
          padding: "3px 2px",
          cursor: "pointer",
          lineHeight: "18px",
        }}
      >
        <span style={{ fontSize: 14, fontWeight: 400 }}>View all</span>
        <span style={{ fontSize: 14, fontWeight: 400 }}>»</span>
      </button>
    </div>
  );
}
