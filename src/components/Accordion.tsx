"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItemProps {
  question: string;
  answer: string;
  isLast?: boolean;
}

function AccordionItem({ question, answer, isLast }: AccordionItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={isLast ? "" : "border-b border-[#0B3D2E]"}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-6 flex items-center justify-between gap-4 text-left cursor-pointer group"
      >
        <h3 className="text-lg font-bold text-white group-hover:text-[#7ED957] transition-colors duration-200">
          {question}
        </h3>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="text-[#7ED957] text-2xl flex-shrink-0 leading-none"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="text-sm text-[#9CA3AF] leading-relaxed pb-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

export default function Accordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <AccordionItem
          key={i}
          question={item.question}
          answer={item.answer}
          isLast={i === items.length - 1}
        />
      ))}
    </div>
  );
}
