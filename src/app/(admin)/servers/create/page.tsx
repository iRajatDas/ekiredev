/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
const APPS = [
  { name: "Plesk", src: "/assets/plesk-51d5fd41.svg" },
  { name: "cPanel", src: "/assets/cpanel-4dc54594.svg" },
  { name: "Wordpress", src: "/assets/wordpress-b86fa62b.svg" },
  { name: "NGINX", src: "/assets/nginx-96685d2f.svg" },
  { name: "OpenVPN", src: "/assets/openvpn-67e9b5c2.svg" },
  { name: "MariaDB", src: "/assets/mariadb-f96aef0c.svg" },
  { name: "NextCloud", src: "/assets/nextcloud-0c44faf6.svg" },
];
const OS = [
  {
    name: "Ubuntu",
    src: "/assets/ubuntu-b74a1f05.png",
  },
  {
    name: "Windows",
    src: "/assets/windows-1d9696d5.png",
  },
  {
    name: "Alma Linux",
    src: "/assets/alma-linux-80160fa9.png",
  },
  {
    name: "CentOS",
    src: "/assets/cent-os-40b5ba47.png",
  },
  {
    name: "Debian",
    src: "data:image/png;base64,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",
  },
  {
    name: "Rocky Linux",
    src: "/assets/rocky-linux-bb299cc3.png",
  },
];

const CreateServerUI = () => {
  const [activeTab, setActiveTab] = useState("Operating System");
  const [activeCpuType, setActiveCpuType] = useState("Basic");

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-8 py-8 space-y-8">
      {/* Region Section */}

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h5 className="text-lg font-semibold">Region</h5>
        </div>
        {/* list */}
        <div className="flex gap-4 items-center flex-wrap p-6">
          <div className="flex items-center gap-4 border rounded-lg px-4 py-5 w-[100px] md:w-[260px]">
            <img
              src="https://flagsapi.com/US/flat/32.png"
              alt="New York"
              className="w-8 h-8 object-contain"
            />
            <div className="flex items-center gap-4">
              <h6 className="text-base font-medium">New York</h6>
              <p className="text-sm text-gray-500">(NY)</p>
            </div>
          </div>
        </div>
      </div>

      {/* OS/Application Section */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h5 className="text-lg font-semibold">OS/Application</h5>
        </div>
        <div className="p-6">
          {/* Tabs */}
          <div className="flex border-b mb-4">
            <button
              className={`pb-2 border-b-2 border-transparent ${
                activeTab === "Operating System"
                  ? "border-blue-600 text-blue-600"
                  : "hover:text-blue-600"
              } font-semibold`}
              onClick={() => setActiveTab("Operating System")}
            >
              Operating System
            </button>
            <button
              className={`pb-2 border-transparent ml-4 ${
                activeTab === "Application"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "hover:text-blue-600"
              } font-semibold`}
              onClick={() => setActiveTab("Application")}
            >
              Application
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "Operating System" && (
            <div className="flex items-center flex-wrap gap-4">
              {OS.map((os, idx) => (
                <div
                  key={idx}
                  className="w-[100px] md:w-[200px] border rounded-md ring-1 ring-transparent hover:ring-blue-600 hover:border-blue-600 p-4 flex flex-col items-center cursor-pointer transition"
                >
                  <img
                    src={
                      os.name === "Debian"
                        ? os.src
                        : `https://ekiredev.netlify.app/${os.src}`
                    }
                    alt={os.name}
                    className="w-14 h-14 object-contain mb-2"
                  />
                  <h6 className="text-base font-medium">{os.name}</h6>
                </div>
              ))}
            </div>
          )}
          {activeTab === "Application" && (
            <div className="flex items-center flex-wrap gap-4">
              {APPS.map((app, idx) => (
                <div
                  key={idx}
                  className="w-[100px] md:w-[200px] border rounded-md ring-1 ring-transparent hover:ring-blue-600 hover:border-blue-600 p-4 flex flex-col items-center cursor-pointer transition"
                >
                  <img
                    src={`https://ekiredev.netlify.app/${app.src}`}
                    alt={app.name}
                    className="w-14 h-14 object-contain mb-2"
                  />
                  <h6 className="text-base font-medium">{app.name}</h6>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Size Section */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        {/* Section Header */}
        <div className="px-6 py-4 border-b">
          <h5 className="text-lg font-semibold">Size</h5>
        </div>

        {/* CPU Type Tabs */}
        <div className="p-6">
          <h6 className="mb-4 font-semibold">CPU Type</h6>
          <div className="segment gap-2 flex-wrap flex mb-5">
            {/* Shared CPU */}
            <div className="w-max">
              <p className="w-full py-1 text-center border border-b-0 border-color rounded-t-md bg-gray-100 dark:bg-gray-700">
                Shared CPU
              </p>
              <div className="flex border border-color w-max rounded-b-md">
                <div
                  className={`flex ring-1 justify-center py-5 px-4 cursor-pointer select-none text-center border-r border-color w-52 rounded ${
                    activeCpuType === "Basic"
                      ? "ring-blue-600 border-blue-600"
                      : "ring-transparent hover:ring-blue-600 hover:border-blue-600"
                  }`}
                  onClick={() => setActiveCpuType("Basic")}
                >
                  <h6 className="text-center">Basic</h6>
                </div>
              </div>
            </div>

            {/* Dedicated CPU */}
            <div className="w-max">
              <p className="w-full py-1 text-center border border-b-0 border-color rounded-t-md bg-gray-100 dark:bg-gray-700">
                Dedicated CPU
              </p>
              <div className="flex border border-color w-max rounded-b-md">
                {[
                  "General Purpose",
                  "CPU-Optimized",
                  "Memory-Optimized",
                  "Storage-Optimized",
                ].map((type, idx) => (
                  <div
                    key={idx}
                    className={`flex ring-1 justify-center py-5 px-4 cursor-pointer select-none text-center border-r border-color w-52 rounded ${
                      activeCpuType === type
                        ? "ring-blue-600 border-blue-600"
                        : "ring-transparent hover:ring-blue-600 hover:border-blue-600"
                    }`}
                    onClick={() => setActiveCpuType(type)}
                  >
                    <h6 className="text-center">{type}</h6>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CPU Type Description */}
          {activeCpuType === "Basic" && (
            <p className="text-sm text-gray-600 mb-6">
              Basic virtual machines with a mix of memory and compute resources.
              Best for small projects that can handle variable levels of CPU
              performance, like blogs, web apps, and dev/test environments.
            </p>
          )}

          {/* CPU Options */}
          <div>
            <h6 className="mb-4 font-semibold">CPU Options</h6>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  price: "$10/mo",
                  hourly: "$0.015/hour",
                  specs: ["1 GB/1 CPU", "25 GB NVMe SSDs", "1 TB Transfer"],
                },
                {
                  price: "$20/mo",
                  hourly: "$0.03/hour",
                  specs: ["2 GB/1 CPU", "50 GB NVMe SSDs", "2 TB Transfer"],
                },
              ].map((option, idx) => (
                <div
                  key={idx}
                  className="border rounded-md ring-1 ring-transparent hover:ring-blue-600 hover:border-blue-600 p-4 cursor-pointer transition"
                >
                  <h4 className="text-lg font-semibold">{option.price}</h4>
                  <p className="text-sm text-gray-500 mb-4">{option.hourly}</p>
                  <div className="text-sm space-y-1">
                    {option.specs.map((spec, i) => (
                      <p key={i}>{spec}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Disk Section */}
          <div className="mt-8">
            <h6 className="mb-4 font-semibold">Additional Disk</h6>
            <div className="p-4 border rounded-md bg-gray-50">
              <label className="flex items-start gap-4 cursor-pointer">
                <input
                  type="checkbox"
                  className="mt-1 text-blue-600"
                  disabled
                />
                <div>
                  <h6 className="text-base font-medium opacity-50">
                    Need more disk space? Add a volume with no manual setup.
                  </h6>
                  <p className="text-sm text-gray-500">
                    Block storage volumes add extra disk space. We automatically
                    format and mount your volume so it’s available as soon as
                    your Droplet is, and you can move volumes seamlessly between
                    Droplets at any time. Think of it like a flash drive for
                    your VM.
                  </p>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Automatic Backup Section */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b">
          <h5 className="text-lg font-semibold">Automatic Backup</h5>
        </div>
        <div className="p-6">
          <label className="flex items-start gap-4 cursor-pointer">
            <input type="checkbox" className="mt-1" />
            <div>
              <h6 className="text-base font-medium">
                Enable automated backup plan
              </h6>
              <p className="text-sm text-gray-600">
                Ensure the safety of your valuable data with the peace of mind
                that comes from automatic server backups.
                <strong className="text-blue-600 text-lg ml-1">$5/month</strong>
              </p>
            </div>
          </label>
        </div>
      </div>

      <AuthenticationMethod />

      {/* Summary Section */}
      <div className="sticky bottom-4 backdrop-blur-xl bg-white/30 shadow-md p-6 rounded-lg flex items-center justify-between">
        <div>
          <h5 className="text-lg font-semibold text-blue-600">$28.00/month</h5>
          <p className="text-sm text-gray-600">$0.042/hour</p>
        </div>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-500">
          Create Server
        </button>
      </div>
    </div>
  );
};

export default CreateServerUI;

const AuthenticationMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("SSH Key");
  const [sshKeys] = useState(["OOS"]); // Assume this is fetched from an API or is provided.

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      {/* Section Header */}
      <div className="px-6 py-4 border-b">
        <h5 className="text-lg font-semibold">Authentication Method</h5>
      </div>

      {/* Authentication Options */}
      <div className="p-6 space-y-4">
        <div className="flex gap-4">
          {/* SSH Key Option */}
          <label
            className={`flex items-start gap-4 border rounded-md p-4 cursor-pointer ${
              selectedMethod === "SSH Key"
                ? "border-blue-600 bg-blue-50"
                : "hover:border-blue-600"
            }`}
            onClick={() => setSelectedMethod("SSH Key")}
          >
            <input
              type="radio"
              name="auth"
              value="SSH Key"
              checked={selectedMethod === "SSH Key"}
              onChange={() => setSelectedMethod("SSH Key")}
              className="mt-1 text-blue-600"
            />
            <div>
              <h6 className="text-base font-medium">SSH Key</h6>
              <p className="text-sm text-gray-600">
                Connect to your Server with an SSH key pair
              </p>
            </div>
          </label>

          {/* Password Option */}
          <label
            className={`flex items-start gap-4 border rounded-md p-4 cursor-pointer ${
              selectedMethod === "Password"
                ? "border-blue-600 bg-blue-50"
                : "hover:border-blue-600"
            }`}
            onClick={() => setSelectedMethod("Password")}
          >
            <input
              type="radio"
              name="auth"
              value="Password"
              checked={selectedMethod === "Password"}
              onChange={() => setSelectedMethod("Password")}
              className="mt-1 text-blue-600"
            />
            <div>
              <h6 className="text-base font-medium">Password</h6>
              <p className="text-sm text-gray-600">
                Connect to your Server as the “root” user via password
              </p>
            </div>
          </label>
        </div>

        {/* SSH Key Dropdown Section */}
        {selectedMethod === "SSH Key" && (
          <div className="space-y-4">
            <h6 className="text-base font-semibold">Select SSH Key</h6>
            <div className="relative">
              <select
                className="w-1/3 min-w-0 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                // disabled={sshKeys.length === 0}
              >
                {sshKeys.length > 0 ? (
                  sshKeys.map((key, index) => (
                    <option key={index} value={key}>
                      {key}
                    </option>
                  ))
                ) : (
                  <option value="" disabled>No options</option>
                )}
              </select>
            </div>
          </div>
        )}

        {/* Password Input Section */}
        {selectedMethod === "Password" && (
          <div className="space-y-4">
            <h6 className="text-base font-semibold">Create Root Password</h6>
            <div className="relative">
              <input
                type="password"
                placeholder="Enter password"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500">
              Save
            </button>
            <ul className="text-sm text-gray-600 list-disc pl-5 space-y-1">
              <li>At least 8 characters long</li>
              <li>
                Contains at least 1 uppercase letter (but it cannot be the first
                or last character)
              </li>
              <li>Contains at least 1 number</li>
              <li>Cannot end in a number or special character</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
