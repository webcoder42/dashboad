import React, { useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const stats = [
  { label: 'Total Expenses', value: '$850,000' },
  { label: 'Net Profit', value: '$350,000' },
  { label: 'Cash Flow', value: '$120,000' },
  { label: 'ROI', value: '8.2%' },
];

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
const quarters = ['Q1', 'Q2', 'Q3', 'Q4'];
const years = ['2022', '2023', '2024'];

// Mock data for charts
const revenueVsExpenses = [
  { name: 'Jan', Revenue: 80000, Expenses: 60000 },
  { name: 'Feb', Revenue: 95000, Expenses: 70000 },
  { name: 'Mar', Revenue: 70000, Expenses: 65000 },
  { name: 'Apr', Revenue: 110000, Expenses: 90000 },
  { name: 'May', Revenue: 120000, Expenses: 95000 },
  { name: 'Jun', Revenue: 90000, Expenses: 80000 },
];
const monthlyTrends = [
  { name: 'Jan', value: 20000 },
  { name: 'Feb', value: 25000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 20000 },
  { name: 'May', value: 25000 },
  { name: 'Jun', value: 10000 },
];
const budgetAllocation = [
  { name: 'Salaries', value: 35000 },
  { name: 'Rent', value: 12000 },
  { name: 'Utilities', value: 5000 },
  { name: 'Marketing', value: 8000 },
  { name: 'Supplies', value: 4000 },
  { name: 'Other', value: 6000 },
];
const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F', '#FFBB28'];

const Financial = () => {
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedQuarter, setSelectedQuarter] = useState('');
  const [selectedYear, setSelectedYear] = useState('2024');

  // In real use, filter data based on selectedMonth/Quarter/Year

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#1a2a33' }}>
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 flex flex-col items-center text-center border border-white/20">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg">Financial Dashboard</h1>
          <p className="text-purple-200 text-lg mb-2">Track your financial performance and key metrics</p>
          <p className="text-gray-300">Monitor expenses, profit, and ROI in a beautiful dashboard.</p>
        </div>
        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <select
            className="rounded-lg px-4 py-2 bg-white/20 text-white border border-white/30 focus:outline-none"
            value={selectedMonth}
            onChange={e => setSelectedMonth(e.target.value)}
          >
            <option value="">All Months</option>
            {months.map(m => <option key={m} value={m}>{m}</option>)}
          </select>
          <select
            className="rounded-lg px-4 py-2 bg-white/20 text-white border border-white/30 focus:outline-none"
            value={selectedQuarter}
            onChange={e => setSelectedQuarter(e.target.value)}
          >
            <option value="">All Quarters</option>
            {quarters.map(q => <option key={q} value={q}>{q}</option>)}
          </select>
          <select
            className="rounded-lg px-4 py-2 bg-white/20 text-white border border-white/30 focus:outline-none"
            value={selectedYear}
            onChange={e => setSelectedYear(e.target.value)}
          >
            {years.map(y => <option key={y} value={y}>{y}</option>)}
          </select>
        </div>
        {/* Stat Cards */}
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
        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bar Chart: Revenue vs. Expenses */}
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h2 className="text-lg font-bold text-white mb-4">Revenue vs. Expenses</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueVsExpenses}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Legend />
                <Bar dataKey="Revenue" fill="#8884d8" />
                <Bar dataKey="Expenses" fill="#ff8042" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* Line Chart: Monthly Financial Trends */}
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h2 className="text-lg font-bold text-white mb-4">Monthly Financial Trends</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={monthlyTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                <XAxis dataKey="name" stroke="#fff" />
                <YAxis stroke="#fff" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="value" stroke="#00C49F" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          {/* Pie/Donut Chart: Budget Allocation */}
          <div className="bg-white/10 rounded-xl p-6 border border-white/20">
            <h2 className="text-lg font-bold text-white mb-4">Budget Allocation</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={budgetAllocation}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {budgetAllocation.map((entry, index) => (
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
    </div>
  );
};

export default Financial; 