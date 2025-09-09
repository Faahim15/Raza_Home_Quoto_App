const categories = [
  {
    title: "Maintenance",
    data: [
      {
        name: "Air Conditioning",
        icon: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Plumbing",
        icon: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Siding Repair",
        icon: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Electrical Work",
        icon: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "HVAC Maintenance",
        icon: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop&crop=center",
      },
    ],
  },
  {
    title: "Cleaning",
    data: [
      {
        name: "Floor Cleaning",
        icon: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Gutter Cleaning",
        icon: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Carpet Cleaning",
        icon: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Window Cleaning",
        icon: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=400&fit=crop&crop=center",
      },
    ],
  },
  {
    title: "Home Improvement",
    data: [
      {
        name: "Drilling & Installation",
        icon: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Lawn Care",
        icon: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Weed Control",
        icon: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
      },
    ],
  },
  {
    title: "Security",
    data: [
      {
        name: "Security Cameras",
        icon: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Burglar Alarm",
        icon: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Smart Locks",
        icon: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop&crop=center",
      },
    ],
  },
  {
    title: "Handyman Services",
    data: [
      {
        name: "General Repairs",
        icon: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Furniture Assembly",
        icon: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Wall Mounting",
        icon: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=400&fit=crop&crop=center",
      },
    ],
  },
  {
    title: "Painting Services",
    data: [
      {
        name: "Interior Painting",
        icon: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Exterior Painting",
        icon: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Cabinet Refinishing",
        icon: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=400&h=400&fit=crop&crop=center",
      },
    ],
  },
  {
    title: "Other Services",
    data: [
      {
        name: "Appliance Repair",
        icon: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Pest Control",
        icon: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=400&fit=crop&crop=center",
      },
      {
        name: "Pool Maintenance",
        icon: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=400&fit=crop&crop=center",
      },
    ],
  },
];

export const ProvidersCategories = [
  {
    title: "Electrician Providers",
    data: [
      {
        id: "1",
        name: "Michael Johnson",
        occupation: "Licensed Electrician",
        rating: 4.9,
        price: "$85/hr",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      },
      {
        id: "2",
        name: "David Rodriguez",
        occupation: "Master Electrician",
        rating: 4.8,
        price: "$95/hr",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      },
      {
        id: "3",
        name: "James Wilson",
        occupation: "Electrical Contractor",
        rating: 4.7,
        price: "$90/hr",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      },
      {
        id: "4",
        name: "Robert Chen",
        occupation: "Commercial Electrician",
        rating: 4.9,
        price: "$100/hr",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      },
    ],
  },
  {
    title: "Plumber Providers",
    data: [
      {
        id: "5",
        name: "Thomas Anderson",
        occupation: "Master Plumber",
        rating: 4.8,
        price: "$80/hr",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      },
      {
        id: "6",
        name: "Carlos Martinez",
        occupation: "Licensed Plumber",
        rating: 4.7,
        price: "$75/hr",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      },
      {
        id: "7",
        name: "Kevin Thompson",
        occupation: "Drain Specialist",
        rating: 4.6,
        price: "$70/hr",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      },
      {
        id: "8",
        name: "Ahmed Hassan",
        occupation: "Emergency Plumber",
        rating: 4.9,
        price: "$85/hr",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      },
    ],
  },
  {
    title: "HVAC Providers",
    data: [
      {
        id: "9",
        name: "Mark Stevens",
        occupation: "HVAC Technician",
        rating: 4.8,
        price: "$90/hr",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      },
      {
        id: "10",
        name: "Daniel Kim",
        occupation: "AC Specialist",
        rating: 4.7,
        price: "$85/hr",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      },
      {
        id: "11",
        name: "Ryan O'Connor",
        occupation: "Heating Expert",
        rating: 4.9,
        price: "$95/hr",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      },
      {
        id: "12",
        name: "Luis Garcia",
        occupation: "HVAC Installer",
        rating: 4.6,
        price: "$80/hr",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      },
    ],
  },
  {
    title: "Handyman Providers",
    data: [
      {
        id: "13",
        name: "Steve Miller",
        occupation: "General Handyman",
        rating: 4.7,
        price: "$60/hr",
        image:
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      },
      {
        id: "14",
        name: "Tony Russo",
        occupation: "Home Repair Specialist",
        rating: 4.8,
        price: "$65/hr",
        image:
          "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop&crop=face",
      },
      {
        id: "15",
        name: "Frank Williams",
        occupation: "Maintenance Expert",
        rating: 4.6,
        price: "$55/hr",
        image:
          "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
      },
      {
        id: "16",
        name: "Alex Turner",
        occupation: "Fix-It Professional",
        rating: 4.9,
        price: "$70/hr",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      },
    ],
  },
];
export default categories;
