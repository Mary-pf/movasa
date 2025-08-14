import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BoxContent() {
  const creditCards = [
    { label: "لورم ایپسوم", name: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
    { label: "لورم ایپسوم", name: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
    { label: "لورم ایپسوم", name: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
    { label: "لورم ایپسوم", name: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
    { label: "لورم ایپسوم", name: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ" },
  ];

  return (
    <div
      className="paragraph paragraph--type--best-of-finance paragraph--view-mode--default"
      style={{
        marginBottom: "90px",
    background: "linear-gradient(180deg, #DF3226 -8.4%, #DF3226 14.07%, #CE0F69 112.4%)",
        width: "100%",
      }}
    >
      <div className="container best-of-finance-inner py-5">
        <div className="bof-heading text-center text-white mb-4">
          <h2 className="fw-bold">مشتریان حقوقی ما</h2>
          <p className="mb-0">
            پیدا کردن کارت اعتباری که با سبک زندگی و عادات خرج کردن شما مطابقت داشته باشد، می‌تواند دلهره‌آور باشد. گزینه‌های زیادی برای انتخاب وجود دارد و هیچ‌کس وقت کافی برای جزئیات ریز ندارد - خب، هیچ‌کس جز ما.
          </p>
        </div>

        <div className="p-3 p-md-5 bg-white rounded">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 }, // دسکتاپ همیشه 3 کارت
            }}
          >
            {creditCards.map((card, idx) => (
              <SwiperSlide key={idx}>
                <div className="d-flex flex-column gap-2 p-3 bg-light rounded h-100">
                  <div>
                    <span className="badge bg-danger mb-2">{card.label}</span>
                    <p className="mb-0">{card.name}</p>
                  </div>
                  <button className="btn btn-dark mt-auto">اطلاعات بیشتر</button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="text-center mt-3">
            <button className="btn btn-outline-danger">اطلاعات بیشتر</button>
          </div>
        </div>
      </div>
    </div>
  );
}
