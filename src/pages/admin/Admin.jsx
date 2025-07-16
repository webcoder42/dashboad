import React from 'react';
import { LineChart, Line, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const stats = [
  { label: 'Total Users', value: '1,200' },
  { label: 'Departments', value: '7' },
  { label: 'Active Users', value: '950' },
  { label: 'Growth', value: '+8.5%' },
];

const registrations = [
  { name: 'Jan', users: 80 },
  { name: 'Feb', users: 120 },
  { name: 'Mar', users: 150 },
  { name: 'Apr', users: 200 },
  { name: 'May', users: 250 },
  { name: 'Jun', users: 400 },
];
const rolesDistribution = [
  { name: 'Admin', value: 5 },
  { name: 'Gerente', value: 10 },
  { name: 'Finanaceiro', value: 15 },
  { name: 'Engenharia', value: 20 },
  { name: 'RH', value: 10 },
  { name: 'Comercial', value: 15 },
  { name: 'Compras', value: 5 },
];
const activeByDept = [
  { name: 'Engenharia', users: 200 },
  { name: 'RH', users: 120 },
  { name: 'Comercial', users: 180 },
  { name: 'Finanaceiro', users: 150 },
  { name: 'Compras', users: 80 },
  { name: 'Gerente', users: 100 },
];
const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F', '#FFBB28', '#FF6666'];

const Admin = () => (
  <div className="min-h-screen" style={{ backgroundColor: '#1a2a33' }}>
    <div className="max-w-5xl mx-auto p-6">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-8 mb-8 flex flex-col items-center text-center border border-white/20">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2 drop-shadow-lg">Admin Dashboard</h1>
        <p className="text-yellow-200 text-lg mb-2">Admin Overview & User Management</p>
        <p className="text-gray-300">Monitor user registrations, role distribution, and department activity across the organization.</p>
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
      {/* Line Chart: User Registrations Over Time */}
      <div className="bg-white/10 rounded-xl p-6 border border-white/20 mb-8">
        <h2 className="text-lg font-bold text-white mb-2">User Registrations Over Time</h2>
        <p className="text-gray-300 mb-2">Track how many users registered each month.</p>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={registrations}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="users" stroke="#8884d8" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* Pie Chart: User Roles Distribution */}
      <div className="bg-white/10 rounded-xl p-6 border border-white/20 mb-8">
        <h2 className="text-lg font-bold text-white mb-2">User Roles Distribution</h2>
        <p className="text-gray-300 mb-2">See how users are distributed across different roles.</p>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={rolesDistribution}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={80}
              label
            >
              {rolesDistribution.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
      {/* Bar Chart: Active Users by Department */}
      <div className="bg-white/10 rounded-xl p-6 border border-white/20 mb-8">
        <h2 className="text-lg font-bold text-white mb-2">Active Users by Department</h2>
        <p className="text-gray-300 mb-2">Compare active user counts across departments.</p>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={activeByDept}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="#00C49F" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
);

export default Admin; 