import React from "react";

const BetterRateSection = () => {
  return (
    <section className="better-rate-section">
      {/* بخش سمت چپ قرمز */}
      <div className="left-box">
        <h2>لورم ایپسوم</h2>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
          استفاده از طراحان گرافیک است...
        </p>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
          استفاده از طراحان گرافیک است...
        </p>
      </div>

      {/* بخش سمت راست سفید */}
      <div className="right-box">
        <h3>لورم ایپسوم</h3>
        <span className="big-number">50+</span>
        <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم</span>
      </div>

      <style jsx>{`
        .better-rate-section {
          display: flex;
          align-items: center;
          min-height: 300px;
          margin-bottom: 20px;
        }

        .left-box {
          background-color: #dd3127;
          color: white;
          flex: 2;
          padding: 2rem 3rem;
        }

        .left-box h2 {
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .left-box p {
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .right-box {
          flex: 1;
          clip-path: ellipse(100% 60% at 100% 50%);
          background-color: white;
          padding: 8.64rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-top-left-radius: 50% 100%;
          border-bottom-left-radius: 50% 100%;
          box-sizing: border-box;
          text-align: center;
        }

        .right-box h3 {
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .big-number {
          font-size: 3rem;
          font-weight: 900;
          color: #dd3127;
          margin-bottom: 0.3rem;
          line-height: 1;
        }

        /* ریسپانسیو */
        @media (max-width: 900px) {
          .better-rate-section {
            flex-direction: column;
            text-align: center;
          }

          .right-box {
            clip-path: none;
            border-radius: 0;
            padding: 3rem 2rem;
          }

          .left-box {
            padding: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default BetterRateSection;
