export default function CustomSection() {
  return (
    <section className="section stream-field my-4 py-4">
      <div className="container rich_text-block text-center">
        <p
          style={{
            fontSize: "20px",
            marginBottom: "30px",
          }}
          className="custom-text"
        >
          <strong>"مواسا"</strong> به شما کمک می‌کند تا نرخ‌های ارائه‌دهندگان بیشتری را با هم مقایسه کنید.
        </p>

        <div className="logo-grid">
          <img src="/Logofile-2.jpg" alt="بیمه مرکزی" />
          <img src="/لوگو-بیمه-ایران.png" alt="بیمه ایران" />
          <img src="/images.png" alt="بیمه آسیا" />
          <img src="/RLg1000051www.tiktarh.com_.jpg" alt="بیمه ما" />
          <img src="/images (1).png" alt="بیمه پارسیان" />
          <img src="/بیمه-دی-کرج.jpg" alt="بیمه دی" />
        </div>
      </div>

      <style jsx>{`
        .logo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 20px;
          justify-items: center;
          align-items: center;
        }

        .logo-grid img {
          height: 60px;
          width: auto;
          object-fit: contain;
        }

        /* موبایل و تبلت: 3 تا 3 تا */
        @media (max-width: 1200px) {
          .logo-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
          }
          .custom-text {
            font-size: 18px;
          }
        }

        @media (max-width: 576px) {
          .logo-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 12px;
          }
          .custom-text {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
}
