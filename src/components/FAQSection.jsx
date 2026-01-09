import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiX } from 'react-icons/fi';

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0); // First one open by default as in image

  const faqs = [
    {
      question: "What is the application process?",
      answer: [
        "Click on Apply Now.",
        "Fill in all required details and upload all necessary documents like government ID proof.",
        "Upload 3 pictures (close-up, mid-shot, full length).",
        "Pay the application fees of XXXX/-."
      ]
    },
    {
      question: "What are the requirements?",
      answer: ["Must be 18+ years old (18 as on 1 Jan 2026)",
        "Must be a female as per ID Proof", "Nationality: Indian, NRI, or OCI.", "State registration proof", "Should be unmarried and unengaged."]
    },
    {
      question: "What is the fee?",
      answer: ["The fee is XXXX/-"]
    },
    {
      question: "Do I need to have past modelling/pageant experience?",
      answer: ["No, at FashionTV we welcome, with open arms, anyone who is passionate about pageants and is willing to learn from industry experts and mentors to propel their career to the international level."]
    }
  ];

  return (
    <section className="bg-black py-24 px-6 flex flex-col items-center">
      {/* 1. Header Area */}
      <div className="text-center mb-16">
        <h5 className="text-[#A3845F] tracking-[0.2em] text-sm md:text-md mb-4 font-bold uppercase grotesk-medium">
          FAQ'S
        </h5>
        <h2 className="text-[1.6rem] md:text-7xl max-w-5xl font-black  obviously uppercase leading-none bg-gradient-to-r from-[#F3BC83] via-[#A68059] via-[38%] to-[#3E4755] bg-clip-text text-transparent pb-4">
          Frequently <br className='md:hidden'/> Asked Questions
        </h2>
        <p className="text-[#BFBFBF] text-sm md:text-2xl mt-8 max-w-2xl mx-auto grotesk-roman leading-relaxed">
          F-Pageants is a platform for India's most dynamic, poised, <br className="hidden md:block" />
          and radiant women.
        </p>
      </div>

      {/* 2. Accordion Container */}
      <div className="w-full max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#0D0D0D] border border-white/5 rounded-lg overflow-hidden transition-colors duration-300"
          >
            {/* Question Header */}
            <button
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              className="w-full flex justify-between items-center p-6 text-left group"
            >
              <span className="text-[#A3845F]  text-[16px] md:text-2xl grotesk-roman">
                {faq.question}
              </span>
              <div className="text-[#A3845F] text-xl">
                {openIndex === index ? <FiX /> : <FiPlus />}
              </div>
            </button>

            {/* Answer Content (Animated) */}
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-8 pt-2">
                    <ul className="space-y-3">
                      {Array.isArray(faq.answer) ? faq.answer.map((item, i) => (
                        <li key={i} className="flex gap-3 text-[#BFBFBF] text-xs md:text-sm grotesk-roman leading-relaxed">
                          {/* Manually added dash matches your reference image better */}
                          <span className="shrink-0 text-[#BFBFBF]">●</span>
                          <span>{item}</span>
                        </li>
                      )) : (
                        <p className="text-gray-400 text-[14px] md:text-sm grotesk-roman leading-relaxed">
                          {faq.answer}
                        </p>
                      )}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;