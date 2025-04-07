import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import ModernNavbar from "./Navbar";
import Footer from "./Footer";

const Index = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  return (
    <div className="min-h-screen bg-background">
      <ModernNavbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden px-6 lg:px-8 py-24 sm:py-32">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-primary mb-6">
              Change the bank account
              <br />
              <span className="bg-gradient-to-r from-[#9EE755] to-[#CFDD3C] bg-clip-text text-transparent">
                you use
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-secondary mb-8">
              Experience banking reimagined. Simple, secure, and designed for the modern world.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-primary/90 transition-colors">
                Get Started
              </button>
              <button className="px-6 py-3 glass rounded-full hover:bg-white/20 transition-colors flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mt-16">
            <div className="flex justify-center">
              <img
                src="https://antimetal.com/images/hero/preview.png"
                alt="Hero"
                className="rounded-3xl shadow-2xl max-w-[90%] w-auto h-auto"
              />
            </div>
          </div>
        </section>

        {/* Features Section (Animated) */}
        <section className="py-24 bg-surface px-6 lg:px-8">
  <div className="mx-auto max-w-7xl">
    <h2 className="text-3xl font-bold text-center mb-16">Features designed for you</h2>
    <motion.div
      className="grid md:grid-cols-3 gap-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.2 }}
    >
      {[
        {
          title: "Secure Transactions",
          description: "Bank-grade encryption for all your transactions",
          icon: "🔒",
        },
        {
          title: "Real-time Updates",
          description: "Get instant notifications for all account activities",
          icon: "⚡",
        },
        {
          title: "Smart Savings",
          description: "AI-powered insights to help you save more",
          icon: "💡",
        },
      ].map((feature, index) => (
        <motion.div
          key={index}
          className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:border-green-500 hover:shadow-md transition-all duration-300"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="text-4xl mb-4">{feature.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
          <p className="text-gray-600">{feature.description}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

        {/* FAQ Section */}
        <section className="py-24 px-6 lg:px-8 bg-gray-50">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  question: "How secure is my data?",
                  answer: "We use bank-level encryption to protect all your data and transactions.",
                },
                {
                  question: "What are the fees?",
                  answer: "We believe in transparent pricing with no hidden fees.",
                },
                {
                  question: "How do I get started?",
                  answer: "Download our app and follow the simple registration process.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg overflow-hidden"
                >
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-background/50"
                    onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                  >
                    <span className="font-medium">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        activeAccordion === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {activeAccordion === index && (
                    <div className="px-6 py-4 bg-background/50">
                      <p className="text-secondary text-lg text-gray-500">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24  bg-[#0F0F0F] text-white px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h2 className="text-3xl sm:text-5xl font-bold mb-8 ">Ready to get started?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have already made the switch.
            </p>
            <button className="px-8 py-4 text-[#0F0F0F] bg-[#C1F25E] text-primary rounded-full font-semibold hover:bg-accent/90 transition-colors">
              Create Account
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
