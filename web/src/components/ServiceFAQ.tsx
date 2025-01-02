import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, cloud solutions, cybersecurity, and performance optimization."
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on complexity and scope. A typical web development project might take 8-12 weeks, while a mobile app could take 12-16 weeks."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer various support and maintenance packages to ensure your digital solutions continue to perform optimally after launch."
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile methodology with regular client communication. This includes discovery, planning, design, development, testing, and deployment phases."
  }
];

export function ServiceFAQ() {
  return (
    <section className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}