import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export default function BoxContent() {
      const creditCards = [
    {
      label: "Best Rewards Card",
      name: "American Express Cobalt® Credit Card",
    },
    {
      label: "Best Travel Card",
      name: "CIBC Aventura® Visa Infinite* Card",
    },
    {
      label: "Best Travel Card With No Foreign Transaction Fees",
      name: "Scotiabank® Gold American Express® Card",
    },
    {
      label: "Best Card for Earning Travel Points",
      name: "American Express Cobalt® Credit Card",
    },
    {
      label: "Best Balance Transfer Credit Card",
      name: "MBNA True Line Mastercard",
    },
  ];
  return (
<div className="paragraph paragraph--type--best-of-finance paragraph--view-mode--default" style={{marginBottom:"90px"}}>
            <div className="snippet snippet-accordion_snippet snippet- best_of_finance-block">
    <div className="container best-of-finance-inner">
        <div className="bof-heading">
            <div className="rich-text">
                <h2><strong>مشتریان حقوقی ما</strong></h2><p>پیدا کردن کارت اعتباری که با سبک زندگی و عادات خرج کردن شما مطابقت داشته باشد، می‌تواند دلهره‌آور باشد. گزینه‌های زیادی برای انتخاب وجود دارد و هیچ‌کس وقت کافی برای جزئیات ریز ندارد - خب، هیچ‌کس جز ما. تیم ما بیش از 80 کارت اعتباری را در 20 دسته برای بهترین ارزشی بررسی کرد تا از حدس و گمان برای خرید کارت جدید جلوگیری کند.</p><p>در دسته‌بندی‌های زیر جستجو کنید، یا برای مشاهده لیست کامل برندگان جایزه بهترین کارت‌های اعتباری 2025 اینجا کلیک کنید.
                 </p>
            </div>
        </div>
         <div className="p-4 bg-white rounded mb-5">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
        >
          {creditCards.map((card, idx) => (
            <SwiperSlide key={idx}>
              <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded mb-2">
                <div>
                  <span className="badge bg-danger me-2">{card.label}</span>
                  {card.name}
                </div>
                <button className="btn btn-dark">اطلاعات بیشتر</button>
              </div>
              <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded mb-2">
                <div>
                  <span className="badge bg-danger me-2">{card.label}</span>
                  {card.name}
                </div>
                <button className="btn btn-dark">اطلاعات بیشتر</button>
              </div>
              <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded mb-2">
                <div>
                  <span className="badge bg-danger me-2">{card.label}</span>
                  {card.name}
                </div>
                <button className="btn btn-dark">اطلاعات بیشتر</button>
              </div>
              <div className="d-flex align-items-center justify-content-between p-3 bg-light rounded mb-2">
                <div>
                  <span className="badge bg-danger me-2">{card.label}</span>
                  {card.name}
                </div>
                <button className="btn btn-dark">اطلاعات بیشتر</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="text-center mt-3">
          <button className="btn btn-outline-danger">Full list of winners</button>
        </div>
      </div>
                     {/* <div  className="winner-item">
                <div  className="winner-container">
                    <div  className="mobile-winner-top">
                        <div className="winner-name-container">
                                                                                <img src="/sites/default/files/Cobalt-219x138.width-500.png" className="icon-image" alt="" width="92" height="57" loading="lazy"/>
                                                <div className="name-container">
                            <div className="reward-name">
                                <div className="rich-text">
                                    <p>Best Rewards Card</p>
                                </div>
                            </div>
                            <div className="winner-name">
                                American Express Cobalt® Credit Card
                            </div>
                        </div>
                    </div>
                      
                        <div  className="card-link">
                            <a  className="card-anchor" href="https://rates.ca/credit-cards" title="Best Rewards Card" tabIndex="0">
                                <i  className="icon-RDOT_Icon_Arrow_Right_Chevron" aria-hidden="true"></i>
                            </a>
                        </div>
                    </div>
                    <div  className="winner-name-container">
                                                                                <img src="/sites/default/files/Cobalt-219x138.width-500.png"  className="icon-image" alt="" width="92" height="57" loading="lazy"/>
                                                <div  className="name-container">
                            <div  className="reward-name">
                                <div  className="rich-text">
                                    <p>Best Rewards Card</p>
                                </div>
                            </div>
                            <div  className="winner-name">
                                American Express Cobalt® Credit Card
                            </div>
                        </div>
                    </div>
                                            <div  className="cta-container">
                                <form  className="cta-forms " method="GET" action="credit-cards" target="_top">
                    <div  className="has-text-centered">
                <button type="submit"  className="button-css " aria-label="submit form" tabIndex="0">اطلاعات بیشتر</button>
            </div>
            



                    </form>





                        </div>
                                    </div>
            </div> */}
      </div>
           </div>   
  </div>
  );
}
