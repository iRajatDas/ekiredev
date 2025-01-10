import React from "react";

const DashboardPage = () => {
  return (
    <div>
      {/* Main Content */}
      <main className="flex-grow bg-gray-50 px-4 sm:px-6 md:px-8 py-6">
        {/* Top Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            {
              title: "Active Servers",
              value: "435",
              bg: "bg-emerald-100",
              text: "text-emerald-600",
              icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  {...props}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z"
                  ></path>
                </svg>
              ),
            },
            {
              title: "Available Balance",
              value: "$34.62K",
              bg: "bg-amber-100",
              text: "text-amber-600",
              icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  {...props}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                  ></path>
                </svg>
              ),
            },
            {
              title: "Open Tickets",
              value: "14",
              bg: "bg-cyan-100",
              text: "text-cyan-600",
              icon: (props: React.SVGProps<SVGSVGElement>) => (
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  {...props}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  ></path>
                </svg>
              ),
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-2xl p-6 flex items-center justify-between"
            >
              <div>
                <h6 className="text-sm font-semibold text-gray-500">
                  {stat.title}
                </h6>
                <h3 className="text-2xl font-bold text-gray-900 mt-2">
                  {stat.value}
                </h3>
              </div>
              <div
                className={`w-12 h-12 ${stat.bg} ${stat.text} flex items-center justify-center rounded-xl`}
              >
                <stat.icon className="size-7" />
              </div>
            </div>
          ))}
        </div>

        {/* Recent Logins Table */}
        <div className="bg-white border rounded-2xl">
          <div className="p-6">
            <h5 className="text-lg font-semibold text-gray-900">
              Recent Logins
            </h5>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead className="bg-gray-50 text-xs font-normal">
                <tr className="text-gray-500">
                  {["Date", "IP", "OS", "Country", "Status"].map(
                    (header, idx) => (
                      <th key={idx} className="py-3 px-6 border-b">
                        {header}
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  {
                    date: "22/09/2024",
                    ip: "192.168.1.1",
                    os: "Windows 10",
                    country: "USA",
                    status: "Success",
                  },
                  {
                    date: "21/09/2024",
                    ip: "192.168.1.2",
                    os: "macOS",
                    country: "Canada",
                    status: "Failed",
                  },
                ].map((login, idx) => (
                  <tr key={idx}>
                    <td className="py-3 px-6 border-b">{login.date}</td>
                    <td className="py-3 px-6 border-b">{login.ip}</td>
                    <td className="py-3 px-6 border-b">{login.os}</td>
                    <td className="py-3 px-6 border-b">{login.country}</td>
                    <td className="py-3 px-6 border-b">
                      <span
                        className={`px-2 py-1 rounded text-sm font-medium ${
                          login.status === "Success"
                            ? "bg-emerald-100 text-emerald-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {login.status.toUpperCase()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t px-4 sm:px-6 md:px-8 py-4 text-sm text-gray-500">
        <div className="flex justify-between">
          <span>Copyright © 2025 Ekire LTD. All rights reserved.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:underline">
              Privacy & Policy
            </a>
            <a href="#" className="hover:underline">
              Network Status
            </a>
            <a href="#" className="hover:underline">
              Career
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
