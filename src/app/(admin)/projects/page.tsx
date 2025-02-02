import React from "react";

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 md:px-8 py-8">
      <h2 className="text-2xl font-bold mb-8">Projects</h2>

      {/* My Projects Section */}
      <div className="bg-white shadow rounded-lg overflow-hidden mb-8">
        <div className="flex max-md:flex-col max-md:gap-6 justify-between items-center px-6 py-4 border-b">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-yellow-100 text-yellow-600 flex items-center justify-center rounded-md">
              <svg
                className="size-4"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                />
              </svg>
            </div>
            <h5 className="text-lg font-semibold">My Projects</h5>
          </div>
          <div className="flex gap-4 max-md:flex-col">
            <button className="bg-blue-50 text-blue-600  text-sm font-medium px-4 py-2.5 rounded-md hover:bg-blue-100">
              Join a Project
            </button>
            <button className="bg-blue-600 text-white text-sm font-medium  px-4 py-2.5 rounded-md flex items-center gap-2 hover:bg-blue-500">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                height="20"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z"
                />
              </svg>
              Create New Project
            </button>
          </div>
        </div>
        <div className="p-8 flex justify-center">
          <EmptyState className="object-contain max-w-md" />
        </div>
      </div>

      {/* Collaborative Projects Section */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <div className="flex max-md:flex-col justify-between items-center px-6 py-4 border-b">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-yellow-100 text-yellow-600 flex items-center justify-center rounded-md">
              <svg
                className="size-4"
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 20 20"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
              </svg>
            </div>
            <h5 className="text-lg font-semibold">Collaborative Projects</h5>
          </div>
        </div>
        <div className="p-8 flex justify-center">
          <EmptyState className="object-contain max-w-md" />
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;

const EmptyState = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
    <path
      style={{
        fill: "#ebebeb",
      }}
      d="M0 382.4h500v.25H0zm416.78 16.09h33.12v.25h-33.12zm-94.25 2.72h8.69v.25h-8.69zm74.06-12h19.19v.25h-19.19zm-344.13 1.68h43.19v.25H52.46zm52.1 0h6.33v.25h-6.33zm26.91 4.22h93.68v.25h-93.68zM237 337.8H43.91a5.71 5.71 0 0 1-5.7-5.71V60.66a5.71 5.71 0 0 1 5.7-5.66H237a5.71 5.71 0 0 1 5.71 5.71v271.38a5.71 5.71 0 0 1-5.71 5.71M43.91 55.2a5.46 5.46 0 0 0-5.45 5.46v271.43a5.46 5.46 0 0 0 5.45 5.46H237a5.47 5.47 0 0 0 5.46-5.46V60.66A5.47 5.47 0 0 0 237 55.2Zm409.4 282.6h-193.1a5.72 5.72 0 0 1-5.71-5.71V60.66a5.72 5.72 0 0 1 5.71-5.66h193.1a5.71 5.71 0 0 1 5.69 5.66v271.43a5.71 5.71 0 0 1-5.69 5.71M260.21 55.2a5.47 5.47 0 0 0-5.46 5.46v271.43a5.47 5.47 0 0 0 5.46 5.46h193.1a5.47 5.47 0 0 0 5.46-5.46V60.66a5.47 5.47 0 0 0-5.46-5.46Z"
    />
    <path
      transform="rotate(180 358.58 128.945)"
      style={{
        fill: "#e6e6e6",
      }}
      d="M289.69 83.83h137.78v90.23H289.69z"
    />
    <path
      transform="rotate(180 355.495 128.945)"
      style={{
        fill: "#f0f0f0",
      }}
      d="M285.49 83.83h140.02v90.23H285.49z"
    />
    <path
      transform="rotate(180 358.58 182.91)"
      style={{
        fill: "#e6e6e6",
      }}
      d="M289.69 174.06h137.78v17.71H289.69z"
    />
    <path
      transform="rotate(180 348.495 182.91)"
      style={{
        fill: "#f0f0f0",
      }}
      d="M278.48 174.06H418.5v17.71H278.48z"
    />
    <path
      transform="rotate(90 355.495 128.945)"
      style={{
        fill: "#fafafa",
      }}
      d="M316.27 64.82h78.46v128.25h-78.46z"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="m390.7 168.17-16.38-78.45h-25.56l16.38 78.45z"
    />
    <path
      d="M416.9 162.32a.42.42 0 0 0 .42-.43V93.55a.42.42 0 0 0-.42-.42.41.41 0 0 0-.42.42v68.34a.42.42 0 0 0 .42.43"
      style={{
        fill: "#f0f0f0",
      }}
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="m359.65 168.17-16.38-78.45h-9.97l16.39 78.45z"
    />
    <path
      transform="rotate(90 291.745 128.945)"
      style={{
        fill: "#e6e6e6",
      }}
      d="M252.52 128.57h78.46v.75h-78.46z"
    />
    <path
      style={{
        fill: "#ebebeb",
        opacity: 0.6000000000000001,
      }}
      d="M284.1 98.59h137.78l.54-6.59H284.64zm0 10.8h137.78l.54-6.58H284.64zm0 10.8h137.78l.54-6.58H284.64zm0 10.81h137.78l.54-6.59H284.64zm0 10.8h137.78l.54-6.59H284.64zm0 10.8h137.78l.54-6.59H284.64z"
    />
    <path
      style={{
        fill: "#e6e6e6",
      }}
      d="M378.8 316.78h28.89v5.7H378.8z"
    />
    <path
      transform="rotate(180 326.975 316.865)"
      style={{
        fill: "#e6e6e6",
      }}
      d="M324.31 251.33h5.33V382.4h-5.33z"
    />
    <path
      transform="rotate(180 342.315 319.63)"
      style={{
        fill: "#f5f5f5",
      }}
      d="M305.84 316.78h72.96v5.7h-72.96z"
    />
    <path
      style={{
        fill: "#e6e6e6",
      }}
      d="M378.8 347.95h28.89v5.7H378.8z"
    />
    <path
      transform="rotate(180 342.315 350.795)"
      style={{
        fill: "#f5f5f5",
      }}
      d="M305.84 347.95h72.96v5.7h-72.96z"
    />
    <path
      style={{
        fill: "#e6e6e6",
      }}
      d="M378.8 254.45h28.89v5.7H378.8z"
    />
    <path
      transform="rotate(180 342.315 257.295)"
      style={{
        fill: "#f5f5f5",
      }}
      d="M305.84 254.45h72.96v5.7h-72.96z"
    />
    <path
      style={{
        fill: "#e6e6e6",
      }}
      d="M378.8 285.61h28.89v5.7H378.8z"
    />
    <path
      transform="rotate(180 342.315 288.46)"
      style={{
        fill: "#f5f5f5",
      }}
      d="M305.84 285.61h72.96v5.7h-72.96z"
    />
    <path
      transform="rotate(180 399.94 316.865)"
      style={{
        fill: "#e6e6e6",
      }}
      d="M397.27 251.33h5.33V382.4h-5.33z"
    />
    <path
      transform="rotate(180 376.13 316.865)"
      style={{
        fill: "#f5f5f5",
      }}
      d="M373.47 251.33h5.33V382.4h-5.33z"
    />
    <path
      transform="rotate(180 308.5 316.865)"
      style={{
        fill: "#f5f5f5",
      }}
      d="M305.84 251.33h5.33V382.4h-5.33z"
    />
    <path
      transform="rotate(180 92.665 329.455)"
      style={{
        fill: "#e6e6e6",
      }}
      d="M65.37 276.51h54.58V382.4H65.37z"
    />
    <path
      style={{
        fill: "#fafafa",
      }}
      d="M79.95 382.4H65.37v-14.62h29.86z"
    />
    <path
      transform="rotate(180 241.47 329.455)"
      style={{
        fill: "#e6e6e6",
      }}
      d="M214.18 276.51h54.58V382.4h-54.58z"
    />
    <path
      transform="rotate(180 146.14 326.935)"
      style={{
        fill: "#fafafa",
      }}
      d="M65.37 276.51H226.9v100.86H65.37z"
    />
    <path
      style={{
        fill: "#fafafa",
      }}
      d="M212.33 382.4h14.57v-14.62h-29.85z"
    />
    <path
      transform="rotate(180 146.14 326.71)"
      style={{
        fill: "#f0f0f0",
      }}
      d="M76.68 314.09H215.6v25.24H76.68z"
    />
    <path
      transform="rotate(180 146.14 357.345)"
      style={{
        fill: "#f0f0f0",
      }}
      d="M76.68 344.73H215.6v25.24H76.68z"
    />
    <path
      d="M103.08 311.9h86.11a4.58 4.58 0 0 1 4.58 4.58v.31H98.51v-.31a4.58 4.58 0 0 1 4.57-4.58"
      transform="rotate(180 146.14 314.345)"
      style={{
        fill: "#fafafa",
      }}
    />
    <path
      transform="rotate(180 146.14 296.075)"
      style={{
        fill: "#f0f0f0",
      }}
      d="M76.68 283.46H215.6v25.24H76.68z"
    />
    <path
      d="M103.08 281.27h86.11a4.58 4.58 0 0 1 4.58 4.58v.31H98.51v-.31a4.58 4.58 0 0 1 4.57-4.58"
      transform="rotate(180 146.14 283.71)"
      style={{
        fill: "#fafafa",
      }}
    />
    <path
      d="M103.08 342.54h86.11a4.58 4.58 0 0 1 4.58 4.58v.31H98.51v-.31a4.58 4.58 0 0 1 4.57-4.58"
      transform="rotate(180 146.14 344.985)"
      style={{
        fill: "#fafafa",
      }}
    />
    <path
      transform="rotate(180 142.96 128.945)"
      style={{
        fill: "#e6e6e6",
      }}
      d="M74.07 83.83h137.78v90.23H74.07z"
    />
    <path
      transform="rotate(180 139.875 128.945)"
      style={{
        fill: "#f0f0f0",
      }}
      d="M69.86 83.83h140.02v90.23H69.86z"
    />
    <path
      transform="rotate(180 142.96 182.91)"
      style={{
        fill: "#e6e6e6",
      }}
      d="M74.07 174.06h137.78v17.71H74.07z"
    />
    <path
      transform="rotate(180 132.87 182.91)"
      style={{
        fill: "#f0f0f0",
      }}
      d="M62.86 174.06h140.02v17.71H62.86z"
    />
    <path
      transform="rotate(90 139.875 128.945)"
      style={{
        fill: "#fafafa",
      }}
      d="M100.65 64.82h78.46v128.25h-78.46z"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M175.08 168.17 158.7 89.72h-25.56l16.38 78.45z"
    />
    <path
      d="M201.27 162.32a.42.42 0 0 0 .42-.43V93.55a.41.41 0 0 0-.42-.42.42.42 0 0 0-.42.42v68.34a.42.42 0 0 0 .42.43"
      style={{
        fill: "#f0f0f0",
      }}
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="m144.03 168.17-16.38-78.45h-9.97l16.38 78.45z"
    />
    <path
      transform="rotate(90 76.125 128.945)"
      style={{
        fill: "#e6e6e6",
      }}
      d="M36.9 128.57h78.46v.75H36.9z"
    />
    <path
      style={{
        fill: "#ebebeb",
        opacity: 0.6000000000000001,
      }}
      d="M68.47 98.59h137.78l.54-6.59H69.01z"
    />
    <path
      style={{
        fill: "#ebebeb",
        opacity: 0.6000000000000001,
      }}
      d="M68.47 102.31h137.78l.54-6.59H69.01z"
    />
    <path
      style={{
        fill: "#ebebeb",
        opacity: 0.6000000000000001,
      }}
      d="M68.47 106.02h137.78l.54-6.58H69.01z"
    />
    <path
      style={{
        fill: "#ebebeb",
        opacity: 0.6000000000000001,
      }}
      d="M68.47 109.74h137.78l.54-6.59H69.01z"
    />
    <path
      style={{
        fill: "#ebebeb",
        opacity: 0.6000000000000001,
      }}
      d="M68.47 113.45h137.78l.54-6.58H69.01z"
    />
    <path
      style={{
        fill: "#ebebeb",
        opacity: 0.6000000000000001,
      }}
      d="M68.47 117.17h137.78l.54-6.59H69.01z"
    />
    <path
      transform="rotate(180 98.395 246.725)"
      style={{
        fill: "#f5f5f5",
      }}
      d="M96.01 220.18h4.76v53.09h-4.76z"
    />
    <path
      transform="rotate(180 97.3 246.69)"
      style={{
        fill: "#fafafa",
      }}
      d="M96.63 220.14h1.35v53.09h-1.35z"
    />
    <path
      transform="rotate(180 98.8 246.69)"
      style={{
        fill: "#fafafa",
      }}
      d="M98.54 220.14h.53v53.09h-.53z"
    />
    <path
      d="M80.76 272.06H116a4.44 4.44 0 0 1-4.44 4.44H85.21a4.44 4.44 0 0 1-4.44-4.44z"
      transform="rotate(180 98.395 274.285)"
      style={{
        fill: "#f0f0f0",
      }}
    />
    <path
      d="M89.84 253.14a1.38 1.38 0 0 0 1.37-1.37V217a1.37 1.37 0 0 0-1.37-1.37 1.37 1.37 0 0 0-1.38 1.37v34.81a1.38 1.38 0 0 0 1.38 1.33"
      style={{
        fill: "#f0f0f0",
      }}
    />
    <path
      style={{
        fill: "#e0e0e0",
      }}
      d="M77.07 232.8h42.65l-4.91-29.8H81.98z"
    />
    <ellipse
      cx={250}
      cy={416.24}
      rx={193.89}
      ry={11.32}
      style={{
        fill: "#f5f5f5",
      }}
    />
    <path
      transform="rotate(-4.12 104.297 211.558)"
      style={{
        fill: "#2563eb",
      }}
      d="M103.78 202.37h1v18.49h-1z"
    />
    <path
      transform="rotate(-4.12 105.86 233.884)"
      style={{
        fill: "#2563eb",
      }}
      d="M105.38 230.35h1v6.96h-1z"
    />
    <path
      d="M337.71 315.16H123.55a9.65 9.65 0 0 1-9.44-8.81l-10.52-146.13a8.1 8.1 0 0 1 8.17-8.8h214.16a9.65 9.65 0 0 1 9.44 8.8l10.52 146.13a8.11 8.11 0 0 1-8.17 8.81"
      style={{
        fill: "#2563eb",
      }}
    />
    <path
      d="M338.53 315.16H124.37a9.65 9.65 0 0 1-9.44-8.81l-10.52-146.13a8.1 8.1 0 0 1 8.17-8.8h214.16a9.65 9.65 0 0 1 9.44 8.8l10.52 146.13a8.1 8.1 0 0 1-8.17 8.81"
      style={{
        fill: "#2563eb",
      }}
    />
    <path
      d="M338.53 315.16H124.37a9.65 9.65 0 0 1-9.44-8.81l-10.52-146.13a8.1 8.1 0 0 1 8.17-8.8h214.16a9.65 9.65 0 0 1 9.44 8.8l10.52 146.13a8.1 8.1 0 0 1-8.17 8.81"
      style={{
        fill: "#fff",
        opacity: 0.5,
      }}
    />
    <path
      d="M327.06 155.82H112.18c-5.47.45-4.35 8.78 1.17 8.78h214.52c5.53 0 5.45-8.33-.09-8.78Z"
      style={{
        fill: "#2563eb",
      }}
    />
    <path
      d="M118.48 160.22a1.85 1.85 0 0 1-1.88 2 2.2 2.2 0 0 1-2.16-2 1.85 1.85 0 0 1 1.87-2 2.2 2.2 0 0 1 2.17 2m6.87 0a1.85 1.85 0 0 1-1.88 2 2.2 2.2 0 0 1-2.16-2 1.85 1.85 0 0 1 1.87-2 2.2 2.2 0 0 1 2.17 2m6.86 0a1.85 1.85 0 0 1-1.87 2 2.19 2.19 0 0 1-2.16-2 1.84 1.84 0 0 1 1.87-2 2.2 2.2 0 0 1 2.16 2"
      style={{
        fill: "#fafafa",
      }}
    />
    <path
      d="M332.85 300.58H128a3.49 3.49 0 0 1-3.42-3.2l-8.65-120.17a2.92 2.92 0 0 1 3-3.19h204.9a3.48 3.48 0 0 1 3.42 3.19l8.66 120.17a2.94 2.94 0 0 1-3.06 3.2"
      style={{
        fill: "#fff",
      }}
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="m246.53 254.8-3.34-46.32-10.1-6.08h-27.81l3.78 52.4z"
    />
    <path
      d="M246.53 255.28h-37.47a.48.48 0 0 1-.49-.45l-3.77-52.4a.47.47 0 0 1 .13-.36.48.48 0 0 1 .35-.16h27.81a.55.55 0 0 1 .25.07l10.1 6.08a.48.48 0 0 1 .24.38l3.32 46.32a.46.46 0 0 1-.13.37.47.47 0 0 1-.34.15m-37-1H246l-3.28-45.55-9.72-5.85h-27.2Z"
      style={{
        fill: "#2563eb",
      }}
    />
    <path
      style={{
        fill: "#ebebeb",
      }}
      d="m243.19 208.48-10.1-6.08 3.71 8.06z"
    />
    <path
      d="M236.8 210.94a.49.49 0 0 1-.44-.28l-3.71-8.06a.5.5 0 0 1 .11-.57.5.5 0 0 1 .58-.05l10.1 6.08a.5.5 0 0 1 .24.48.49.49 0 0 1-.34.4l-6.4 2Zm-2.61-7.32 2.87 6.25 5-1.53ZM221 226a2 2 0 0 1-2 2.11 2.31 2.31 0 0 1-2.26-2.11 1.94 1.94 0 0 1 2-2.12A2.32 2.32 0 0 1 221 226m13.7 0a1.94 1.94 0 0 1-2 2.11 2.32 2.32 0 0 1-2.27-2.11 2 2 0 0 1 2-2.12 2.31 2.31 0 0 1 2.27 2.12m3.88 13.74a.49.49 0 0 1-.48-.45c-.25-3.41-5.59-6.18-11.9-6.18-4.19 0-7.95 1.25-9.81 3.25a3.74 3.74 0 0 0-1.14 2.86.49.49 0 0 1-1 .07 4.76 4.76 0 0 1 1.4-3.59c2-2.19 6.07-3.56 10.52-3.56 6.93 0 12.58 3.11 12.86 7.08a.48.48 0 0 1-.45.51Zm-25.41-18.02a.5.5 0 0 1-.33-.13.49.49 0 0 1 0-.69l2.13-2.29a.49.49 0 0 1 .68 0 .48.48 0 0 1 0 .68l-2.13 2.29a.48.48 0 0 1-.35.14m24.41 0a.55.55 0 0 1-.33-.13l-2.45-2.29a.48.48 0 0 1 0-.69.49.49 0 0 1 .68 0l2.45 2.29a.48.48 0 0 1 0 .68.52.52 0 0 1-.35.14m-35.32 43.43h2.26l3.26 4.34-.31-4.34h2.28l.56 7.84H208l-3.24-4.31.31 4.31h-2.28Zm9.07 3.92a3.8 3.8 0 0 1 .86-3 3.76 3.76 0 0 1 2.9-1.07 4.38 4.38 0 0 1 3.09 1.05 4.32 4.32 0 0 1 1.27 2.94 4.8 4.8 0 0 1-.3 2.25 3 3 0 0 1-1.24 1.37 4.16 4.16 0 0 1-2.14.49 5.25 5.25 0 0 1-2.23-.42 3.6 3.6 0 0 1-1.5-1.34 4.66 4.66 0 0 1-.71-2.27m2.43 0a2.73 2.73 0 0 0 .56 1.7 1.59 1.59 0 0 0 1.24.52 1.38 1.38 0 0 0 1.17-.51A2.75 2.75 0 0 0 217 269a2.57 2.57 0 0 0-.56-1.62 1.64 1.64 0 0 0-1.25-.51 1.38 1.38 0 0 0-1.14.52 2.53 2.53 0 0 0-.29 1.7Zm10.39-3.92h3.6a4.5 4.5 0 0 1 1.74.29 3.06 3.06 0 0 1 1.14.83 3.8 3.8 0 0 1 .71 1.25 6.3 6.3 0 0 1 .3 1.52 5.1 5.1 0 0 1-.15 1.95 2.8 2.8 0 0 1-.71 1.16 2.3 2.3 0 0 1-1 .62 5.6 5.6 0 0 1-1.43.22h-3.59Zm2.55 1.78.31 4.28h.59a2.45 2.45 0 0 0 1.07-.17 1 1 0 0 0 .46-.59 3.5 3.5 0 0 0 .08-1.36 2.72 2.72 0 0 0-.53-1.7 1.8 1.8 0 0 0-1.38-.46Zm10.75 4.76h-2.75l-.29 1.3h-2.47l2.38-7.84H237l3.51 7.84h-2.54Zm-.63-1.69-1.06-2.82-.66 2.82Zm2.55-4.85h7.36l.14 1.94h-2.47l.42 5.9h-2.42l-.42-5.9h-2.47Zm13 6.54h-2.75l-.29 1.3h-2.47l2.38-7.84h2.64l3.5 7.84h-2.53Zm-.63-1.69-1.07-2.82L250 270Z"
      style={{
        fill: "#2563eb",
      }}
    />
  </svg>
);
