type IconProps = {
  color?: string;
  size?: number;
  strokeWidth?: number;
};

export function ArrowOutIcon({
  color = "currentColor",
  size = 18,
  strokeWidth = 2,
}: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M7 17L17 7M17 7H10M17 7v7"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowRightIcon({
  color = "currentColor",
  size = 16,
  strokeWidth = 1.8,
}: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M2.5 8h10M8.5 4l4 4-4 4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ChevronDownIcon({
  color = "currentColor",
  size = 16,
  strokeWidth = 2,
}: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m6 9 6 6 6-6"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SearchIcon({
  color = "currentColor",
  size = 20,
  strokeWidth = 2,
}: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7.5" stroke={color} strokeWidth={strokeWidth} />
      <path
        d="m20 20-3.5-3.5"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MenuIcon({
  color = "currentColor",
  size = 20,
  strokeWidth = 2,
}: IconProps) {
  return (
    <svg width={size} height={15} viewBox="0 0 20 15" fill="none" aria-hidden="true">
      <path d="M0 1h20M0 7.5h20M0 14h20" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function ReadIcon({
  color = "#161613",
  size = 16,
}: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 1.75h5.2L12.75 5.3V14H4V1.75Z"
        stroke={color}
        strokeWidth="1.15"
        strokeLinejoin="round"
      />
      <path d="M9 1.75v3.5h3.5" stroke={color} strokeWidth="1.15" strokeLinejoin="round" />
      <path d="M6 8h4.5M6 10.5h4.5" stroke={color} strokeWidth="1.05" strokeLinecap="round" />
    </svg>
  );
}

export function HeadphonesIcon({
  color = "#161613",
  size = 16,
  strokeWidth = 1.5,
}: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3.333 8a4.667 4.667 0 1 1 9.334 0"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
      <rect x="2" y="8" width="2.5" height="4.5" rx="1" stroke={color} strokeWidth={strokeWidth} />
      <rect x="11.5" y="8" width="2.5" height="4.5" rx="1" stroke={color} strokeWidth={strokeWidth} />
    </svg>
  );
}

export function TickerUpIcon({
  color = "#00881B",
  size = 16,
  strokeWidth = 2,
}: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M4 11.5 11.5 4M11.5 4H7.5M11.5 4v4"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function TickerDownIcon({
  color = "#F2312D",
  size = 16,
  strokeWidth = 2,
}: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="m4 4.5 7.5 7.5M11.5 12H7.5M11.5 12V8"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
