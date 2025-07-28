import React from "react";
import { Plus, X } from "lucide-react";

const FAQ = ({ expandedFAQ, setExpandedFAQ, faqs }) => {
  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  return (
    <div className="space-y-4 sm:space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-4 sm:mb-6">
        FAQS
      </h2>

      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.id}
            className="border border-[var(--border-light)] rounded-lg bg-[var(--bg-primary)]"
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left hover:bg-[var(--gray-50)] transition-colors duration-200"
            >
              <span className="font-bold text-[var(--text-primary)] text-sm sm:text-lg pr-2">
                {faq.question}
              </span>
              {expandedFAQ === faq.id ? (
                <X size={18} className="text-[var(--text-primary)] flex-shrink-0" />
              ) : (
                <Plus size={18} className="text-[var(--text-primary)] flex-shrink-0" />
              )}
            </button>

            {expandedFAQ === faq.id && (
              <div className="px-4 sm:px-6 pb-3 sm:pb-4 border-t border-[var(--border-light)]">
                <p className="text-[var(--text-primary)] mt-3 sm:mt-4 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;