import { useState, useEffect, useRef } from "react";

export default function PostalCodeModal() {
  const [postalCode, setPostalCode] = useState("");
  const [error, setError] = useState("");
  const [modalActive, setModalActive] = useState(false);
  const modalRef = useRef(null);

  const openModal = (e) => {
    e.preventDefault();
    setModalActive(true);
  };
  const closeModal = () => setModalActive(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postalCode.trim().toUpperCase().startsWith("B")) {
      setError("We do not operate in this province.");
      return;
    }
    setError("");
    alert(`Form submitted with postal code: ${postalCode}`);
    closeModal();
  };

  useEffect(() => {
    if (!modalActive) return;

    const modal = modalRef.current;
    if (!modal) return;

    const focusableElementsSelector =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabIndex]:not([tabIndex="-1"])';
    const focusableElements = modal.querySelectorAll(focusableElementsSelector);
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (event) => {
      if (event.key === "Escape" || event.key === "Esc") {
        closeModal();
        event.preventDefault();
      }

      if (event.key === "Tab") {
        if (focusableElements.length === 0) {
          event.preventDefault();
          return;
        }
        if (event.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    modal.addEventListener("keydown", handleKeyDown);

    firstElement?.focus();

    return () => {
      modal.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalActive]);

  return (
    <>
      <div className="container">
        <div className="box-container">
          <div className="split-row">
            <div className="image-column">
              <img
                src="/RDOT-022_2020_Image_Woman_10445594.2e16d0ba.fill-800x400.jpg"
                alt="A professional woman sends a message on her phone while working in front of her laptop in a mixed outdoor workspace"
                className="responsive-image"
              />
            </div>
            <div className="text-column" dir="rtl">
              <h4>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
              </h4>
              <p>
               لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. 
              </p>
              <p>
چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. 
              </p>
              <p>
کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
              </p>
              <p>
در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
              </p>

              <button className="button-css button-css-red" onClick={openModal}>
دریافت نقل قول
              </button>
            </div>
          </div>
        </div>

        {modalActive && (
          <div
            id="dymanic-modal-postal-code-auto-insurance---lowest-rates"
            className={`modal ${modalActive ? "active" : ""}`}
            tabIndex={-1}
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-heading"
          >
            <div
              className="modal-background"
              onClick={closeModal}
              aria-hidden="true"
            ></div>
            <div className="modal-card">
              <div className="modal-card-body">
                <div id="modal-heading" className="modal-heading">
                  Let's get started
                </div>
                <div className="modal-body">
                  <form onSubmit={handleSubmit} noValidate>
                    <div
                      id="error-message"
                      className={`error-message ${error ? "error-visible" : ""}`}
                      role="alert"
                    >
                      {error}
                    </div>
                    <br />
                    <h4>Please enter your postal code</h4>
                    <input
                      id="postal-code-input"
                      name="postal_code"
                      type="text"
                      className="input-css uppercase"
                      placeholder="Postal Code"
                      pattern="[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy][0-9][ABCEGHJKLMNPRSTVWXYZabceghjklmnprstvwxyz] ?[0-9][ABCEGHJKLMNPRSTVWXYZabceghjklmnprstvwxyz][0-9]"
                      title="Example: A1A1A1"
                      aria-label="Input Postal Code"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value.toUpperCase())}
                      required
                      autoFocus
                    />
                    <button
                      id="submitBtn"
                      type="submit"
                      className="button-css"
                      aria-disabled={!!error}
                    >
                      Get Quotes
                    </button>
                    <input type="hidden" name="displayBrand" value="ratesdotca" />
                  </form>
                </div>
              </div>
            </div>
            <button
              className="modal-close is-large"
              aria-label="close"
              onClick={closeModal}
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </>
  );
}
