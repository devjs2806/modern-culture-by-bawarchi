export default function ShowcaseSection({
  id,
  image,
  label,
  title,
  text,
  reverse,
}) {
  return (
    <section
      id={id}
      className={`showcase-section ${reverse ? "reverse" : ""}`}
    >
      {/* IMAGE SIDE */}
      <div className="showcase-image-wrap">
        <img
          src={image}
          alt={title}
          className="showcase-image"
        />

        {/* GOLD FRAME */}
        <div className="image-frame" />

        {/* IMAGE GLOW */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "34px",
            background:
              "radial-gradient(circle at center, rgba(224,188,114,0.10), transparent 60%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* CONTENT CARD */}
      <div className="royal-card">
        <p className="section-label">
          {label}
        </p>

        <h2>
          {title}
        </h2>

        <p>
          {text}
        </p>

        {/* GOLD DIVIDER */}
        <span className="gold-line" />

        {/* SMALL DETAIL */}
        <div
          style={{
            marginTop: "28px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            color: "#cdbda4",
            fontSize: "14px",
            letterSpacing: "2px",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: "36px",
              height: "1px",
              background: "#e0bc72",
            }}
          />

          Premium Hospitality
        </div>
      </div>
    </section>
  );
}