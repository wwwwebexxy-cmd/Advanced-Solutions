"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

const answers = [
  "Yes. Our team reviews your requirement and guides you through the applicable process and documentation.",
  "Processing time depends on the service, authority and individual case. Contact our team for a case-specific estimate.",
  "Yes. You can contact our team through WhatsApp to share your initial requirement and available documents.",
];

export function FaqSection({ questions }: { questions: string[] }) {
  const [open, setOpen] = useState<number | null>(null);
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((question, index) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answers[index % answers.length],
      },
    })),
  };

  return (
    <section className="section soft">
      <div className="container center">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
        <div className="eyebrow">— FAQ</div>
        <h2 className="title">Frequently Asked Questions</h2>
        <div className="faq">
          {questions.map((question, index) => {
            const isOpen = open === index;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={question}>
                <button className="faq-q" type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : index)}>
                  <span>{question}</span><ChevronDown size={19} />
                </button>
                <div className="faq-a"><span>{answers[index % answers.length]}</span></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
