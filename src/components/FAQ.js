import { useState } from "react";

const faqs = [
  {
    question: "لورم ایپسوم",
    answer:
"بهترین قیمت، کاری هوشمندانه است - ما این کار را آسان‌تر می‌کنیم",
  },
  {
    question: "لورم ایپسوم",
    answer:
"بهترین قیمت، کاری هوشمندانه است - ما این کار را آسان‌تر می‌کنیم",
  },
  {
    question: "لورم ایپسوم",
    answer:
"بهترین قیمت، کاری هوشمندانه است - ما این کار را آسان‌تر می‌کنیم",
  },
  {
    question: "لورم ایپسوم",
    answer:
"بهترین قیمت، کاری هوشمندانه است - ما این کار را آسان‌تر می‌کنیم",
  },
  {
    question: "لورم ایپسوم",
    answer:
"بهترین قیمت، کاری هوشمندانه است - ما این کار را آسان‌تر می‌کنیم",
  },
  {
    question: "لورم ایپسوم",
    answer:
"بهترین قیمت، کاری هوشمندانه است - ما این کار را آسان‌تر می‌کنیم",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container" dir="rtl">
      <div className="faq-intro">
        <h5 style={{fontWeight:"bold"}}>خرید با بهترین قیمت، کاری هوشمندانه است - ما این کار را آسان‌تر می‌کنیم</h5>
        <p style={{fontSize:"14px"}}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.</p>
        <img
          src="/ratesbot.svg"
          alt="Robot mascot"
          className="faq-image"
        />
      </div>

      <div className="faq-list">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleIndex(idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-answer-${idx}`}
              id={`faq-question-${idx}`}
            >
              <span>{faq.question}</span>
              <span className="faq-icon">{openIndex === idx ? "−" : "+"}</span>
            </button>
            {openIndex === idx && (
              <div
                id={`faq-answer-${idx}`}
                className="faq-answer"
                role="region"
                aria-labelledby={`faq-question-${idx}`}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <style jsx>{`
        .faq-container {
          max-width: 900px;
          margin: 3rem auto;
          display: flex;
          gap: 2rem;
          align-items: flex-start;
          flex-wrap: wrap;
          padding: 0 1rem;
        }
        .faq-intro {
          flex: 1 1 35%;
          min-width: 280px;
          // font-family: Arial, sans-serif;
        }
        .faq-intro h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .faq-intro p {
          font-size: 1.2rem;
          line-height: 1.4;
          margin-bottom: 2rem;
        }
        .faq-image {
          width: 100%;
          max-width: 280px;
          height: auto;
          object-fit: contain;
          user-select: none;
        }
        .faq-list {
          flex: 1 1 60%;
          min-width: 300px;
        }
        .faq-item {
          border-bottom: 1px solid #ddd;
        }
        .faq-question {
          width: 100%;
          padding: 1rem;
          background: none;
          border: none;
          text-align: left;
          font-weight: 600;
          font-size: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
        }
        .faq-question:hover {
          background-color: #f9f9f9;
        }
        .faq-icon {
          font-size: 1.5rem;
          color: #cc0000;
          font-weight: bold;
          user-select: none;
        }
        .faq-answer {
          padding: 1rem;
          font-size: 0.95rem;
          line-height: 1.5;
          background-color: #fff;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .faq-container {
            flex-direction: column;
            max-width: 100%;
          }
          .faq-intro,
          .faq-list {
            flex: 1 1 100%;
            min-width: auto;
          }
          .faq-image {
            max-width: 100%;
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
