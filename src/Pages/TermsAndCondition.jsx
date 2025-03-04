const TermsAndConditions = () => {
  const termsAndConditions = [
    {
      section: "Introduction",
      details: [
        "Welcome to Shopque Nest LLP! By accessing and using our website, you agree to comply with the following terms and conditions.",
        "These terms govern your use of the site, your purchases, and any services we provide.",
        "Please read through this page carefully before using our website.",
        "If you do not agree with any part of these terms, kindly refrain from using our services.",
      ],
    },
    {
      section: "1. General Information",
      details: [
        "Shopque Nest LLP ('we,' 'us,' or 'our') is a leading online platform that provides pet care products ranging from pet food and grooming essentials to toys and accessories.",
        "By using our website, you confirm that you are at least 18 years old or are using the site under the supervision of a parent or guardian.",
        "We may update these terms at any time, and any changes will be reflected on this page with an updated 'last revised' date.",
        "By continuing to use our website, you accept any updates to the terms.",
      ],
    },
    {
      section: "2. Account Registration & Security",
      details: [
        "To enhance your shopping experience, you may need to create an account on our website.",
        "When registering, you agree to provide accurate, complete, and up-to-date information.",
        "You are responsible for keeping your account details, such as username and password, secure, and for all activities that occur under your account.",
        "If you believe your account has been compromised or if there are any unauthorized activities, please contact us right away.",
        "You also agree to inform us if you notice any issues related to your account security.",
      ],
    },
    {
      section: "3. Product Availability & Pricing",
      details: [
        "While we strive to ensure that all product descriptions, prices, and availability are accurate, there may be occasional errors, updates, or changes without notice.",
        "We reserve the right to modify or correct any pricing or availability details on the site, and such changes may occur at any time.",
        "In the event of a mistake regarding the price or availability of a product you've purchased, we will notify you promptly and offer you the option to cancel or amend your order.",
        "If we are unable to fulfill your order due to such issues, we will issue a full refund.",
      ],
    },
    {
      section: "4. Order Acceptance & Cancellation",
      details: [
        "After placing an order on our website, you will receive an order confirmation via email.",
        "However, please note that this does not guarantee that the order has been accepted.",
        "We reserve the right to cancel or refuse any order at our discretion, including in cases of pricing errors, product unavailability, or payment issues.",
        "If we cancel your order, we will notify you as soon as possible, and you will receive a full refund for any payments made.",
      ],
    },
    {
      section: "5. Payment Methods",
      details: [
        "We offer various payment methods, including credit cards, debit cards, and other payment options available at checkout.",
        "By submitting payment details, you confirm that you are authorized to use the payment method and that the information you provide is accurate.",
        "Payments are processed securely through trusted third-party providers.",
        "We encourage you to review their terms of service and privacy policies as they apply in addition to our own.",
      ],
    },
    {
      section: "6. Shipping & Delivery",
      details: [
        "We provide both standard and expedited shipping options.",
        "Shipping costs and delivery times will be calculated at checkout based on the shipping method you select and your location.",
        "Please note that delivery times may vary depending on the product's availability and the carrier.",
        "Once your order ships, you will receive a tracking number.",
        "While we do our best to ensure timely delivery, we are not responsible for delays caused by third-party shipping carriers or other factors beyond our control, such as weather conditions.",
      ],
    },
    {
      section: "7. Returns & Exchanges",
      details: [
        "We want you to be completely satisfied with your purchase.",
        "If for any reason you're not happy with your order, we offer a 30-day return and exchange policy.",
        "The product must be returned in its original, unused condition, with the packaging intact.",
        "To initiate a return or exchange, please contact our customer support team with your order number, and they will guide you through the process.",
        "Please note that shipping fees are non-refundable, and the cost of returning the item may be your responsibility unless the product is defective or incorrect.",
        "Certain items, including perishable goods or personalized products, may not be eligible for return.",
      ],
    },
    {
      section: "8. Product Warranties & Disclaimers",
      details: [
        "While we aim to offer high-quality products, we do not provide warranties beyond those offered by the manufacturers, where applicable.",
        "We are not liable for damages caused by misuse, improper handling, or failure to follow the care instructions provided with the products.",
        "We are also not responsible for any incidental or consequential damages arising from the use or inability to use our products.",
      ],
    },
    {
      section: "9. User-Generated Content",
      details: [
        "By submitting product reviews, comments, or any other type of content to our website, you grant Shopque Nest LLP a non-exclusive, perpetual, royalty-free license to use, display, and distribute that content for business purposes.",
        "You agree that any content submitted is original and free from any infringement of intellectual property rights or offensive material.",
        "We reserve the right to remove any content that violates these terms or is deemed inappropriate by us, without notice.",
      ],
    },
    {
      section: "10. Intellectual Property Rights",
      details: [
        "All content available on our website, including but not limited to images, graphics, logos, trademarks, product descriptions, and text, is owned by Shopque Nest LLP or licensed to us and is protected by intellectual property laws.",
        "You may not use, reproduce, or distribute any content from our website without our express written permission.",
      ],
    },
    {
      section: "11. Limitation of Liability",
      details: [
        "To the maximum extent permitted by law, Shopque Nest LLP is not liable for any indirect, incidental, special, or consequential damages, including loss of profits, arising from your use of our website or the products purchased through it.",
        "Our total liability, in any case, will not exceed the total amount paid for the product(s) in question.",
      ],
    },
    {
      section: "12. Governing Law & Dispute Resolution",
      details: [
        "These terms and conditions are governed by the laws of [Insert Country/State].",
        "Any disputes that arise in connection with these terms will be resolved through binding arbitration, not through court proceedings, except for certain cases where litigation is required.",
        "By agreeing to these terms, you waive any rights to participate in class action lawsuits or class-wide arbitration.",
      ],
    },
    {
      section: "13. Privacy Policy",
      details: [
        "Your use of our website and services is also subject to our [Privacy Policy](insert link), which outlines how we collect, use, and protect your personal information.",
        "We encourage you to read our Privacy Policy for a better understanding of how we handle your data.",
      ],
    },
    {
      section: "14. Termination of Access",
      details: [
        "We reserve the right to suspend or terminate your access to our website or services at any time if we believe you have violated these Terms and Conditions.",
        "Upon termination, your ability to use our website will immediately cease, and any outstanding payments for products or services will still be due.",
      ],
    },
    {
      section: "15. Contact Us",
      details: [
        "If you have any questions, concerns, or comments regarding these Terms and Conditions, please don't hesitate to reach out to us:",
        "Email: support@ShopqueNestLLP.com",
        "Phone: [Insert Phone Number]",
        "Mailing Address: [Insert Company Address]",
      ],
    },
    {
      section: "Closing Statement",
      details: [
        "Thank you for shopping with Shopque Nest LLP!",
        "By using our website, you agree to adhere to these Terms and Conditions.",
        "We are committed to providing you and your pets with the best products and services possible.",
      ],
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Terms & Conditions</h1>
      <div className="space-y-6">
        {termsAndConditions.map((term, index) => (
          <div key={index} className="border-b pb-4">
            <h2 className="text-xl font-semibold mb-2">{term.section}</h2>
            <ul className="list-disc pl-5 space-y-2">
              {term.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
