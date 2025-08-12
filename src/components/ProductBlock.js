export default function ProductBlock() {
  return (
    <section className="container my-4">
      <div className="product-block image-left" style={{lineHeight:"50px", paddingLeft: "30px"}}>
        <div className="product-block-body">
            <h2>Car Insurance</h2><h3>Find the cheapest car insurance rates.</h3><p style={{lineHeight:"26px"}}>Did you know car insurance rates can vary widely from one provider to the next? By comparing quotes from multiple companies, you can easily see if you’re still getting the best rate on your auto insurance. Compare quotes, benefits, and discounts offered by each provider, and choose the policy that suits your budget and needs.</p>
                <form className="cta-forms " method="GET" action="/insurance-quotes/auto" target="_top">
                    <div className="has-text-centered">
                <button type="submit" className="button-css " aria-label="submit form">Learn More</button>
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
                <button type="submit" className="button-css " aria-label="submit form">Learn More</button>
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
            <h2>Mortgage Rates</h2><h3>Find today’s best mortgage rates in one place.</h3><p style={{lineHeight:"26px"}}>With rates always changing, knowing that you have the best mortgage rate is top priority for Canadians. We publish competing mortgage rates from a wide variety of brokers and financial institutions so you can easily compare today’s lowest mortgage rates and filter your results by the mortgage type and term to get the best mortgage product for your needs. Once you've landed on a mortgage rate that you want, get connected directly with that mortgage provider to secure your rate.</p>
                <form className="cta-forms " method="GET" action="/insurance-quotes/auto" target="_top">
                    <div className="has-text-centered">
                <button type="submit" className="button-css " aria-label="submit form">Learn More</button>
            </div>
            </form>
        </div>
    </div>
      {/* <div className="product-block image-left" style={{lineHeight:"50px", paddingLeft: "30px", marginTop:"50px"}}>
        <div className="product-block-body">
            <h2>Business Insurance</h2><h3>Secure the best business insurance rate.</h3><p style={{lineHeight:"26px"}}>Whether you are a contractor or an owner of a larger operation with multiple people under you, it’s never a bad idea to get yourself insured, or, if you already are insured, to compare your rates to what’s already out there. Rates.ca makes this very easy. All you need to do is enter a few details about your business, and a quote will appear right in front of you.</p>
                <form className="cta-forms " method="GET" action="/insurance-quotes/auto" target="_top">
                    <div className="has-text-centered">
                <button type="submit" className="button-css " aria-label="submit form">Learn More</button>
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
