"use client"
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqs = [
  {
    question: "How does the AI image generation work?",
    answer: "Our AI analyzes your text prompts and uses advanced machine learning models (like Stable Diffusion and custom LoRAs) to generate unique, high-quality images that match your description."
  },
  {
    question: "Can I use the images for commercial projects?",
    answer: "Yes! If you are subscribed to our Pro or Enterprise plans, you own full commercial rights to all images you generate."
  },
  {
    question: "What happens to my unused credits?",
    answer: "For monthly subscriptions, credits rollover for up to one month. On the Enterprise plan, credits are unlimited."
  },
  {
    question: "Do you offer API access?",
    answer: "Yes, API access is available on our Enterprise plan for integrating our generation engine into your own applications."
  },
  {
    question: "Is my payment information secure?",
    answer: "Absolutely. We use Stripe for payment processing, and we never store your credit card information on our servers."
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-10 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-500 text-base">
          Got questions? We&apos;ve got answers.
        </p>
      </div>

      <div className="flex flex-col gap-1">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className="border-b border-gray-200 pb-4 last:border-b-0"
          >
            <button 
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center py-4 text-left font-bold text-lg hover:text-gray-700 transition-colors focus:outline-none"
            >
              <div className="flex items-center gap-4 pl-4">
                 {faq.question}
              </div>
              <div className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                 {openIndex === index ? <FaMinus size={14} /> : <FaPlus size={14} />}
              </div>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <p className="text-gray-600 leading-relaxed pl-4 pb-4 text-sm md:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
