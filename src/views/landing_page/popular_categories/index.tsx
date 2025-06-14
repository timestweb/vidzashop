import Tabs from "@/components/tab";
import React from "react";

function Item({ title, count }: { title: string; count: number }) {
  return (
    <div className="font-manrope text-primary">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="text-[0.65rem]">{count} items found</p>
    </div>
  );
}

export default function PopularCategories() {
  const categoryData = [
    {
      id: "construction",
      label: "Construction",
      items: [
        {
          id: "excavator",
          title: "Excavator",
          count: 100,
          description: "Heavy construction equipment",
        },
        {
          id: "bulldozer",
          title: "Bulldozer",
          count: 75,
          description: "Earth-moving equipment",
        },
        {
          id: "crane",
          title: "Crane",
          count: 45,
          description: "Lifting equipment",
        },
        {
          id: "mixer",
          title: "Concrete Mixer",
          count: 32,
          description: "Concrete mixing equipment",
        },
        {
          id: "loader",
          title: "Wheel Loader",
          count: 28,
          description: "Loading equipment",
        },
        {
          id: "grader",
          title: "Motor Grader",
          count: 20,
          description: "Road construction equipment",
        },
        {
          id: "dump-truck",
          title: "Dump Truck",
          count: 18,
          description: "Heavy-duty transport vehicle",
        },
        {
          id: "backhoe",
          title: "Backhoe",
          count: 15,
          description: "Digging and loading equipment",
        },
        {
          id: "forklift",
          title: "Forklift",
          count: 12,
          description: "Material handling equipment",
        },
        {
          id: "compactor",
          title: "Compactor",
          count: 8,
          description: "Soil compaction equipment",
        },
        {
          id: "paver",
          title: "Paver",
          count: 6,
          description: "Road paving equipment",
        },
        {
          id: "trencher",
          title: "Trencher",
          count: 4,
          description: "Trench digging equipment",
        },
        {
          id: "scaffolding",
          title: "Scaffolding",
          count: 22,
          description: "Temporary support structure for workers",
        },
        {
          id: "asphalt-cutter",
          title: "Asphalt Cutter",
          count: 10,
          description: "Pavement cutting equipment",
        },
        {
          id: "tower-crane",
          title: "Tower Crane",
          count: 13,
          description: "Tall crane for vertical construction",
        },
        {
          id: "jackhammer",
          title: "Jackhammer",
          count: 17,
          description: "Handheld pneumatic drill",
        },
        {
          id: "scissor-lift",
          title: "Scissor Lift",
          count: 9,
          description: "Elevated work platform",
        },
        {
          id: "pile-driver",
          title: "Pile Driver",
          count: 8,
          description: "Foundation driving machine",
        },
        {
          id: "road-roller",
          title: "Road Roller",
          count: 14,
          description: "Compacts soil, gravel, and asphalt",
        },
        {
          id: "concrete-pump",
          title: "Concrete Pump",
          count: 6,
          description: "Transfers liquid concrete",
        },
        {
          id: "cement-mixer-truck",
          title: "Cement Mixer Truck",
          count: 11,
          description: "Mobile concrete mixing vehicle",
        },
        {
          id: "laser-level",
          title: "Laser Level",
          count: 19,
          description: "Precision leveling equipment",
        },
        {
          id: "rebar-cutter",
          title: "Rebar Cutter",
          count: 7,
          description: "Steel rod cutting equipment",
        },
        {
          id: "brick-cutter",
          title: "Brick Cutter",
          count: 5,
          description: "Cuts bricks and masonry blocks",
        },
      ],
    },
    {
      id: "automobiles",
      label: "Auto Mobiles",
      items: [
        {
          id: "sedan",
          title: "Sedan",
          count: 250,
          description: "Passenger cars",
        },
        {
          id: "suv",
          title: "SUV",
          count: 180,
          description: "Sport utility vehicles",
        },
        {
          id: "truck",
          title: "Truck",
          count: 95,
          description: "Commercial vehicles",
        },
        {
          id: "motorcycle",
          title: "Motorcycle",
          count: 67,
          description: "Two-wheeled vehicles",
        },
        {
          id: "van",
          title: "Van",
          count: 45,
          description: "Multi-purpose vehicles",
        },
        {
          id: "coupe",
          title: "Coupe",
          count: 32,
          description: "Two-door sports cars",
        },
      ],
    },
    {
      id: "telecommunication",
      label: "Telecommunication",
      items: [
        {
          id: "router",
          title: "Network Router",
          count: 85,
          description: "Networking equipment",
        },
        {
          id: "antenna",
          title: "Antenna",
          count: 56,
          description: "Signal transmission equipment",
        },
        {
          id: "server",
          title: "Server",
          count: 34,
          description: "Data processing equipment",
        },
        {
          id: "switch",
          title: "Switch",
          count: 28,
          description: "Network switching equipment",
        },
        {
          id: "modem",
          title: "Modem",
          count: 22,
          description: "Internet connection equipment",
        },
        {
          id: "repeater",
          title: "Repeater",
          count: 15,
          description: "Signal amplification equipment",
        },
      ],
    },
    {
      id: "oil-gas",
      label: "Oil & Gas",
      items: [
        {
          id: "pump",
          title: "Industrial Pump",
          count: 42,
          description: "Fluid transfer equipment",
        },
        {
          id: "valve",
          title: "Control Valve",
          count: 38,
          description: "Flow control equipment",
        },
        {
          id: "compressor",
          title: "Gas Compressor",
          count: 25,
          description: "Gas compression equipment",
        },
        {
          id: "pipeline",
          title: "Pipeline",
          count: 18,
          description: "Fluid transport system",
        },
        {
          id: "tank",
          title: "Storage Tank",
          count: 14,
          description: "Fluid storage equipment",
        },
        {
          id: "gauge",
          title: "Pressure Gauge",
          count: 10,
          description: "Pressure measurement equipment",
        },
      ],
    },
    {
      id: "industrial",
      label: "Industrial",
      items: [
        {
          id: "generator",
          title: "Generator",
          count: 65,
          description: "Power generation equipment",
        },
        {
          id: "conveyor",
          title: "Conveyor Belt",
          count: 48,
          description: "Material handling equipment",
        },
        {
          id: "press",
          title: "Hydraulic Press",
          count: 31,
          description: "Manufacturing equipment",
        },
        {
          id: "fan",
          title: "Industrial Fan",
          count: 26,
          description: "Ventilation equipment",
        },
        {
          id: "welder",
          title: "Welding Machine",
          count: 19,
          description: "Metal joining equipment",
        },
        {
          id: "lathe",
          title: "Lathe Machine",
          count: 13,
          description: "Metal shaping equipment",
        },
      ],
    },
  ];

  const categories = categoryData.map((category) => ({
    id: category.id,
    label: category.label,
    content: (
      <>
        {category.items.map((item) => (
          <Item key={item.id} title={item.title} count={item.count} />
        ))}
      </>
    ),
  }));

  return (
    <div className="bg-primary-background py-20 px-8">
      <h3 className="text-gendra text-2xl text-primary">
        Popular Categories near you
      </h3>
      <div className="py-10">
        <Tabs tabs={categories} />
      </div>
    </div>
  );
}
