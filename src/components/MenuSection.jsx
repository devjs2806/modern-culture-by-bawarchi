"use client";

import { useState } from "react";
import { menuCover, pageLabels, menuSpreads } from "../../data/menuData";

function Section({ section }) {
  return (
    <>
      <div
        className="page-section-head"
        style={section.marginTop ? { marginTop: section.marginTop } : undefined}
      >
        {section.head}
        {section.note && <span className="section-note">{section.note}</span>}
      </div>
      {section.intro && (
        <div className="book-item" style={{ padding: "0.8rem 0" }}>
          <div className="book-item-desc" style={{ fontSize: "12px", color: "var(--text-muted)" }}>
            {section.intro}
          </div>
        </div>
      )}
      {section.items.map((item, i) => (
        <div className="book-item" key={i}>
          <div className="book-item-row">
            <span className="book-item-name">{item.name}</span>
            {item.price && <span className="book-item-price">{item.price}</span>}
          </div>
          {item.desc && <div className="book-item-desc">{item.desc}</div>}
        </div>
      ))}
    </>
  );
}

function BookPage({ page, side }) {
  return (
    <div className={`book-page active ${side}-page`}>
      {page.sections.map((section, i) => (
        <Section section={section} key={i} />
      ))}
      {page.footer && (
        <div style={{ marginTop: "auto", paddingTop: "1.5rem", textAlign: "center" }}>
          <div style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", color: "var(--green-dark)", letterSpacing: "0.08em" }}>
            {page.footer.title}
          </div>
          <div style={{ fontFamily: "var(--font-ui)", fontSize: "9px", letterSpacing: "0.3em", color: "var(--text-muted)", marginTop: "0.3rem" }}>
            {page.footer.sub}
          </div>
        </div>
      )}
      <div className="book-page-num">{page.pageNum}</div>
    </div>
  );
}

export default function MenuSection() {
  const [currentPage, setCurrentPage] = useState(0);
  const [flipping, setFlipping] = useState(false);
  const [flipDir, setFlipDir] = useState(null);
  const [nextPage, setNextPage] = useState(null);

  const totalPages = menuSpreads.length + 1;

  const getSpread = (idx) => {
    if (idx === 0) return null;
    return menuSpreads[idx - 1];
  };

  const turnPage = (dir) => {
    if (flipping) return;
    const next = currentPage + dir;
    if (next < 0 || next >= totalPages) return;

    setNextPage(next);
    setFlipDir(dir > 0 ? "next" : "prev");
    setFlipping(true);

    setTimeout(() => {
      setCurrentPage(next);
      setFlipping(false);
      setFlipDir(null);
      setNextPage(null);
    }, 700);
  };

  const isCover = currentPage === 0;
  const spread = getSpread(currentPage);
  const nextSpread = nextPage !== null ? getSpread(nextPage) : null;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .book-scene {
          perspective: 2500px;
          width: 100%;
          position: relative;
        }

        .book-stage {
          position: relative;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: var(--parchment);
          border: 1px solid rgba(212,176,96,0.3);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 4px 20px rgba(0,0,0,0.3);
          overflow: visible;
        }

        .book-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 100;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          border: 1.5px solid rgba(212,176,96,0.6);
          background: rgba(45,74,56,0.92);
          backdrop-filter: blur(8px);
          color: var(--gold-light);
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          outline: none;
        }
        .book-arrow:hover:not(:disabled) {
          background: var(--gold);
          border-color: var(--gold);
          color: var(--green-dark);
          transform: translateY(-50%) scale(1.1);
        }
        .book-arrow:disabled {
          opacity: 0.2;
          cursor: default;
        }
        .book-arrow-left  { left: -28px; }
        .book-arrow-right { right: -28px; }

        .book-stage::after {
          content: '';
          position: absolute; top: 0; bottom: 0; left: 50%;
          width: 2px;
          background: linear-gradient(to bottom, rgba(58,90,70,0.08), rgba(58,90,70,0.25), rgba(58,90,70,0.08));
          box-shadow: 0 0 8px rgba(0,0,0,0.15);
          pointer-events: none; z-index: 10;
        }

        .book-half {
          position: relative;
          height: 750px;
          overflow: hidden;
        }

        .book-half.left-half  { background: var(--parchment); }
        .book-half.right-half { background: #f7f2e2; }

        .book-cover-full {
          grid-column: 1 / -1;
        }

        /* ── Flipping leaf ── */
        .flip-leaf {
          position: absolute;
          top: 0;
          height: 100%;
          width: 50%;
          z-index: 50;
          transform-style: preserve-3d;
        }

        .flip-leaf.flip-next {
          right: 0;
          transform-origin: left center;
          animation: leafFlipNext 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955) forwards;
        }

        .flip-leaf.flip-prev {
          left: 0;
          transform-origin: right center;
          animation: leafFlipPrev 0.7s cubic-bezier(0.455, 0.030, 0.515, 0.955) forwards;
        }

        @keyframes leafFlipNext {
          0%   { transform: rotateY(0deg); }
          100% { transform: rotateY(-180deg); }
        }

        @keyframes leafFlipPrev {
          0%   { transform: rotateY(0deg); }
          100% { transform: rotateY(180deg); }
        }

        .leaf-face {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          overflow-y: auto;
          overflow-x: hidden;
        }

        .leaf-front {
          background: #f7f2e2;
          transform: rotateY(0deg);
        }

        .leaf-back {
          background: var(--parchment);
          transform: rotateY(180deg);
        }

        .leaf-face::after {
          content: '';
          position: absolute;
          top: 0; bottom: 0;
          width: 30%;
          background: linear-gradient(to left, rgba(0,0,0,0.18), transparent);
          pointer-events: none;
          z-index: 5;
        }

        .leaf-front::after { right: 0; }
        .leaf-back::after {
          right: auto; left: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.18), transparent);
        }
      `}} />

      <section className="menu-wrap" id="menu">
        <div className="menu-header-area fade-up">
          <span className="section-label">Cafe · Dine-In · Pure Veg</span>
          <h2 className="section-title">The Menu</h2>
          <div className="gold-divider"><span className="gold-divider-icon">✦</span></div>
        </div>

        <div className="booklet-outer fade-up">
          <div className="book-scene">
            <button
              className="book-arrow book-arrow-left"
              onClick={() => turnPage(-1)}
              disabled={currentPage === 0 || flipping}
              aria-label="Previous page"
            >
              ‹
            </button>
            <button
              className="book-arrow book-arrow-right"
              onClick={() => turnPage(1)}
              disabled={currentPage === totalPages - 1 || flipping}
              aria-label="Next page"
            >
              ›
            </button>
            <div className="book-stage" id="booklet">

              {isCover && !flipping ? (
                <div className="book-half book-cover-full" style={{ display: "flex", height: 750 }}>
                  <div className="book-cover" style={{ width: "100%" }}>
                    <div className="cover-border">
                      <div className="cover-sub">{menuCover.sub}</div>
                      <div className="cover-title">{menuCover.title}</div>
                      <div className="cover-divider" />
                      <div className="cover-tagline">{menuCover.tagline}</div>
                      <div style={{ marginTop: "0.5rem", fontFamily: "var(--font-ui)", fontSize: "10px", letterSpacing: "0.2em", color: "rgba(212,220,215,0.4)" }}>
                        {menuCover.note}
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* LEFT page — static behind */}
                  <div className="book-half left-half">
                    {flipping && flipDir === "prev" && nextSpread
                      ? <BookPage page={nextSpread.left} side="left" />
                      : spread
                        ? <BookPage page={spread.left} side="left" />
                        : null
                    }
                  </div>

                  {/* RIGHT page — static behind */}
                  <div className="book-half right-half">
                    {flipping && flipDir === "next" && nextSpread
                      ? <BookPage page={nextSpread.right} side="right" />
                      : spread
                        ? <BookPage page={spread.right} side="right" />
                        : null
                    }
                  </div>

                  {/* FLIPPING LEAF — overlaid, animates */}
                  {flipping && (
                    <div className={`flip-leaf flip-${flipDir}`}>
                      <div className="leaf-face leaf-front">
                        {flipDir === "next" && spread &&
                          <BookPage page={spread.right} side="right" />
                        }
                        {flipDir === "prev" && nextSpread &&
                          <BookPage page={nextSpread.left} side="left" />
                        }
                      </div>
                      <div className="leaf-face leaf-back">
                        {flipDir === "next" && nextSpread &&
                          <BookPage page={nextSpread.left} side="left" />
                        }
                        {flipDir === "prev" && spread &&
                          <BookPage page={spread.right} side="right" />
                        }
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          <div className="booklet-nav">
            <button
              className="booklet-btn"
              onClick={() => turnPage(-1)}
              disabled={currentPage === 0 || flipping}
            >
              ← Previous
            </button>
            <span className="booklet-page-indicator">
              {pageLabels[currentPage]}
            </span>
            <button
              className="booklet-btn"
              onClick={() => turnPage(1)}
              disabled={currentPage === totalPages - 1 || flipping}
            >
              Next →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}