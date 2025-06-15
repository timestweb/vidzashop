// components/ui/Tabs.tsx
"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import React from "react";
import clsx from "clsx";

interface TabItem {
  id: string; // Add unique identifier for better key management
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTab?: string; // Allow setting default active tab
  onChange?: (tabId: string) => void; // Callback for tab changes
}

export default function Tabs({ tabs, defaultTab, onChange }: TabsProps) {
  const defaultIndex = defaultTab 
    ? tabs.findIndex(tab => tab.id === defaultTab) 
    : 0;

  const handleTabChange = (index: number) => {
    if (onChange) {
      onChange(tabs[index].id);
    }
  };

  return (
    <TabGroup defaultIndex={defaultIndex} onChange={handleTabChange}>
      <TabList className="flex space-x-6 border-b border-gray-200">
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            className={({ selected }) =>
              clsx(
                "relative py-3 font-medium cursor-pointer text-sm text-primary focus:outline-none",
                selected ? "text-primary font-semibold" : "hover:opacity-80"
              )
            }
          >
            {({ selected }) => (
              <div className="flex flex-col items-center">
                <span>{tab.label}</span>
                <span
                  className={clsx(
                    "absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300",
                    selected ? "bg-success" : "bg-transparent"
                  )}
                />
              </div>
            )}
          </Tab>
        ))}
      </TabList>

      <TabPanels className="mt-6">
        {tabs.map((tab) => (
          <TabPanel key={tab.id} className="grid grid-cols-6 gap-6">
            {tab.content}
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
}