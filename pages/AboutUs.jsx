import React from "react";

function IcingDivider({ color = "#C7776B", width = 220 }) {
  return (
    <svg
      className="icing-divider"
      viewBox="0 0 220 24"
      width={width}
      height={24}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2 12 C 20 2, 38 2, 56 12 C 74 22, 92 22, 110 12 C 128 2, 146 2, 164 12 C 182 22, 200 22, 218 12"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconWhisk() {
  return (
    <svg viewBox="0 0 48 48" width="30" height="30" fill="none" aria-hidden="true">
      <path d="M24 6c-6 4-9 10-9 16 0 5 4 9 9 9s9-4 9-9c0-6-3-12-9-16z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M24 6v22" stroke="currentColor" strokeWidth="1.6" />
      <path d="M18 10c2 4 2 10 0 14M30 10c-2 4-2 10 0 14" stroke="currentColor" strokeWidth="1.4" />
      <path d="M24 31v9M18 40h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M17 44c2-3 5-3 7 0 2-3 5-3 7 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function IconSlice() {
  return (
    <svg viewBox="0 0 48 48" width="30" height="30" fill="none" aria-hidden="true">
      <path d="M6 34 L24 8 L42 34 Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M6 34h36v5H6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <circle cx="24" cy="18" r="1.8" fill="currentColor" />
      <circle cx="19" cy="24" r="1.8" fill="currentColor" />
      <circle cx="29" cy="24" r="1.8" fill="currentColor" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg viewBox="0 0 48 48" width="30" height="30" fill="none" aria-hidden="true">
      <path
        d="M24 41S6 29.5 6 17.8C6 11.8 10.6 8 15.6 8c3.7 0 6.9 2 8.4 5.2C25.5 10 28.7 8 32.4 8 37.4 8 42 11.8 42 17.8 42 29.5 24 41 24 41z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCupcake() {
  return (
    <svg viewBox="0 0 48 48" width="30" height="30" fill="none" aria-hidden="true">
      <path d="M14 22c0-4 4.5-7 10-7s10 3 10 7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 22h26l-3 18a4 4 0 0 1-4 3H18a4 4 0 0 1-4-3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M24 8v5M18 10l1.5 4M30 10l-1.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M14 29h20M15.5 35h17" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 3" />
    </svg>
  );
}

const VALUES = [
  {
    icon: <IconWhisk />,
    title: "Premium Ingredients",
    text: "Only real butter, real cream, and real chocolate go into every bake.",
  },
  {
    icon: <IconSlice />,
    title: "Made Fresh, Always",
    text: "Nothing sits in a freezer. Every cake is baked in small batches, close to your pickup date.",
  },
  {
    icon: <IconHeart />,
    title: "Made With Love",
    text: "No factory line, no shortcuts \u2014 just one kitchen, one baker, and a lot of care.",
  },
  {
    icon: <IconCupcake />,
    title: "Custom Creations",
    text: "Every order is designed around your flavours, your occasion, your story.",
  },
];

export default function AboutUs() {
  return (
    <div className="au-root">
      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,500&family=Homemade+Apple&family=Jost:wght@300;400;500;600&display=swap");

        .au-root {
          --cream: #FBF3EA;
          --cream-deep: #F3E4D3;
          --cocoa-900: #34241A;
          --cocoa-700: #5C4433;
          --cocoa-500: #8A6B54;
          --rose: #C7776B;
          --rose-deep: #AD5C50;
          --gold: #BE8A46;
          --line: #E4D2BB;
          --paper: #FFFDF9;

          background: var(--cream);
          color: var(--cocoa-900);
          font-family: "Jost", sans-serif;
          font-weight: 400;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        .au-root * { box-sizing: border-box; }

        .au-root h1, .au-root h2, .au-root h3 {
          font-family: "Fraunces", serif;
          color: var(--cocoa-900);
          margin: 0;
          letter-spacing: -0.01em;
        }

        .au-script {
          font-family: "Homemade Apple", cursive;
          color: var(--rose-deep);
          font-weight: 400;
          line-height: 1;
        }

        .au-eyebrow {
          font-family: "Jost", sans-serif;
          font-size: 0.72rem;
          letter-spacing: 0.28em;
          text-transform: uppercase;
          color: var(--rose-deep);
          font-weight: 600;
          margin-bottom: 1.1rem;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
        }

        .au-eyebrow::before {
          content: "";
          width: 26px;
          height: 1px;
          background: var(--rose-deep);
          display: inline-block;
        }

        .au-section {
          max-width: 1180px;
          margin: 0 auto;
          padding: 5.5rem 2rem;
        }

        /* ---------- HERO ---------- */
        .au-hero {
          position: relative;
          padding: 6.5rem 2rem 5rem;
          background:
            radial-gradient(circle at 85% 12%, rgba(199,119,107,0.10), transparent 45%),
            radial-gradient(circle at 8% 90%, rgba(190,138,70,0.10), transparent 40%),
            var(--cream);
          border-bottom: 1px solid var(--line);
        }

        .au-hero-inner {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .au-hero h1 {
          font-size: clamp(2.6rem, 6vw, 4.6rem);
          font-weight: 500;
          line-height: 1.04;
        }

        .au-hero .au-script {
          font-size: clamp(3.2rem, 8vw, 5.6rem);
          display: block;
          margin-top: 0.1rem;
        }

        .au-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin: 2.1rem auto 1.6rem;
          background: var(--cocoa-900);
          color: var(--cream);
          padding: 0.65rem 1.5rem;
          border-radius: 999px;
          font-size: 0.95rem;
          letter-spacing: 0.02em;
        }

        .au-hero-badge strong {
          color: #F3D9A8;
          font-weight: 600;
        }

        .au-hero p.au-lede {
          font-size: 1.15rem;
          color: var(--cocoa-700);
          max-width: 560px;
          margin: 1.4rem auto 0;
        }

        .au-signature {
          margin-top: 2.4rem;
          font-family: "Fraunces", serif;
          font-style: italic;
          font-size: 1.15rem;
          color: var(--cocoa-900);
        }

        .au-signature span {
          display: block;
          font-family: "Jost", sans-serif;
          font-style: normal;
          font-size: 0.72rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--cocoa-500);
          margin-top: 0.35rem;
        }

        .au-divider-wrap {
          display: flex;
          justify-content: center;
          margin: 2.6rem 0 0;
        }

        /* ---------- VALUES ---------- */
        .au-values-section {
          background: var(--paper);
          border-bottom: 1px solid var(--line);
        }

        .au-values-head {
          text-align: center;
          max-width: 620px;
          margin: 0 auto 3.2rem;
        }

        .au-values-head h2 {
          font-size: clamp(1.8rem, 3.6vw, 2.5rem);
          font-weight: 500;
        }

        .au-values-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2.4rem;
        }

        .au-value {
          text-align: center;
          padding: 0 0.5rem;
        }

        .au-value-icon {
          width: 62px;
          height: 62px;
          margin: 0 auto 1.1rem;
          border-radius: 50%;
          border: 1px solid var(--line);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--rose-deep);
          background: var(--cream);
        }

        .au-value h3 {
          font-size: 1.05rem;
          font-weight: 600;
          margin-bottom: 0.5rem;
        }

        .au-value p {
          font-size: 0.92rem;
          color: var(--cocoa-700);
          margin: 0;
        }

        /* ---------- TRAINING / STORY ---------- */
        .au-training-section {
          background: var(--cream-deep);
        }

        .au-training-grid {
          display: grid;
          grid-template-columns: 1.05fr 1fr;
          gap: 4rem;
          align-items: center;
        }

        .au-training-copy .au-eyebrow { margin-bottom: 1.2rem; }

        .au-training-copy h2 {
          font-size: clamp(1.9rem, 4vw, 2.7rem);
          font-weight: 500;
          margin-bottom: 1.4rem;
        }

        .au-training-copy p {
          color: var(--cocoa-700);
          font-size: 1.02rem;
          max-width: 480px;
        }

        .au-training-copy p + p { margin-top: 1rem; }

        .au-credential {
          margin-top: 1.8rem;
          padding-top: 1.6rem;
          border-top: 1px solid var(--line);
          font-size: 0.88rem;
          color: var(--cocoa-500);
          letter-spacing: 0.02em;
        }

        .au-credential strong {
          color: var(--cocoa-900);
          font-weight: 600;
        }

        .au-photo-stack {
          position: relative;
          height: 560px;
        }

        .au-photo {
          position: absolute;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 24px 48px -20px rgba(52, 36, 26, 0.35);
          border: 6px solid var(--paper);
        }

        .au-photo img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .au-photo-1 {
          width: 62%;
          top: 0;
          left: 0;
          height: 420px;
          z-index: 2;
        }

        .au-photo-2 {
          width: 52%;
          bottom: 0;
          right: 0;
          height: 340px;
          z-index: 3;
          transform: rotate(2deg);
        }

        .au-photo-caption {
          position: absolute;
          bottom: -1.9rem;
          left: 0;
          font-size: 0.78rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--cocoa-500);
        }

        /* ---------- CTA ---------- */
        .au-cta-section {
          background: var(--cocoa-900);
          color: var(--cream);
          text-align: center;
          padding: 5.5rem 2rem;
        }

        .au-cta-section h2 {
          color: var(--cream);
          font-size: clamp(1.9rem, 4.4vw, 3rem);
          font-weight: 500;
          max-width: 640px;
          margin: 0 auto;
        }

        .au-cta-section p {
          color: #D8C4B2;
          max-width: 480px;
          margin: 1.2rem auto 2.2rem;
        }

        .au-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: var(--gold);
          color: var(--cocoa-900);
          border: none;
          padding: 1rem 2.1rem;
          border-radius: 999px;
          font-family: "Jost", sans-serif;
          font-size: 0.95rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease;
        }

        .au-cta-btn:hover { background: #D3A25E; transform: translateY(-2px); }
        .au-cta-btn:focus-visible { outline: 2px solid var(--cream); outline-offset: 3px; }

        .au-footer {
          text-align: center;
          padding: 2.2rem;
          font-size: 0.8rem;
          letter-spacing: 0.05em;
          color: var(--cocoa-500);
          background: var(--cream);
        }

        @media (max-width: 860px) {
          .au-values-grid { grid-template-columns: repeat(2, 1fr); row-gap: 2.6rem; }
          .au-training-grid { grid-template-columns: 1fr; gap: 3.5rem; }
          .au-photo-stack { height: 460px; margin-top: 1rem; }
          .au-section { padding: 4rem 1.4rem; }
        }

        @media (prefers-reduced-motion: reduce) {
          .au-cta-btn { transition: none; }
        }
      `}</style>

      {/* ---------- HERO ---------- */}
      <section className="au-hero">
        <div className="au-hero-inner">
          <span className="au-eyebrow">Our Story</span>
          <h1>
            Every Cake Is
            <span className="au-script">100% Homemade</span>
          </h1>
          <div className="au-hero-badge">
            No factory. No shortcuts. <strong>Just one home kitchen.</strong>
          </div>
          <p className="au-lede">
            Every dessert here starts on a home stovetop, not a factory line \u2014 a
            blend of creativity, honest ingredients, and a whole lot of love,
            baked in small batches by hand.
          </p>
          <div className="au-signature">
            Chef Shivali
            <span>Pastry Chef &amp; Baker</span>
          </div>
          <div className="au-divider-wrap">
            <IcingDivider />
          </div>
        </div>
      </section>

      {/* ---------- VALUES ---------- */}
      <section className="au-values-section">
        <div className="au-section">
          <div className="au-values-head">
            <span className="au-eyebrow" style={{ justifyContent: "center" }}>What Makes It Homemade</span>
            <h2>Baked the way it should be</h2>
          </div>
          <div className="au-values-grid">
            {VALUES.map((v) => (
              <div className="au-value" key={v.title}>
                <div className="au-value-icon">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TRAINING / BEHIND THE SCENES ---------- */}
      <section className="au-training-section">
        <div className="au-section au-training-grid">
          <div className="au-training-copy">
            <span className="au-eyebrow">Behind Every Bake</span>
            <h2>Trained hands, home kitchen heart</h2>
            <p>
              Long before an order reaches your table, it starts with practice \u2014
              hours spent perfecting batters, folds, and piping until every
              detail feels effortless.
            </p>
            <p>
              That discipline never left the home kitchen. It only made the
              homemade cakes more precise, without losing what makes them
              homemade: care, patience, and a personal touch on every order.
            </p>
            <div className="au-credential">
              Trained at <strong>CakeUnkle Academy of Pastry Arts</strong>,
              bringing professional pastry technique back to a home kitchen.
            </div>
          </div>
          <div className="au-photo-stack">
            <div className="au-photo au-photo-1">
              <img src='/images/chef1.jpeg' alt="Chef Shivali mixing batter by hand in the kitchen" />
            </div>
            <div className="au-photo au-photo-2">
              <img src='/images/chef2.jpeg' alt="Chef Shivali piping choux pastry with precision" />
            </div>
            <span className="au-photo-caption" style={{ left: "2%", bottom: "-2.2rem" }}>
              01 \u2014 Mixing, by hand
            </span>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="au-cta-section">
        <h2>Ready to taste something homemade?</h2>
        <p>Every cake is baked to order, just for you \u2014 no shelf, no freezer, no rush.</p>
          <a href="https://wa.me/c/919306117358">
        <button className="au-cta-btn" type="button">
          Get in Touch
        </button>
          </a>
      </section>

      <footer className="au-footer">
        Chef Shivali \u00b7 Home Baked, Always
      </footer>
    </div>
  );
}
