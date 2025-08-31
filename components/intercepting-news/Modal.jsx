// File: components/intercepting-news/Modal.jsx

"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const Modal = ({ children }) => {
  const modalRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    if (!modalRef.current?.open) {
      modalRef.current?.showModal();
    }
  }, []);

  const onDismiss = () => {
    router.back();
  };

  return (
    <div
      className="fixed inset-0 bg-black/70 z-40 backdrop-blur-sm animate-fade-in"
      onClick={onDismiss}
    >
      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.1s ease-out forwards;
        }
      `}</style>

      <dialog
        ref={modalRef}
        onClose={onDismiss}
        onClick={(e) => e.stopPropagation()}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50
                   w-full max-w-5xl h-full max-h-[85vh] 
                   bg-gray-50 text-gray-800 rounded-xl shadow-2xl m-0 p-0 overflow-hidden
                   dark:bg-gray-900 dark:text-gray-200"
      >
        <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 p-8 md:p-12">
          {children}
        </div>
        <button
          onClick={onDismiss}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-500 bg-white/50 backdrop-blur-sm hover:bg-gray-200 dark:bg-gray-800/50 dark:hover:bg-gray-700 transition-all duration-200"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
          <span className="sr-only">Close modal</span>
        </button>
      </dialog>
    </div>
  );
};

export default Modal;
