export default function CustomSection() {
  return (
    <section className="section stream-field my-4 py-4">
      <div className="container rich_text-block text-center">
        <p style={{ fontSize: "20px", marginBottom: "30px" }}>
          <strong>"مواسا"</strong> به شما کمک می‌کند تا نرخ‌های ارائه‌دهندگان بیشتری را با هم مقایسه کنید.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(6, auto)",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src="/Logofile-2.jpg" alt="بیمه مرکزی" height={60} />
          <img src="/لوگو-بیمه-ایران.png" alt="بیمه ایران" height={60} />
          <img src="/images.png" alt="بیمه آسیا" height={60} />
          <img src="/RLg1000051www.tiktarh.com_.jpg" alt="بیمه ما" height={60} />
          <img src="/images (1).png" alt="بیمه پارسیان" height={60} />
          <img src="/بیمه-دی-کرج.jpg" alt="بیمه دی" height={60} />
        </div>
      </div>
    </section>
  );
}
