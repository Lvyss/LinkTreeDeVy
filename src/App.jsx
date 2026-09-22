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
    icon: "mail",
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

  if (name === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5" width="18" height="14" rx="3" />
        <path d="M4 7l8 6 8-6" />
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
