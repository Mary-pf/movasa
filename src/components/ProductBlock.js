export default function ProductBlock() {
  return (
    <section className="container my-4 product-section" dir="rtl">
      <div className="product-block">
        <div className="product-block-image">
          <img src="/Car.png" alt="Car Insurance" />
        </div>
        <div className="product-block-body">
          <h4>بیمه خودرو</h4>
          <h6>ارزان‌ترین نرخ بیمه خودرو را پیدا کنید</h6>
          <p>
            آیا می‌دانستید که نرخ بیمه خودرو می‌تواند از یک ارائه دهنده دیگر بسیار متفاوت باشد؟ ...
          </p>
          <form method="GET" action="/insurance-quotes/auto" target="_top">
            <div className="has-text-centered">
              <button type="submit" className="button-css">اطلاعات بیشتر</button>
            </div>
          </form>
        </div>
      </div>

      <div className="product-block">
        <div className="product-block-image">
          <img src="/Mortgage Rates 1 (1).png" alt="Mortgage" />
        </div>
        <div className="product-block-body">
          <h4>سرمایه‌گذاری و مشارکت</h4>
          <h6>بهترین نرخ‌های وام ممکن امروز را در یک مکان بیابید</h6>
          <p>
            با توجه به اینکه نرخ‌ها همیشه در حال تغییر هستند، دانستن اینکه بهترین نرخ وام مسکن ...
          </p>
          <form method="GET" action="/insurance-quotes/auto" target="_top">
            <div className="has-text-centered">
              <button type="submit" className="button-css">اطلاعات بیشتر</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
