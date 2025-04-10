import React, { useState, useEffect } from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid,
  Tooltip, ResponsiveContainer
} from "recharts";
import {
  ChevronRight, Home, ShieldCheck, Settings, Users, FileText,
  CreditCard, LogOut, HelpCircle,
  ArrowLeft, ArrowRight
} from "lucide-react";

const Dashboard = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [timeframe, setTimeframe] = useState("1M");
  const [currentDateRange, setCurrentDateRange] = useState("Jan 1 - Jan 31, 2024");
  const [tab, setTab] = useState("summary");

  useEffect(() => {
    const MOBILE_BREAKPOINT = 768;
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => mql.removeEventListener("change", onChange);
  }, []);

  const dailySpendingData = [
    { name: "1", RDS: 400, EC2: 300, ElastiCache: 200, CloudFront: 100, CloudWatch: 150, Other: 400 },
    { name: "2", RDS: 380, EC2: 340, ElastiCache: 220, CloudFront: 110, CloudWatch: 140, Other: 380 },
    { name: "3", RDS: 420, EC2: 280, ElastiCache: 190, CloudFront: 130, CloudWatch: 160, Other: 390 },
    { name: "4", RDS: 430, EC2: 320, ElastiCache: 230, CloudFront: 90, CloudWatch: 150, Other: 410 },
    { name: "5", RDS: 410, EC2: 300, ElastiCache: 210, CloudFront: 120, CloudWatch: 140, Other: 400 },
    { name: "6", RDS: 390, EC2: 330, ElastiCache: 200, CloudFront: 110, CloudWatch: 130, Other: 380 },
    { name: "7", RDS: 440, EC2: 290, ElastiCache: 180, CloudFront: 140, CloudWatch: 170, Other: 420 },
    { name: "8", RDS: 460, EC2: 310, ElastiCache: 220, CloudFront: 120, CloudWatch: 160, Other: 430 },
    { name: "9", RDS: 420, EC2: 320, ElastiCache: 210, CloudFront: 130, CloudWatch: 150, Other: 410 },
    { name: "10", RDS: 400, EC2: 330, ElastiCache: 200, CloudFront: 110, CloudWatch: 140, Other: 390 },
    { name: "11", RDS: 380, EC2: 350, ElastiCache: 230, CloudFront: 90, CloudWatch: 130, Other: 380 },
    { name: "12", RDS: 430, EC2: 300, ElastiCache: 220, CloudFront: 120, CloudWatch: 170, Other: 410 },
    { name: "13", RDS: 450, EC2: 290, ElastiCache: 210, CloudFront: 130, CloudWatch: 160, Other: 420 },
    { name: "14", RDS: 410, EC2: 310, ElastiCache: 200, CloudFront: 140, CloudWatch: 150, Other: 400 },
    { name: "15", RDS: 390, EC2: 330, ElastiCache: 190, CloudFront: 110, CloudWatch: 140, Other: 390 }
  ];

  const servicesData = [
    { name: "RDS", key: "RDS", amount: 12100.5, color: "#4285f4" },
    { name: "EC2", key: "EC2", amount: 8810.5, color: "#26b7c9" },
    { name: "ElastiCache", key: "ElastiCache", amount: 8112.25, color: "#ef5350" },
    { name: "CloudFront", key: "CloudFront", amount: 1305.5, color: "#7e57c2" },
    { name: "CloudWatch", key: "CloudWatch", amount: 1009.72, color: "#ffca28" },
    { name: "Other (+22)", key: "Other", amount: 19065.53, color: "#78909c" },
    { name: "Savings", key: "Savings", amount: 20062.9, color: "#66bb6a" },
  ];

  const savingsData = [
    { service: "EC2", account: "Production", date: "Jan 20, 2024", onDemandCost: "920.43", savings: "359.12", savingsPercentage: 63.97, netCost: "561.31" },
    { service: "RDS", account: "Production", date: "Jan 20, 2024", onDemandCost: "642.80", savings: "107.10", savingsPercentage: 16.6, netCost: "535.50" },
    { service: "ElastiCache", account: "Staging", date: "Jan 20, 2024", onDemandCost: "452.87", savings: "54.35", savingsPercentage: 12.0, netCost: "398.52" },
    { service: "CloudFront", account: "Production", date: "Jan 20, 2024", onDemandCost: "75.10", savings: "3.75", savingsPercentage: 4.99, netCost: "71.35" },
  ];

  const SidebarItem = ({ icon: Icon, label, active }) => (
    <div className={`flex items-center space-x-3 px-3 py-2 rounded-md cursor-pointer ${active ? "bg-gray-100 text-gray-900" : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"}`}>
      <Icon size={16} />
      <span>{label}</span>
    </div>
  );

  const Sidebar = () => (
    <div className="w-48 bg-white border-r border-gray-200 p-4">
      <div className="flex items-center space-x-1 mb-6 px-2">
        <div className="grid grid-cols-2 gap-0.5">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 bg-gray-800 rounded-sm"></div>
          ))}
        </div>
        <span className="text-sm font-medium">All Accounts</span>
      </div>
      <div className="space-y-1">
        <SidebarItem icon={Home} label="Dashboard" active />
        <SidebarItem icon={ShieldCheck} label="Guardrails" />
      </div>
      <div className="mt-8">
        <p className="text-xs text-gray-400 uppercase px-3 mb-2">Settings</p>
        <div className="space-y-1">
          <SidebarItem icon={Settings} label="Settings" />
          <SidebarItem icon={Users} label="Workspace" />
          <SidebarItem icon={Users} label="Profile" />
          <SidebarItem icon={Users} label="Members" />
          <SidebarItem icon={FileText} label="Notifications" />
          <SidebarItem icon={CreditCard} label="Billing" />
          <SidebarItem icon={FileText} label="Invoices" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 right-4 space-y-1">
        <SidebarItem icon={LogOut} label="Sign out" />
        <SidebarItem icon={HelpCircle} label="Support" />
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex space-x-2 text-xs">
            {["1M", "3M", "6M", "1Y", "ALL"].map(val => (
              <button key={val} className={`border px-2 py-1 rounded ${timeframe === val ? "bg-blue-500 text-white" : "bg-white text-gray-700"}`} onClick={() => setTimeframe(val)}>{val}</button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-6">
          <div className="xl:col-span-2 bg-white p-4 rounded border">
            <div className="flex justify-between mb-4">
              <div className="text-sm font-medium">Overview</div>
              <button className="text-xs text-blue-500 flex items-center gap-1">View pending savings <ChevronRight className="h-3 w-3" /></button>
            </div>
            <div className="flex space-x-4">
              {["$50,104", "$20,062", "$5,910"].map((val, idx) => (
                <div key={idx} className="flex-1">
                  <div className="text-xl font-bold">{val}</div>
                  <div className="text-xs text-gray-500">{["Net spend", "Saved", "Pending savings"][idx]}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-4 rounded border">
            <div className="text-sm font-medium mb-2">Budget</div>
            <div className="flex items-center mb-2">
              <span className="text-xs text-gray-500">On track</span>
              <div className="flex-1 mx-2 h-2 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full w-[70%] bg-gradient-to-r from-green-400 to-blue-500 rounded-full"></div>
              </div>
            </div>
            <div className="flex justify-between text-xs text-center">
              <div>
                <div className="text-lg font-bold">$20K</div>
                <div>$2,500 left</div>
                <div className="text-gray-400">Jan 1</div>
              </div>
              <div>
                <div className="text-lg font-bold">$17.5K</div>
                <div>Projected</div>
                <div className="text-gray-400">Jan 31</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded border mb-6">
          <div className="flex justify-between mb-2">
            <div className="text-sm font-medium">Spend after savings by service</div>
            <div className="flex items-center space-x-2">
              <button className="p-1 rounded border border-gray-200"><ArrowLeft className="h-3 w-3 text-gray-500" /></button>
              <span className="text-xs">{currentDateRange}</span>
              <button className="p-1 rounded border border-gray-200"><ArrowRight className="h-3 w-3 text-gray-500" /></button>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs mb-2">
            {servicesData.map((s, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full" style={{ backgroundColor: s.color }}></div>
                <span>{s.name}</span>
                <span className="font-semibold">${s.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={dailySpendingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis tickFormatter={(v) => `$${v}`} />
                <Tooltip formatter={(v) => `$${v}`} labelFormatter={(l) => `Day ${l}`} />
                {servicesData.map((s, i) => (
                  <Bar key={i} dataKey={s.key} stackId="a" fill={s.color} />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="mb-2">
          {['summary', 'plans', 'instances'].map((key) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`text-sm px-3 py-1 rounded-t ${tab === key ? 'bg-white border border-b-0' : 'bg-gray-100 text-gray-600'}`}
            >
              {key === 'summary' ? 'Savings summary' : key === 'plans' ? 'Savings plans' : 'Reserved instances'}
            </button>
          ))}
        </div>
        <div className="bg-white p-4 rounded border">
          {tab === 'summary' ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Account</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">On demand cost</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Savings</th>
                    <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Net cost</th>
                  </tr>
                </thead>
                <tbody>
                  {savingsData.map((item, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="px-4 py-3 text-sm">{item.service}</td>
                      <td className="px-4 py-3 text-sm">{item.account}</td>
                      <td className="px-4 py-3 text-sm">{item.date}</td>
                      <td className="px-4 py-3 text-sm">${item.onDemandCost}</td>
                      <td className="px-4 py-3 text-sm">
                        <div className="flex items-center">
                          <span className="mr-2">${item.savings}</span>
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">{item.savingsPercentage}%</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">${item.netCost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center text-gray-500">{tab === 'plans' ? 'Savings plans information would display here.' : 'Reserved instances information would display here.'}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
