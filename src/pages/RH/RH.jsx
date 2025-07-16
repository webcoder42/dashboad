import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const stats = [
  { label: 'Employees', value: '120' },
  { label: 'New Hires', value: '8' },
  { label: 'Turnover Rate', value: '5.2%' },
  { label: 'Absenteeism', value: '2.1%' },
];
const empByDept = [
  { name: 'Engineering', value: 40 },
  { name: 'Sales', value: 25 },
  { name: 'HR', value: 10 },
  { name: 'Finance', value: 15 },
  { name: 'Support', value: 30 },
];
const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F'];

const RH = () => (
  <div className="min-h-screen" style={{ backgroundColor: '#1a2a33' }}>
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 flex flex-col items-center text-center border border-white/20">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg">HR Dashboard</h1>
        <p className="text-yellow-200 text-lg mb-2">Human Resources KPIs</p>
        <p className="text-gray-300">Monitor employees, hiring, and HR metrics in a modern dashboard.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl p-6 shadow-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white flex flex-col items-center"
          >
            <div className="text-2xl font-bold mb-2">{stat.value}</div>
            <div className="text-md font-medium tracking-wide uppercase text-white/80">{stat.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-white/10 rounded-xl p-6 border border-white/20">
        <h2 className="text-lg font-bold text-white mb-4">Employees by Department</h2>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={empByDept}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {empByDept.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default RH; 