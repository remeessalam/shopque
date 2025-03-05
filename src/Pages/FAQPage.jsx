import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import SectionHeader from "../Components/SectionHeader";

function FAQPage() {
  const [openIndex, setOpenIndex] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const faqItems = [
    {
      question: "What types of products do you offer?",
      answer: (
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Food: Consider your pet&apos;s age, size, breed, and any special
              dietary needs. If you&apos;re not sure, our customer service team
              is available to help you choose the best food for your pet.
            </li>
            <li>
              Toys & Accessories: Select toys based on your pet&apos;s size and
              activity level. High-energy dogs might love fetch toys, while
              smaller pets or cats may prefer interactive puzzles or soft toys.
            </li>
            <li>
              Grooming Products: Choose based on your pet&apos;s coat type.
              Long-haired pets might need specialized brushes, while those with
              sensitive skin may benefit from gentle, hypoallergenic shampoos.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "How do I know which products are best for my pet?",
      answer: (
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Food: Consider your pet&apos;s age, size, breed, and any special
              dietary needs. If you&apos;re not sure, our customer service team
              is available to help you choose the best food for your pet.
            </li>
            <li>
              Toys & Accessories: Select toys based on your pet&apos;s size and
              activity level. High-energy dogs might love fetch toys, while
              smaller pets or cats may prefer interactive puzzles or soft toys.
            </li>
            <li>
              Grooming Products: Choose based on your pet&apos;s coat type.
              Long-haired pets might need specialized brushes, while those with
              sensitive skin may benefit from gentle, hypoallergenic shampoos.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Do you offer free shipping?",
      answer: (
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Food: Consider your pet&apos;s age, size, breed, and any special
              dietary needs. If you&apos;re not sure, our customer service team
              is available to help you choose the best food for your pet.
            </li>
            <li>
              Toys & Accessories: Select toys based on your pet&apos;s size and
              activity level. High-energy dogs might love fetch toys, while
              smaller pets or cats may prefer interactive puzzles or soft toys.
            </li>
            <li>
              Grooming Products: Choose based on your pet&apos;s coat type.
              Long-haired pets might need specialized brushes, while those with
              sensitive skin may benefit from gentle, hypoallergenic shampoos.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "How long does it take for my order to be delivered?",
      answer: (
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Food: Consider your pet&apos;s age, size, breed, and any special
              dietary needs. If you&apos;re not sure, our customer service team
              is available to help you choose the best food for your pet.
            </li>
            <li>
              Toys & Accessories: Select toys based on your pet&apos;s size and
              activity level. High-energy dogs might love fetch toys, while
              smaller pets or cats may prefer interactive puzzles or soft toys.
            </li>
            <li>
              Grooming Products: Choose based on your pet&apos;s coat type.
              Long-haired pets might need specialized brushes, while those with
              sensitive skin may benefit from gentle, hypoallergenic shampoos.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "What should I do if I receive a damaged or incorrect product?",
      answer: (
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Food: Consider your pet&apos;s age, size, breed, and any special
              dietary needs. If you&apos;re not sure, our customer service team
              is available to help you choose the best food for your pet.
            </li>
            <li>
              Toys & Accessories: Select toys based on your pet&apos;s size and
              activity level. High-energy dogs might love fetch toys, while
              smaller pets or cats may prefer interactive puzzles or soft toys.
            </li>
            <li>
              Grooming Products: Choose based on your pet&apos;s coat type.
              Long-haired pets might need specialized brushes, while those with
              sensitive skin may benefit from gentle, hypoallergenic shampoos.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Can I return or exchange an item?",
      answer: (
        <>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Food: Consider your pet&apos;s age, size, breed, and any special
              dietary needs. If you&apos;re not sure, our customer service team
              is available to help you choose the best food for your pet.
            </li>
            <li>
              Toys & Accessories: Select toys based on your pet&apos;s size and
              activity level. High-energy dogs might love fetch toys, while
              smaller pets or cats may prefer interactive puzzles or soft toys.
            </li>
            <li>
              Grooming Products: Choose based on your pet&apos;s coat type.
              Long-haired pets might need specialized brushes, while those with
              sensitive skin may benefit from gentle, hypoallergenic shampoos.
            </li>
          </ul>
        </>
      ),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <SectionHeader section="FAQs" />
      <div className="min-h-screen bg-white p-4 md:p-8">
        <div className="wrapper">
          <div className="grid md:grid-cols-2 gap-8">
            {/* FAQ Section */}
            <div>
              <h1 className="text-2xl font-bold mb-6">
                Frequently Asked Questions
              </h1>
              <div className="space-y-4">
                {faqItems.map((item, index) => (
                  <div
                    key={index}
                    className="border rounded-lg overflow-hidden"
                  >
                    <button
                      className={`w-full flex items-center justify-between p-4 text-left ${
                        openIndex === index
                          ? "bg-[#CB8037] text-white"
                          : "bg-white"
                      }`}
                      onClick={() =>
                        setOpenIndex(openIndex === index ? -1 : index)
                      }
                    >
                      <span>{item.question}</span>
                      {openIndex === index ? (
                        <FaMinus className="w-5 h-5" />
                      ) : (
                        <FaPlus className="w-5 h-5" />
                      )}
                    </button>
                    {openIndex === index && (
                      <div className="p-4 bg-white">{item.answer}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#F7E99E] p-6 rounded-lg h-fit">
              <h2 className="text-lg font-semibold mb-2">
                Don&apos;t find your answer, Ask for support.
              </h2>
              <p className="text-sm text-gray-600 mb-6">
                If you have any questions or need help, our customer service
                team is always here to assist. You can get in touch with us
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Email address"
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CD8F5C]"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CD8F5C]"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message (Optional)"
                    rows={4}
                    className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#CD8F5C]"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#CB8037] text-white px-6 py-3 rounded flex items-center justify-center hover:bg-[#B67D4A] transition-colors"
                >
                  SEND MESSAGE
                  <span className="ml-2">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FAQPage;
