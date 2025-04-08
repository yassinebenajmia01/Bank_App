import { motion } from "framer-motion";
import {
  ShieldCheck,
  TrendingUp,
  Smartphone,
  CreditCard,
  Users,
  Banknote,
  AlarmClock,
  Globe,
  BarChart2,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck className="h-8 w-8 text-green-600" />,
    title: "Advanced Security",
    description: "Your money is protected with the latest in banking-grade encryption and fraud detection.",
    bullets: ["2FA login", "Biometric auth", "24/7 fraud alerts"],
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-green-600" />,
    title: "Smart Investments",
    description: "AI-powered tools to track and grow your portfolio with insights and recommendations.",
    bullets: ["Real-time insights", "Risk tracking", "Custom strategies"],
  },
  {
    icon: <Smartphone className="h-8 w-8 text-green-600" />,
    title: "Mobile First",
    description: "Banking built for your phone with full functionality and real-time sync.",
    bullets: ["iOS + Android", "Instant push notifications", "Secure face unlock"],
  },
  {
    icon: <CreditCard className="h-8 w-8 text-green-600" />,
    title: "Next-Gen Cards",
    description: "Create virtual or physical cards instantly and control spending with ease.",
    bullets: ["One-click freeze", "Custom limits", "Apple/Google Pay ready"],
  },
  {
    icon: <Users className="h-8 w-8 text-green-600" />,
    title: "Team Banking",
    description: "Manage your team’s expenses, roles, and permissions all in one place.",
    bullets: ["Role-based access", "Expense tracking", "Payroll integration"],
  },
  {
    icon: <Banknote className="h-8 w-8 text-green-600" />,
    title: "Global Transfers",
    description: "Send money worldwide with unbeatable exchange rates and zero hidden fees.",
    bullets: ["Live rates", "Instant SWIFT/IBAN", "No hidden charges"],
  },
  {
    icon: <AlarmClock className="h-8 w-8 text-green-600" />,
    title: "Scheduled Payments",
    description: "Automate bills, rent, or transfers with full control and reminders.",
    bullets: ["Auto-debit rules", "SMS/email alerts", "Cancel anytime"],
  },
  {
    icon: <Globe className="h-8 w-8 text-green-600" />,
    title: "Multi-Currency",
    description: "Hold balances in USD, EUR, GBP, and more with no conversion surprises.",
    bullets: ["Live FX updates", "Zero conversion on same-currency use", "Multi-currency cards"],
  },
  {
    icon: <BarChart2 className="h-8 w-8 text-green-600" />,
    title: "Full Analytics",
    description: "Know where every dollar goes with breakdowns, trends, and budgeting tools.",
    bullets: ["Monthly trends", "Custom reports", "Budget goals"],
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section className="bg-white py-24 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Next-level banking, built for you</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            These aren’t just features. They're tools built to help you grow, protect, and manage your money — globally.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition duration-300"
              variants={item}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 mb-4">{feature.description}</p>
              <ul className="list-disc list-inside text-sm text-gray-500 space-y-1">
                {feature.bullets.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
