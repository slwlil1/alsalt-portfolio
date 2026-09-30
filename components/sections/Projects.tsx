"use client";

import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip,
  ResponsiveContainer, CartesianGrid,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 4200, forecast: 4000 },
  { month: "Feb", sales: 5100, forecast: 4800 },
  { month: "Mar", sales: 6200, forecast: 5800 },
  { month: "Apr", sales: 5800, forecast: 6000 },
  { month: "May", sales: 7300, forecast: 7000 },
  { month: "Jun", sales: 8100, forecast: 7800 },
];

const churnData = [
  { name: "Q1", churn: 28, retention: 72 },
  { name: "Q2", churn: 22, retention: 78 },
  { name: "Q3", churn: 15, retention: 85 },
  { name: "Q4", churn: 10, retention: 90 },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Featured <span className="text-accent">Projects</span>
        </h2>

        <div className="glass rounded-3xl p-8 md:p-12 mb-8">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <h3 className="text-3xl font-bold">CafeInsight</h3>
                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full font-semibold">
                  GRADUATION PROJECT
                </span>
              </div>
              <p className="text-orange-300 mb-4">Smart Café Analytics Platform</p>
              <p className="text-gray-300 mb-6">
                Full-stack web app that helps café owners make data-driven decisions.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "Streamlit", "Pandas", "Scikit-learn", "XGBoost", "Prophet", "Plotly", "SQLite"].map((t) => (
                  <span key={t} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-accent">25%</p>
                  <p className="text-xs text-gray-400">Profit ↑</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">40%</p>
                  <p className="text-xs text-gray-400">Churn ↓</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent">92%</p>
                  <p className="text-xs text-gray-400">Satisfaction</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="glass rounded-2xl p-4">
                <p className="text-sm text-gray-400 mb-3">Sales Forecast (Prophet)</p>
                <ResponsiveContainer width="100%" height={160}>
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1E3A66" />
                    <XAxis dataKey="month" stroke="#888" fontSize={12} />
                    <YAxis stroke="#888" fontSize={12} />
                    <Tooltip contentStyle={{ background: "#0F1F3A", border: "1px solid #FF7A18", borderRadius: 8 }} />
                    <Line type="monotone" dataKey="sales" stroke="#FF7A18" strokeWidth={2} />
                    <Line type="monotone" dataKey="forecast" stroke="#FFA05C" strokeDasharray="5 5" />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="glass rounded-2xl p-4">
                <p className="text-sm text-gray-400 mb-3">Churn vs Retention (XGBoost)</p>
                <ResponsiveContainer width="100%" height={160}>
                  <BarChart data={churnData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1E3A66" />
                    <XAxis dataKey="name" stroke="#888" fontSize={12} />
                    <YAxis stroke="#888" fontSize={12} />
                    <Tooltip contentStyle={{ background: "#0F1F3A", border: "1px solid #FF7A18", borderRadius: 8 }} />
                    <Bar dataKey="retention" fill="#FF7A18" radius={[4, 4, 0, 0]} />
                    <Bar dataKey="churn" fill="#1E3A66" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="glass rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-4">Your Guide to Campus Life</h3>
          <p className="text-orange-300 mb-4">Academic Project</p>
          <p className="text-gray-300 mb-6">
            Student-focused campus platform with chatbot, booking, task manager, and project sharing.
          </p>
          <div className="flex flex-wrap gap-2">
            {["HTML", "CSS", "JavaScript", "Java", "MySQL"].map((t) => (
              <span key={t} className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}