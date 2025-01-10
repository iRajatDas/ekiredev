"use client";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import React from "react";
// import jsCookie from "js-cookie";

const ISidebarProvider = ({ children }: { children: React.ReactNode }) => {
  // const open = jsCookie.get("sidebar:state") === "true";
  // console.log("open", open);

  return (
    <SidebarProvider
      style={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        "--sidebar-width": "18rem",
        "--sidebar-width-mobile": "20rem",
      }}
    >
      <AppSidebar />
      {children}
    </SidebarProvider>
  );
};

export default ISidebarProvider;
