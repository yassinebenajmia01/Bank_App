import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "Free",
    description: "Essential tools to get started with modern banking.",
    features: [
      "Free virtual card",
      "Basic spending analytics",
      "Standard security",
      "Up to 2 currencies",
    ],
    unavailable: ["International transfers", "Priority support"],
    popular: false,
  },
  {
    name: "Premium",
    price: "$9.99/mo",
    description: "Advanced features for personal finance power users.",
    features: [
      "Unlimited virtual cards",
      "Real-time analytics",
      "Multi-currency support",
      "International transfers",
      "24/7 support",
    ],
    unavailable: ["Business dashboard"],
    popular: true,
  },
  {
    name: "Business",
    price: "$29.99/mo",
    description: "For teams, startups, and high-volume banking needs.",
    features: [
      "All Premium features",
      "Team member roles",
      "Payroll integrations",
      "Invoice generation",
      "Dedicated success manager",
    ],
    unavailable: [],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Simple, transparent pricing</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your lifestyle, whether you're just getting started or managing a growing team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-xl border border-gray-200 p-8 shadow-sm flex flex-col justify-between ${
                plan.popular ? "border-green-500 shadow-md" : ""
              }`}
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900">{plan.name}</h3>
                <p className="text-gray-500 mt-1 mb-6">{plan.description}</p>
                <p className="text-3xl font-bold text-gray-900 mb-8">{plan.price}</p>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                  {plan.unavailable.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400 line-through">
                      <XCircle className="w-5 h-5 text-gray-300 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-10 w-full bg-[#C1F25E] text-black py-3 rounded-md font-semibold hover:bg-[#b1e851] transition">
                {plan.popular ? "Get Premium" : "Choose Plan"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
