"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <ThemeProvider enableSystem={true} attribute="class">
    <div>{children}</div>
    // </ThemeProvider>
  );
}

export default Providers;
