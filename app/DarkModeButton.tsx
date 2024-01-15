"use client";
import React from "react";
import { useState, useEffect } from "react";
function DarkModeButton() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return <div></div>;
}

export default DarkModeButton;
