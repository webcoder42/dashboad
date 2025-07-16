import React from 'react';
import { LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const stats = [
  { label: 'Total Revenue', value: '$1,200,000' },
  { label: 'Active Users', value: '3,245' },
  { label: 'Projects', value: '27' },
  { label: 'Growth', value: '+12.5%' },
];

// Mock data for charts
const userActivity = [
  { name: 'Jan', users: 1200 },
  { name: 'Feb', users: 1500 },
  { name: 'Mar', users: 1800 },
  { name: 'Apr', users: 2100 },
  { name: 'May', users: 2500 },
  { name: 'Jun', users: 3245 },
];
const deptDistribution = [
  { name: 'Engineering', value: 40 },
  { name: 'HR', value: 10 },
  { name: 'Finance', value: 15 },
  { name: 'Commercial', value: 20 },
  { name: 'Support', value: 15 },
];
const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F'];

const Overview = () => (
  <div className="min-h-screen" style={{ backgroundColor: '#1a2a33' }}>
    <div className="max-w-5xl mx-auto p-6">
      {/* Welcome Card */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 flex flex-col items-center text-center border border-white/20">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg">Welcome to Thefni's Dashboard</h1>
        <p className="text-blue-200 text-lg mb-2">Your advanced overview at a glance</p>
        <p className="text-gray-300">Track your business performance, users, and growth in one beautiful place.</p>
      </div>
      {/* Stats Cards */}
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
        {/* Line Chart: User Activity */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20">
          <h2 className="text-lg font-bold text-white mb-4">User Activity Over Time</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={userActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        {/* Pie Chart: Department Distribution */}
        <div className="bg-white/10 rounded-xl p-6 border border-white/20">
          <h2 className="text-lg font-bold text-white mb-4">Department Distribution</h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={deptDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {deptDistribution.map((entry, index) => (
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

export default Overview; 