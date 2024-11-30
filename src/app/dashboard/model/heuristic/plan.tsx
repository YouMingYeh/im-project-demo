import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Plan() {
  return (
    <div className="max-w-sm space-y-4">
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="選擇想要規劃的參數..." />
        </SelectTrigger>
        <SelectContent>
          {data.map((item) => (
            <SelectItem key={item.name} value={item.name}>
              <div className="flex flex-col">
                <span className="font-bold">{item.name}</span>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button className="w-full">確認</Button>
    </div>
  );
}
const data = [
  {
    name: "Plan 1",
  },
  {
    name: "Plan 2",
  },
  {
    name: "Plan 3",
  },
  {
    name: "Plan 4",
  },
];
