import React from "react";

const BetterRateSection = () => {
  return (
    <section style={{ display: "flex", alignItems: "center", minHeight: "300px", marginBottom: "20px" }}>
      {/* بخش سمت چپ قرمز */}
      <div style={{
        backgroundColor: "#dd3127",
        color: "white",
        flex: 2,
        padding: "2rem 3rem",
      }}>
        <h2 style={{ fontWeight: "600", marginBottom: "1rem" }}>A better rate is waiting</h2>
        <h3 style={{ fontWeight: "700", marginBottom: "1rem" }}>Find it faster with Rates.ca</h3>
        <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
          With easy-to-use, flexible online tools that let you search the market, you can compare the best rates on insurance, mortgages and credit cards in Canada.
        </p>
        <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
          In just a few clicks you’ll be matched with a wide range of quotes from Canada’s top providers – the names you know and trust – empowering you to make the right decision for your life and budget.
        </p>
        <p style={{ lineHeight: "1.6" }}>
          Just as easy as it is to search for a hotel on a comparison website, you can now do the same for your car or home insurance, your mortgage, and the credit cards in your wallet.
        </p>
      </div>

      {/* بخش سمت راست سفید */}
      <div style={{ backgroundColor: "#DF3226" }}>
  <div
    style={{
      flex: 1,
      clipPath: "ellipse(100% 60% at 100% 50%)",
      backgroundColor: "white", // این شکل سفید باقی می‌مونه
      padding: "8.64rem 2.5rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      borderTopLeftRadius: "50% 100%",
      borderBottomLeftRadius: "50% 100%",
      boxSizing: "border-box",
      
    }}
  >

        <h3 style={{ fontWeight: "700", marginBottom: "0.5rem" }}>
          More providers than anyone else
        </h3>
        <span style={{ fontSize: "3rem", fontWeight: "900", color: "#dd3127", marginBottom: "0.3rem", lineHeight: "1" }}>
          50+
        </span>
        <span>insurance companies alone!</span>
      </div>
      </div>
    </section>
  );
};

export default BetterRateSection;
