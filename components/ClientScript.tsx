"use client";
import { useEffect } from "react";

export default function ClientScript() {
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typeof window !== "undefined") {
        const s1 = document.createElement("script");
        s1.async = true;
        s1.src = "https://embed.tawk.to/677ab10d49e2fd8dfe02cf01/1igrk77hr";
        s1.charset = "UTF-8";
        s1.setAttribute("crossorigin", "*");
        const s0 = document.getElementsByTagName("script")[0];
        s0.parentNode?.insertBefore(s1, s0);
      }
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timeout);
  }, []);

  return null; // This component doesn't render anything
}
