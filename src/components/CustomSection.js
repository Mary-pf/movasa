export default function CustomSection() {
  return (
    <section className="section stream-field my-4 py-4">
      <div className="container rich_text-block">
        <div className="columns rich-text-block">
          <div className="column">
            <div className="custom-1 row">
              <div className="item-wrapper">
                <div className="item-content">
                  <img
                    src="https://rates.ca/sites/default/files/2025-06/google.png"
                    alt="Google Rating"
                    width={394}
                    height={66}
                    loading="lazy"
                  />
                  <div className="item-text">
                    <strong>Rated 4.6+ on Google. </strong>Join thousands of happy customers.
                  </div>
                </div>
                <div className="divider">&nbsp;</div>
              </div>

              <div className="item-wrapper">
                <div className="item-content">
                  <img
                    src="https://rates.ca/sites/default/files/2025-06/canadian%20flag.png"
                    alt="Canadian Trust"
                    width={116}
                    height={112}
                    loading="lazy"
                  />
                  <div className="item-text">
                    <strong>We've found the best personalized rates for 1+ million Canadians. </strong>
                    When can we help you find yours?
                  </div>
                </div>
                <div className="divider">&nbsp;</div>
              </div>

              <div className="item-wrapper">
                <div className="item-content">
                  <a
                    href="https://rates.ca/insurance-companies"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-block" }}
                  >
                    <img
                      src="https://rates.ca/sites/default/files/2025-06/logos.png"
                      alt="Top-rated Providers"
                      width={116}
                      height={20}
                      loading="lazy"
                      style={{ display: "block", marginBottom: "10px" }}
                    />
                  </a>
                  <div className="item-text">
                    <strong>Partnered with Canada's most trusted names </strong>
                    for coverage you can rely on.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
