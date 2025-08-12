"use client";

export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center"
        onClick={onClose}
        tabIndex={-1}
        onKeyDown={(e) => {
          if (e.key === "Escape") onClose();
          // Focus trap را می‌تونیم اضافه کنیم در صورت نیاز
        }}
      >
        <div
          className="bg-white rounded-md shadow-lg max-w-md w-full p-6 relative"
          onClick={(e) => e.stopPropagation()}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-heading"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-2xl font-bold text-gray-600 hover:text-gray-900"
            aria-label="Close modal"
          >
            &times;
          </button>
          <div id="modal-heading" className="text-xl font-semibold mb-4">
            Let's get started
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
