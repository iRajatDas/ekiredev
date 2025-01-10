import React from "react";

const SiteFooter = () => {
  return (
    <footer className="bg-white border-t px-4 sm:px-6 md:px-8 py-4 text-sm text-gray-500">
      <div className="flex justify-between max-md:flex-col-reverse max-md:gap-5">
        <span>Copyright © 2025 Ekire LTD. All rights reserved.</span>
        <div className="flex gap-4 max-md:flex-col">
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
  );
};

export default SiteFooter;
