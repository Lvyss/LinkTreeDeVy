import { useEffect, useState } from "react";

const LINKS = [
  {
    label: "Instagram",
    sub: "Portfolio, behind the scenes, services",
    href: "https://www.instagram.com/de.vyyy27/",
    icon: "instagram",
  },
  {
    label: "TikTok",
    sub: "Cinematic Magic Chess content",
    href: "https://www.tiktok.com/@de.vyyy",
    icon: "tiktok",
  },
  {
    label: "YouTube",
    sub: "Tutorials, breakdowns, stories",
    href: "https://www.youtube.com/@De.Vy277",
    icon: "youtube",
  },
  {
    label: "Business inquiries",
    sub: "Editing, endorsements, collaborations",
    href: "https://wa.me/+6283176520691",
    icon: "whatsapp",
  },
];

function Icon({ name }) {
  var common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  if (name === "instagram") {
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "tiktok") {
    return (
      <svg {...common}>
        <path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5" />
        <path d="M14 3c0.5 2.5 2 4 4.5 4.3" />
      </svg>
    );
  }

  if (name === "youtube") {
    return (
      <svg {...common}>
        <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
        <path d="M10.5 9.5l5 2.5-5 2.5z" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (name === "whatsapp") {
    return (
      <svg {...common}>
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.87 9.87 0 004.79 1.22h.004c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0012.04 2zm0 18.15h-.003a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 012.41 5.82c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z" />
      </svg>
    );
  }

  return null;
}

function LinkItem(props) {
  var isExternal = props.href.indexOf("http") === 0;
  return (
    <a
      className="devy-link"
      href={props.href}
      target={isExternal ? "_blank" : undefined}
      rel="noopener"
    >
      <span className="devy-link-icon">
        <Icon name={props.icon} />
      </span>
      <span className="devy-link-text">
        <span className="devy-link-label">{props.label}</span>
        <span className="sub">{props.sub}</span>
      </span>
    </a>
  );
}

export default function DeVyLinkPage() {
  const [ready, setReady] = useState(false);

  useEffect(function () {
    var t = setTimeout(function () {
      setReady(true);
    }, 100);
    return function () {
      clearTimeout(t);
    };
  }, []);

  var pageClass = ready ? "devy-page devy-ready" : "devy-page";

  return (
    <div className="devy-root">
      <div className="devy-glow"></div>
      <div className={pageClass}>
        <div className="devy-emblem-wrap devy-fade d1">
          <img className="devy-emblem" src="assets/logo.png" alt="De' Vy" />
        </div>

        <h1 className="devy-wordmark devy-fade d1">De' Vy</h1>

        <p className="devy-tagline devy-fade d2">
          From what is broken,
          <br />
          we compose the story.
        </p>

        <div className="devy-divider devy-fade d2"></div>

        <nav className="devy-links devy-fade d3">
          {LINKS.map(function (item) {
            return (
              <LinkItem
                key={item.label}
                label={item.label}
                sub={item.sub}
                href={item.href}
                icon={item.icon}
              />
            );
          })}
        </nav>

        <div className="devy-footer devy-fade d4">
          <p>A creative house built on Magic Chess.</p>
          <p>Family: 01 — growing, one fox at a time.</p>
        </div>
      </div>
    </div>
  );
}
