import { Briefcase, Users, HeartHandshake, Globe } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    icon: <Briefcase className="h-7 w-7 text-green-600" />,
    title: "Founded",
    value: "2017",
    description: "Built to challenge outdated banking systems.",
  },
  {
    icon: <Users className="h-7 w-7 text-green-600" />,
    title: "Users",
    value: "1.2M+",
    description: "Bankers, builders, freelancers & dreamers.",
  },
  {
    icon: <HeartHandshake className="h-7 w-7 text-green-600" />,
    title: "Trust Score",
    value: "98%",
    description: "User-rated satisfaction & transparency.",
  },
  {
    icon: <Globe className="h-7 w-7 text-green-600" />,
    title: "Countries",
    value: "42+",
    description: "Banking with no borders.",
  },
];

const About = () => {
  return (
    <section className="bg-white py-24 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900">Redefining what a bank can be</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          We're building a banking experience that’s truly modern — one that puts people first,
          moves faster than legacy institutions, and adapts to your real-life financial needs.
        </p>
      </div>

      {/* Story section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1170&q=80"
            alt="Team working"
            className="rounded-xl shadow-md"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Our story</h3>
          <p className="text-gray-600 mb-4">
            We started with a simple idea: traditional banks weren’t built for this generation. From excessive fees
            to outdated interfaces, it was clear something had to change.
          </p>
          <p className="text-gray-600">
            So we built a digital-first bank — one that's fast, transparent, secure, and always improving.
          </p>
        </div>
      </motion.div>

      {/* Stats section */}
      <div className="max-w-6xl mx-auto mt-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            viewport={{ once: true }}
            className="bg-gray-50 border border-gray-200 rounded-lg p-6"
          >
            <div className="mb-2 flex justify-center">{stat.icon}</div>
            <h4 className="text-2xl font-bold text-gray-900">{stat.value}</h4>
            <p className="text-sm text-gray-500">{stat.title}</p>
            <p className="text-xs text-gray-400 mt-1">{stat.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Mission section */}
      <div className="max-w-5xl mx-auto mt-24 text-center">
        <h3 className="text-3xl font-semibold text-gray-900 mb-4">Built on values</h3>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          We believe that banking should empower you — not restrict you. That means clarity in pricing, honesty in
          policies, and security that never sleeps.
        </p>
      </div>
    </section>
  );
};

export default About;
