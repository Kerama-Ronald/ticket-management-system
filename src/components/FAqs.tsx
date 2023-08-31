import React from "react";
import { FaQuestionCircle } from "react-icons/fa"; // Import the question icon

function FAQs() {
	const FAQs = () => {
        const faqData = [
          {
            question: "What are common cybersecurity threats?",
            answer:
              "Common cybersecurity threats include malware, phishing, ransomware, and DDoS attacks.",
          },
          {
            question: "How can I protect my personal data online?",
            answer:
              "Protect your personal data by using strong, unique passwords, enabling two-factor authentication, and being cautious of suspicious links.",
          },
          {
            question: "What is two-factor authentication (2FA)?",
            answer:
              "Two-factor authentication adds an extra layer of security by requiring you to provide two different authentication factors to verify your identity.",
          },
          {
            question: "What is a VPN and why should I use it?",
            answer:
              "A VPN (Virtual Private Network) helps protect your online privacy and security by creating an encrypted connection between your device and the internet.",
          },
          // Add more questions and answers
        ];
	return (
		<section className="bg-gray-100 py-10">
			<div className="container mx-auto">
				<h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
				<ul className="grid gap-4">
					{faqData.map((item, index) => (
						<li key={index} className="border p-4 rounded-lg bg-white">
							<div className="flex items-center mb-2">
								<FaQuestionCircle className="mr-2 text-blue-600" />
								<span className="font-semibold">{item.question}</span>
							</div>
							<p className="text-gray-600">{item.answer}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default FAQs;
