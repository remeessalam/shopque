import SectionHeader from "../Components/SectionHeader";

const PrivacyPolicy = () => {
  const privacyPolicySections = [
    {
      id: 1,
      title: "Information We Collect",
      content:
        "When you use our website or place an order, we collect information to enhance your experience and ensure smooth transactions. Here's what we collect in two categories:",
      subsections: [
        {
          title: "Personal Information:",
          items: [
            "Account Details: If you create an account, we gather basic details like your name, email address, phone number, and shipping address.",
            "Order Information: When you make purchases, we collect details such as your payment information, shipping address, and the products you've ordered.",
            "Customer Service Communications: We store records of your customer support issues, as they could include personal information.",
          ],
        },
        {
          title: "Non-Personal Information:",
          items: [
            "Website Usage: We collect data on your visitors' interact with our site, including pages visited, time spent on the site, and browsing patterns. This helps us improve the overall user experience.",
            "Cookies and Other Tracking Technologies: We use cookies and similar technologies to enhance your experience by remembering your preferences and settings, and to analyze how customers navigate through your Internet channel.",
          ],
        },
      ],
    },
    {
      id: 2,
      title: "How We Use Your Information",
      content:
        "We use the information you provide to provide a more personalized and efficient shopping experience. Here's how we use your data:",
      subsections: [
        {
          title: "",
          items: [
            "Order Fulfillment: We use your contact and payment details to process your orders and ensure prompt delivery.",
            "Customer Support: Your information helps us respond to your questions or concerns you might have about our products or services.",
            "Personalization: We analyze your browsing and purchase behavior to suggest products and promotions that might interest you.",
            "Marketing: With your permission, we may send you promotional emails about new products, special offers, and other updates.",
            "Website Improvement: We use non-personal data to improve our website's functionality, making your shopping experience more efficient and enjoyable.",
          ],
        },
      ],
    },
    {
      id: 3,
      title: "How We Share Your Information",
      content:
        "We respect your privacy and do not sell your personal information. However, we may share your data with trusted third parties in the following situations:",
      subsections: [
        {
          title: "",
          items: [
            "Third-Party Service Providers: We work with partners, such as payment processors and shipping companies, to fulfill your orders and provide services. These partners are required to maintain the confidentiality of your information.",
            "Legal Requirements: We may disclose your information to comply with legal obligations, such as responding to a subpoena or other legal proceeding.",
            "Business Transfers: In the event of a merger, acquisition, or sale of all or part of our business, your personal information may be part of the transaction. In such cases, we will notify you through a prominent notice on our website or via email.",
          ],
        },
      ],
    },
    {
      id: 4,
      title: "How We Protect Your Information",
      content:
        "We take the security of your personal information seriously and implement a variety of measures to ensure it remains safe:",
      subsections: [
        {
          title: "",
          items: [
            "Encryption: We use industry-standard encryption technologies to protect your payment information during transactions.",
            "Access Control: We restrict access to your personal data to only those employees or contractors who need it to provide our services.",
            "Data Retention: We only keep your personal information for as long as needed for the purpose it was collected, or as required by law. When we no longer need your information, we delete or anonymize it completely through secure methods.",
          ],
        },
      ],
    },
    {
      id: 5,
      title: "Your Rights and Choices",
      content: "You have several rights regarding your personal information:",
      subsections: [
        {
          title: "",
          items: [
            "Access and Updates: You can access the personal information we hold about you by logging into your account. If you discover inaccuracies, you can update your information at any time.",
            "Marketing Preferences: You can opt out of receiving marketing emails at any time by clicking the 'unsubscribe' link in our emails or by contacting us directly to request removal from our marketing lists.",
            "Cookie Management: You have the option to manage your cookie preferences through your browser settings. Keep in mind that blocking certain cookies may impact your user experience.",
            "Data Deletion Requests: If you would like to request removal of your personal information, you can contact us, and we will comply with your request to the extent required by law.",
          ],
        },
      ],
    },
    {
      id: 6,
      title: "Third-Party Links",
      content:
        "Our website may contain links to third-party websites or services. These third parties have their own privacy policies, which may differ from ours. We are not responsible for the content or privacy practices of these external sites. We encourage you to review the privacy policies before sharing any personal information with them.",
    },
    {
      id: 7,
      title: "Children's Privacy",
      content:
        "Our services are not directed to children under 13, and we do not knowingly collect personal information from children under the age of 13. If we learn that we have inadvertently collected data from a child under 13, we will take steps to delete this information. If you believe your child has shared personal data, please contact us.",
    },
    {
      id: 8,
      title: "Changes to This Privacy Policy",
      content:
        "We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. The updated policy will be posted on this page with an updated effective date. We encourage you to review this policy periodically to stay informed about how we handle your personal information.",
    },
    {
      id: 9,
      title: "Contact Us",
      content:
        "If you have any questions or concerns about our Privacy Policy or how we handle your personal information, please feel free to contact us:",
      subsections: [
        {
          title: "",
          items: [
            "Email: [insert email address]",
            "Phone: [insert phone number]",
            "Address: [insert business address]",
            "By using our website and submitting your data to us, you agree that your information is handled with care and respect. By using our website and purchasing from Shopout Next LLC, you trust us with your personal information. We are committed to respecting this trust and protecting your data in accordance with this Privacy Policy and applicable laws.",
          ],
        },
      ],
    },
  ];

  return (
    <>
      <SectionHeader section="privacy Policies" />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* <h1 className="text-2xl font-semibold mb-6">Privacy Policy</h1> */}
        <p className="mb-6 text-sm">
          At Shopout Next LLC, we understand the importance of protecting your
          personal information, and we are committed to safeguarding your
          privacy. This Privacy Policy outlines how we collect, use protect, and
          share your information and your choices. By accessing this site or by
          interacting with our website, you agree to the terms outlined in this
          policy.
        </p>

        {privacyPolicySections.map((section) => (
          <div key={section.id} className="mb-6">
            <h2 className="text-lg font-semibold mb-2">
              {section.id}. {section.title}
            </h2>
            <p className="mb-3 text-sm">{section.content}</p>

            {section.subsections &&
              section.subsections.map((subsection, index) => (
                <div key={index} className="mb-3">
                  {subsection.title && (
                    <h3 className="font-medium text-sm mb-1">
                      {subsection.title}
                    </h3>
                  )}
                  <ul className="list-disc pl-6">
                    {subsection.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-sm mb-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default PrivacyPolicy;
