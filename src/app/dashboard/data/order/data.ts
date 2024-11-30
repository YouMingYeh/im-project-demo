export type Order = {
  serial_number: string;
  name: string;
  suborders: {
    window: {
      id: string;
      name: string;
      width: number;
      height: number;
      color: string;
      notes: string;
      needed_works: number[];
      transfer_ratio: number[];
      present_storage: number[];
    };
    count: number;
  }[];
  deadline: string;
  early_penalty: number;
  late_penalty: number;
  complete_ratio: number;
};

export const orders: Order[] = [
  {
    serial_number: "ORD-001",
    name: "第一筆訂單",
    suborders: [
      {
        window: {
          id: "c448a4bf-01a5-4c41-91e2-87de3debc2bf",
          name: "窗戶 1",
          width: 100,
          height: 150,
          color: "白色",
          notes: "標準安裝",
          needed_works: [1, 2, 3],
          transfer_ratio: [0.5, 0.7, 0.9],
          present_storage: [10, 20, 30],
        },
        count: 2,
      },
    ],
    deadline: "2024-12-31T23:59:59Z",
    early_penalty: 100,
    late_penalty: 200,
    complete_ratio: 0.5,
  },
  // Add more sample orders here if needed
];
