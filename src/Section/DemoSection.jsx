import React, { useState } from "react";

const faqs = [
  {
    question: "What is MasterClass?",
    answer: `MasterClass is the streaming platform that makes it possible for anyone to watch or listen to hundreds of video lessons taught by 200+ of the world's best.
    Whether it be in business and leadership, photography, cooking, writing, acting, music, sports and more, MasterClass delivers a world-class online learning experience. Video lessons are available anytime, anywhere on your smartphone, personal computer, Apple TV and FireTV streaming media players.`,
  },
  {
    question: "What is included in a MasterClass membership?",
    answer: `A MasterClass membership gives you access to all classes and new classes as they launch. Each class includes around 20 lessons, at an average of 10 minutes per lesson, along with an in-depth workbook.`,
  },
  {
    question: "Where can I watch?",
    answer: `You can watch MasterClass on your smartphone, desktop, laptop, or TV via Apple TV, Roku, and FireTV streaming devices.`,
  },
  {
    question: "Which classes are right for me?",
    answer: `All classes are designed to be accessible to learners of all levels. Whether you’re a beginner or advanced, you’ll find classes that match your interests and skill level.`,
  },
];

export default function DemoSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-screen bg-black">
      <div className="max-w-2xl mx-auto p-6 bg-black text-white">
        <h2 className="text-2xl font-bold text-center mb-6">
          Frequently asked questions
        </h2>
        <div className="space-y-3">
          <span>General</span>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-800 hover:bg-gray-700 transition"
              >
                <span className="text-left font-medium">{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-4 py-3 bg-gray-900 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="space-y-3 mt-5">
          <span>Pricing and Payment</span>

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg overflow-hidden cursor-pointer"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 bg-gray-800 hover:bg-gray-700 transition"
              >
                <span className="text-left font-medium">{faq.question}</span>
                <span className="text-xl">
                  {openIndex === index ? "▲" : "▼"}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-4 py-3 bg-gray-900 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
