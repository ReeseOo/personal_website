"use client";

import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { portfolio } from "@/config/portfolio";

const calendarTheme = {
  dark:  ["#111111", "#1f1f1f", "#383838", "#5a5a5a", "#888888"] as [string, string, string, string, string],
  light: ["#ebebeb", "#c8c8c8", "#a0a0a0", "#787878", "#505050"] as [string, string, string, string, string],
};

export function GitHubGraph() {
  const { githubUsername } = portfolio;
  const [dark, setDark] = useState(true);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));

    const observer = new MutationObserver(() => {
      setDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => observer.disconnect();
  }, []);

  if (!githubUsername || githubUsername === "yourusername") {
    return (
      <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-[#e4e4e7] dark:border-[#1e1e1e]">
        <p className="px-6 text-center text-xs text-[#bbb] dark:text-[#444]">
          Set{" "}
          <code className="rounded bg-[#f0f0f0] px-1 py-0.5 font-mono text-[#999] dark:bg-[#111] dark:text-[#666]">
            githubUsername
          </code>{" "}
          in{" "}
          <code className="rounded bg-[#f0f0f0] px-1 py-0.5 font-mono text-[#999] dark:bg-[#111] dark:text-[#666]">
            config/portfolio.ts
          </code>{" "}
          to display your contribution graph
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <GitHubCalendar
        username={githubUsername}
        theme={calendarTheme}
        colorScheme={dark ? "dark" : "light"}
        blockSize={12}
        blockMargin={3}
        fontSize={11}
        style={{ color: dark ? "#888888" : "#555555", fontFamily: "inherit" }}
      />
    </div>
  );
}
