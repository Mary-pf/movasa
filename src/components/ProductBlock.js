export default function ProductBlock() {
  return (
    <section className="container my-4" dir="rtl">
      <div className="product-block image-left" style={{lineHeight:"50px", paddingLeft: "30px"}}>
        <div className="product-block-body">
            <h4>بیمه خودرو</h4><h6>ارزان‌ترین نرخ بیمه خودرو را پیدا کنید</h6><p style={{lineHeight:"26px"}}>آیا می‌دانستید که نرخ بیمه خودرو می‌تواند از یک ارائه دهنده دیگر بسیار متفاوت باشد؟ با مقایسه قیمت‌ها از چندین شرکت، می‌توانید به راحتی ببینید که آیا هنوز بهترین نرخ را برای بیمه خودرو خود دریافت کنید یا خیر. قیمت‌ها، مزایا و تخفیف‌های ارائه شده توسط هر ارائه دهنده را مقایسه کنید و بیمه‌نامه‌ای را انتخاب کنید که متناسب با بودجه و نیازهای شما باشد</p>
                <form className="cta-forms " method="GET" action="/insurance-quotes/auto" target="_top">
                    <div className="has-text-centered">
                <button type="submit" className="button-css " aria-label="submit form">اطلاعات بیشتر</button>
            </div>
            </form>
        </div>
        <div className="product-block-image">
            <img src="/Car.png" alt="Car Insurance" />
        </div>
    </div>
      {/* <div className="product-block image-left" style={{lineHeight:"50px", paddingLeft: "30px", marginTop:"50px"}}>
        <div className="product-block-body">
            <h2>Home Insurance</h2><h3>Get the cheapest property insurance rates.</h3><p style={{lineHeight:"26px"}}>Whether you are a homeowner, condo owner or a tenant, it’s never a bad idea to compare your current property insurance premiums to those offered by the competition. Rates.ca makes this super-easy. All you need to do is enter a few details about your property, then watch those rates pour in. If you’re happy with your current rate, great. If not, we can connect you with a provider right away.</p>
                <form className="cta-forms " method="GET" action="/insurance-quotes/auto" target="_top">
                    <div className="has-text-centered">
                <button type="submit" className="button-css " aria-label="submit form">اطلاعات بیشتر</button>
            </div>
            </form>
        </div>
    </div> */}
        {/* <div className="product-block-image">
            <img src="/Home Insurance 1 (1).png" alt="Car Insurance" />
        </div> */}
      <div className="product-block image-left" style={{lineHeight:"50px", paddingLeft: "30px", marginTop:"30px"}}>
        <div className="product-block-image">
            <img src="/Mortgage Rates 1 (1).png" alt="Car Insurance" />
        </div>
        <div className="product-block-body">
            <h4>سرمایه‌گذاری و مشارکت</h4><h6>بهترین نرخ‌های وام ممکن امروز را در یک مکان بیابید</h6><p style={{lineHeight:"26px"}}>با توجه به اینکه نرخ‌ها همیشه در حال تغییر هستند، دانستن اینکه بهترین نرخ وام مسکن دا دارید، اولویت اصلی کانادایی‌ها است. ما نرخ‌های وام مسکن رقابتی را از  طیف گسترده‌ای از کارگران و موسسات مالی منتشر می‌کنیم تا بتوانید به راحتی پایین‌ترین نرخ‌های وام مسکن امروز را مقایسه کنید و نتایج خود را براساس نوع و مدت وام مسکن فیلتر کنید تا بهترین محصول وام مسکن را برای نیازهای خود دریافت کنید. هنگامی که نرخ وام مسکن موردنظر خود را پیدا کردید، مستقیما با آن ارائه دهنده وام مسکن ارتباط برقرار کنید تا نرخ خود را تضمین کنید.</p>
                <form className="cta-forms " method="GET" action="/insurance-quotes/auto" target="_top">
                    <div className="has-text-centered">
                <button type="submit" className="button-css " aria-label="submit form">اطلاعات بیشتر</button>
            </div>
            </form>
        </div>
    </div>
      {/* <div className="product-block image-left" style={{lineHeight:"50px", paddingLeft: "30px", marginTop:"50px"}}>
        <div className="product-block-body">
            <h2>Business Insurance</h2><h3>Secure the best business insurance rate.</h3><p style={{lineHeight:"26px"}}>Whether you are a contractor or an owner of a larger operation with multiple people under you, it’s never a bad idea to get yourself insured, or, if you already are insured, to compare your rates to what’s already out there. Rates.ca makes this very easy. All you need to do is enter a few details about your business, and a quote will appear right in front of you.</p>
                <form className="cta-forms " method="GET" action="/insurance-quotes/auto" target="_top">
                    <div className="has-text-centered">
                <button type="submit" className="button-css " aria-label="submit form">اطلاعات بیشتر</button>
            </div>
            </form>
        </div>
    </div>
     <div className="product-block-image" style={{marginBottom: "68px", marginTop:"30px"}}>
            <img src="/Business Insurance (2).png" alt="Car Insurance" />
        </div> */}
    </section>
  );
}
