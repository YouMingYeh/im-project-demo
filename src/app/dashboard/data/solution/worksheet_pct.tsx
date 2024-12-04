"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

// Define the type for our data
type CsvData = {
  [key: string]: string;
};

// Parse the CSV string
const parseCsv = (csvString: string): CsvData[] => {
  const lines = csvString.split("\n");
  const headers = lines[0].split(",").map((header) => header.replace(/"/g, ""));

  return lines.slice(1).map((line) => {
    const values = line.split(",").map((value) => value.replace(/"/g, ""));
    return headers.reduce((obj, header, index) => {
      obj[header] = values[index] || "";
      return obj;
    }, {} as CsvData);
  });
};

export default function WorksheetPct() {
  const [data, setData] = useState<CsvData[]>([]);
  const [columns, setColumns] = useState<ColumnDef<CsvData>[]>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  useEffect(() => {
    const csvString = `"stage_id","2024-06-03","2024-06-04","2024-06-05","2024-06-06","2024-06-07","2024-06-10","2024-06-11","2024-06-12","2024-06-13","2024-06-14","2024-06-17","2024-06-18","2024-06-19","2024-06-20","2024-06-21","2024-06-24","2024-06-25","2024-06-26","2024-06-27","2024-06-28","2024-07-01","2024-07-02","2024-07-03","2024-07-04","2024-07-05","2024-07-08","2024-07-09","2024-07-10","2024-07-11","2024-07-12","2024-07-15","2024-07-16","2024-07-17","2024-07-18","2024-07-19","2024-07-22","2024-07-23","2024-07-24","2024-07-25","2024-07-26","2024-07-29","2024-07-30","2024-07-31","2024-08-01","2024-08-02","2024-08-05","2024-08-06","2024-08-07","2024-08-08","2024-08-09","2024-08-12","2024-08-13","2024-08-14","2024-08-15","2024-08-16","2024-08-19","2024-08-20","2024-08-21","2024-08-22","2024-08-23","2024-08-26","2024-08-27","2024-08-28","2024-08-29","2024-08-30","2024-09-02","2024-09-03","2024-09-04","2024-09-05","2024-09-06","2024-09-09","2024-09-10","2024-09-11","2024-09-12","2024-09-13","2024-09-16","2024-09-17","2024-09-18","2024-09-19","2024-09-20","2024-09-23","2024-09-24","2024-09-25","2024-09-26","2024-09-27","2024-09-30","2024-10-01","2024-10-02","2024-10-03","2024-10-04","2024-10-07","2024-10-08","2024-10-09","2024-10-10","2024-10-11","2024-10-14","2024-10-15","2024-10-16","2024-10-17","2024-10-18","2024-10-21","2024-10-22","2024-10-23","2024-10-24","2024-10-25","2024-10-28","2024-10-29","2024-10-30","2024-10-31","2024-11-01","2024-11-04","2024-11-05","2024-11-06","2024-11-07","2024-11-08","2024-11-11","2024-11-12","2024-11-13","2024-11-14","2024-11-15" 
"1","SO240918007-AIW-格睿-全園C區-推射+備料單V-normal 100.00% SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 1.93% SO240924001-AIW-大丰張緯良等四戶-橫拉外框+備料單V-normal 15.13% ","SO240924001-AIW-大丰張緯良等四戶-橫拉外框+備料單V-normal 84.87% SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 7.44% ","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 32.84% ","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 32.84% ","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 24.95% SO240926006-鈞匠-誠益-賴錫堅住宅-複層玻璃V-normal 39.46% ","SO240926006-鈞匠-誠益-賴錫堅住宅-複層玻璃V-normal 56.37% SO240925008-宸璽-南投華新段二次-810橫拉+備料單V-normal 40.91% ","SO240925008-宸璽-南投華新段二次-810橫拉+備料單V-normal 59.09% SO240926006-鈞匠-誠益-賴錫堅住宅-複層玻璃V-normal 4.16% SO240918009-AIW-嘉大草屯廠房-推射V-normal 0.64% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 24.15% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 1.66% SO241001006-AIW-順欣營造-伸股段八戶-橫拉外框+備料單V-normal 100.00% SO240920001-格誠竹美A棟-橫拉+備料單V-normal 23.44% ","SO240920001-格誠竹美A棟-橫拉+備料單V-normal 56.83% SO240918009-AIW-嘉大草屯廠房-推射V-normal 0.00% ","SO240920001-格誠竹美A棟-橫拉+備料單V-normal 19.73% SO240918009-AIW-嘉大草屯廠房-推射V-normal 15.77% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 24.15% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 24.15% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 9.49% SO240911003-協興-埔心小張公寓12戶-橫拉內紗+備料單V-normal 30.04% ","SO240911003-協興-埔心小張公寓12戶-橫拉內紗+備料單V-normal 49.49% ","SO240911003-協興-埔心小張公寓12戶-橫拉內紗+備料單V-normal 20.47% SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 17.55% ","SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 29.94% ","SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 29.94% ","SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 22.58% ","","","","","","","","","","","","","","","SO240828011+12+13-王維盛-20門斗橫拉+備料單V-normal 11.21% ","SO240828011+12+13-王維盛-20門斗橫拉+備料單V-normal 66.24% ","SO240828011+12+13-王維盛-20門斗橫拉+備料單V-normal 22.56% SO240919010-協興-竟藝員水路-橫拉內紗+備料單V-normal 100.00% ","","","","","","","","","","","","","","","","","","","SO240919013-源鼎-沙崗李先生-橫拉複層玻璃+備料單V-normal 36.26% ","SO240919013-源鼎-沙崗李先生-橫拉複層玻璃+備料單V-normal 63.74% ","","SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 25.16% ","SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 44.39% ","SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 30.45% SO240913015-全倫-內門格子複玻+備料單V-normal 28.80% ","SO240913015-全倫-內門格子複玻+備料單V-normal 71.20% ","","","","SO240920003-格誠竹美B棟-橫拉+備料單V-normal 38.84% ","SO240920003-格誠竹美B棟-橫拉+備料單V-normal 61.16% SO240904010-AIW-廣達-大埔梁宅-橫拉-HD9004V-normal 100.00% ","","SO240923010-久大(埔鹽)-橫拉外框+備料單V-normal 100.00% ","","SO240920001-格誠竹美B棟-推射+備料單V-normal 42.85% ","SO240920001-格誠竹美B棟-推射+備料單V-normal 55.34% ","SO240920001-格誠竹美B棟-推射+備料單V-normal 1.81% ","","SO240905009-廣維-656-橫拉複層+備料單V-normal 57.23% ","SO240905009-廣維-656-橫拉複層+備料單V-normal 42.77% ","","SO240920001-格誠竹美A棟-推射+備料單V-normal 6.28% ","SO240920001-格誠竹美A棟-推射+備料單V-normal 63.77% ","SO240920001-格誠竹美A棟-推射+備料單V-normal 29.95% ","","","","","","SO240925006-宸璽-南投華新段二次-推射+備料單V-normal 100.00% ","","","SO240920007-比佛利山莊黃小姐-推射V-normal 13.80% ","SO240920007-比佛利山莊黃小姐-推射V-normal 86.20% SO240920005-廣達-苑裡羅宅-橫拉+備料單V-normal 77.19% ","SO240920005-廣達-苑裡羅宅-橫拉+備料單V-normal 22.81% ","","","","","","","SO240925005-宸璽-南投華新段二次-橫拉+備料單V-normal 100.00% ","","","SO240919019-AIW-葳翔-南屯永春段-推射V-normal 29.75% ","SO240919019-AIW-葳翔-南屯永春段-推射V-normal 58.93% ","SO240919019-AIW-葳翔-南屯永春段-推射V-normal 11.33% SO240918001-苗栗頭份興隆路-橫拉a+備料單V-normal 100.00% ","","","","","","SO240918005-鈞匠-寶鑫N區-橫拉內紗+備料單V-normal 57.04% ","SO240918005-鈞匠-寶鑫N區-橫拉內紗+備料單V-normal 42.96% ","","SO240919011-協興-竟藝員水路-橫拉複玻內紗+備料單V-normal 100.00% ","","","SO240904005-AIW-泰和茂-B棟1F B1F-推射+備料單V-normal 51.54% ","SO240904005-AIW-泰和茂-B棟1F B1F-推射+備料單V-normal 48.46% ","SO240918004-鈞匠-巨林南館4戶-浴廁門+備料單V-normal 40.98% ","SO240918004-鈞匠-巨林南館4戶-浴廁門+備料單V-normal 59.02% ","","","" 
"2","SO240918007-AIW-格睿-全園C區-推射+備料單V-normal 24.55% ","SO240918007-AIW-格睿-全園C區-推射+備料單V-normal 75.45% SO240924001-AIW-大丰張緯良等四戶-橫拉外框+備料單V-normal 21.85% ","SO240924001-AIW-大丰張緯良等四戶-橫拉外框+備料單V-normal 78.15% ","","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 7.64% ","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 31.75% ","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 30.11% SO240925008-宸璽-南投華新段二次-810橫拉+備料單V-normal 2.77% ","SO240925008-宸璽-南投華新段二次-810橫拉+備料單V-normal 53.56% SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 0.00% ","SO240925008-宸璽-南投華新段二次-810橫拉+備料單V-normal 43.66% SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 5.87% ","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 24.63% SO240926006-鈞匠-誠益-賴錫堅住宅-複層玻璃V-normal 7.13% SO241001006-AIW-順欣營造-伸股段八戶-橫拉外框+備料單V-normal 34.64% ","SO241001006-AIW-順欣營造-伸股段八戶-橫拉外框+備料單V-normal 65.36% SO240920001-格誠竹美A棟-橫拉+備料單V-normal 40.32% SO240926006-鈞匠-誠益-賴錫堅住宅-複層玻璃V-normal 0.01% ","SO240920001-格誠竹美A棟-橫拉+備料單V-normal 59.68% SO240926006-鈞匠-誠益-賴錫堅住宅-複層玻璃V-normal 5.95% ","SO240926006-鈞匠-誠益-賴錫堅住宅-複層玻璃V-normal 86.90% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 15.92% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 26.23% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 26.23% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 26.23% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 5.38% SO240911003-協興-埔心小張公寓12戶-橫拉內紗+備料單V-normal 35.53% ","SO240911003-協興-埔心小張公寓12戶-橫拉內紗+備料單V-normal 44.71% ","SO240911003-協興-埔心小張公寓12戶-橫拉內紗+備料單V-normal 19.76% SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 17.37% ","SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 31.13% ","SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 31.13% ","SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 20.37% ","","","","","","","","","","","","","SO240828011+12+13-王維盛-20門斗橫拉+備料單V-normal 8.11% SO240919010-協興-竟藝員水路-橫拉內紗+備料單V-normal 100.00% SO240828011+12+13-王維盛-20門斗橫拉+備料單V-normal 0.80% ","SO240828011+12+13-王維盛-20門斗橫拉+備料單V-normal 72.72% ","SO240828011+12+13-王維盛-20門斗橫拉+備料單V-normal 18.37% ","","","","","","","","","","","","","","","","","","SO240919013-源鼎-沙崗李先生-橫拉複層玻璃+備料單V-normal 23.43% ","SO240919013-源鼎-沙崗李先生-橫拉複層玻璃+備料單V-normal 76.57% ","","","SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 15.31% ","SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 6.51% SO240913015-全倫-內門格子複玻+備料單V-normal 100.00% SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 33.30% ","SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 44.87% ","","","","SO240920003-格誠竹美B棟-橫拉+備料單V-normal 50.20% SO240904010-AIW-廣達-大埔梁宅-橫拉-HD9004V-normal 43.82% ","SO240904010-AIW-廣達-大埔梁宅-橫拉-HD9004V-normal 56.18% SO240920003-格誠竹美B棟-橫拉+備料單V-normal 49.80% ","SO240923010-久大(埔鹽)-橫拉外框+備料單V-normal 53.34% ","SO240923010-久大(埔鹽)-橫拉外框+備料單V-normal 46.66% ","","","SO240920001-格誠竹美B棟-推射+備料單V-normal 61.83% ","SO240920001-格誠竹美B棟-推射+備料單V-normal 38.17% ","","SO240905009-廣維-656-橫拉複層+備料單V-normal 100.00% ","","","","SO240920001-格誠竹美A棟-推射+備料單V-normal 29.81% ","SO240920001-格誠竹美A棟-推射+備料單V-normal 56.21% ","SO240920001-格誠竹美A棟-推射+備料單V-normal 13.97% ","","","","SO240925006-宸璽-南投華新段二次-推射+備料單V-normal 25.89% ","SO240925006-宸璽-南投華新段二次-推射+備料單V-normal 74.11% ","","","SO240920007-比佛利山莊黃小姐-推射V-normal 100.00% ","SO240920005-廣達-苑裡羅宅-橫拉+備料單V-normal 91.70% ","SO240920005-廣達-苑裡羅宅-橫拉+備料單V-normal 8.30% ","","","","","","SO240925005-宸璽-南投華新段二次-橫拉+備料單V-normal 26.71% ","SO240925005-宸璽-南投華新段二次-橫拉+備料單V-normal 73.29% ","","","","SO240919019-AIW-葳翔-南屯永春段-推射V-normal 39.78% SO240918001-苗栗頭份興隆路-橫拉a+備料單V-normal 22.22% ","SO240918001-苗栗頭份興隆路-橫拉a+備料單V-normal 77.78% SO240919019-AIW-葳翔-南屯永春段-推射V-normal 36.60% ","SO240919019-AIW-葳翔-南屯永春段-推射V-normal 23.62% ","","","","","SO240918005-鈞匠-寶鑫N區-橫拉內紗+備料單V-normal 12.59% ","SO240918005-鈞匠-寶鑫N區-橫拉內紗+備料單V-normal 50.39% ","SO240918005-鈞匠-寶鑫N區-橫拉內紗+備料單V-normal 10.74% SO240919011-協興-竟藝員水路-橫拉複玻內紗+備料單V-normal 100.00% SO240918005-鈞匠-寶鑫N區-橫拉內紗+備料單V-normal 26.28% ","","","","SO240904005-AIW-泰和茂-B棟1F B1F-推射+備料單V-normal 100.00% ","","SO240918004-鈞匠-巨林南館4戶-浴廁門+備料單V-normal 79.04% ","SO240918004-鈞匠-巨林南館4戶-浴廁門+備料單V-normal 20.96% ","","" 
"3","","SO240918007-AIW-格睿-全園C區-推射+備料單V-normal 44.28% ","SO240918007-AIW-格睿-全園C區-推射+備料單V-normal 55.72% SO240924001-AIW-大丰張緯良等四戶-橫拉外框+備料單V-normal 20.03% ","SO240924001-AIW-大丰張緯良等四戶-橫拉外框+備料單V-normal 79.97% ","","","","","SO240925008-宸璽-南投華新段二次-810橫拉+備料單V-normal 10.68% ","SO240925008-宸璽-南投華新段二次-810橫拉+備料單V-normal 57.82% ","SO240925008-宸璽-南投華新段二次-810橫拉+備料單V-normal 31.50% SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 15.76% ","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 11.56% SO241001006-AIW-順欣營造-伸股段八戶-橫拉外框+備料單V-normal 100.00% SO240920001-格誠竹美A棟-橫拉+備料單V-normal 1.87% ","SO240920001-格誠竹美A棟-橫拉+備料單V-normal 55.59% SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 0.00% ","SO240920001-格誠竹美A棟-橫拉+備料單V-normal 42.53% SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 8.13% ","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 34.62% ","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 29.92% SO240926006-鈞匠-誠益-賴錫堅住宅-複層玻璃V-normal 22.96% ","SO240926006-鈞匠-誠益-賴錫堅住宅-複層玻璃V-normal 77.04% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 18.94% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 23.84% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 23.84% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 23.84% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 9.55% SO240911003-協興-埔心小張公寓12戶-橫拉內紗+備料單V-normal 29.67% ","SO240911003-協興-埔心小張公寓12戶-橫拉內紗+備料單V-normal 49.49% ","SO240911003-協興-埔心小張公寓12戶-橫拉內紗+備料單V-normal 20.84% SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 19.48% ","SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 33.66% ","SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 33.66% ","SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 13.20% ","","","","","","","","","SO240919010-協興-竟藝員水路-橫拉內紗+備料單V-normal 3.35% ","SO240919010-協興-竟藝員水路-橫拉內紗+備料單V-normal 96.65% ","SO240828011+12+13-王維盛-20門斗橫拉+備料單V-normal 45.33% ","SO240828011+12+13-王維盛-20門斗橫拉+備料單V-normal 54.67% ","","","","","","","","","","","","","","","","","","SO240919013-源鼎-沙崗李先生-橫拉複層玻璃+備料單V-normal 14.69% ","SO240919013-源鼎-沙崗李先生-橫拉複層玻璃+備料單V-normal 85.31% ","","","SO240913015-全倫-內門格子複玻+備料單V-normal 100.00% ","SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 4.41% ","SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 55.11% ","SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 40.48% ","","","SO240904010-AIW-廣達-大埔梁宅-橫拉-HD9004V-normal 100.00% SO240920003-格誠竹美B棟-橫拉+備料單V-normal 56.37% ","SO240920003-格誠竹美B棟-橫拉+備料單V-normal 43.63% ","SO240923010-久大(埔鹽)-橫拉外框+備料單V-normal 100.00% ","","","","SO240920001-格誠竹美B棟-推射+備料單V-normal 24.23% ","SO240920001-格誠竹美B棟-推射+備料單V-normal 60.13% ","SO240920001-格誠竹美B棟-推射+備料單V-normal 15.63% SO240905009-廣維-656-橫拉複層+備料單V-normal 94.60% ","SO240905009-廣維-656-橫拉複層+備料單V-normal 5.40% ","","","","","SO240920001-格誠竹美A棟-推射+備料單V-normal 42.22% ","SO240920001-格誠竹美A棟-推射+備料單V-normal 56.19% ","SO240920001-格誠竹美A棟-推射+備料單V-normal 1.59% ","","","SO240925006-宸璽-南投華新段二次-推射+備料單V-normal 100.00% ","","","SO240920007-比佛利山莊黃小姐-推射V-normal 100.00% ","","SO240920005-廣達-苑裡羅宅-橫拉+備料單V-normal 91.58% ","SO240920005-廣達-苑裡羅宅-橫拉+備料單V-normal 8.42% ","","","","","","SO240925005-宸璽-南投華新段二次-橫拉+備料單V-normal 100.00% ","","","","","SO240918001-苗栗頭份興隆路-橫拉a+備料單V-normal 100.00% ","SO240919019-AIW-葳翔-南屯永春段-推射V-normal 33.79% ","SO240919019-AIW-葳翔-南屯永春段-推射V-normal 58.32% ","SO240919019-AIW-葳翔-南屯永春段-推射V-normal 7.89% ","","","","","SO240919011-協興-竟藝員水路-橫拉複玻內紗+備料單V-normal 100.00% SO240918005-鈞匠-寶鑫N區-橫拉內紗+備料單V-normal 2.24% ","SO240918005-鈞匠-寶鑫N區-橫拉內紗+備料單V-normal 63.29% ","SO240918005-鈞匠-寶鑫N區-橫拉內紗+備料單V-normal 34.46% ","","SO240904005-AIW-泰和茂-B棟1F B1F-推射+備料單V-normal 100.00% ","","","SO240918004-鈞匠-巨林南館4戶-浴廁門+備料單V-normal 92.04% ","SO240918004-鈞匠-巨林南館4戶-浴廁門+備料單V-normal 7.96% ","" 
"4","","","SO240918007-AIW-格睿-全園C區-推射+備料單V-normal 65.29% ","SO240918007-AIW-格睿-全園C區-推射+備料單V-normal 34.71% SO240924001-AIW-大丰張緯良等四戶-橫拉外框+備料單V-normal 20.79% ","SO240924001-AIW-大丰張緯良等四戶-橫拉外框+備料單V-normal 79.21% ","","","","","","SO240925008-宸璽-南投華新段二次-810橫拉+備料單V-normal 25.73% ","SO240925008-宸璽-南投華新段二次-810橫拉+備料單V-normal 56.54% ","SO240925008-宸璽-南投華新段二次-810橫拉+備料單V-normal 17.73% ","SO241001006-AIW-順欣營造-伸股段八戶-橫拉外框+備料單V-normal 100.00% SO240920001-格誠竹美A棟-橫拉+備料單V-normal 15.76% ","SO240920001-格誠竹美A棟-橫拉+備料單V-normal 67.11% ","SO240920001-格誠竹美A棟-橫拉+備料單V-normal 17.12% SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 4.58% ","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 33.79% ","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 33.79% ","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 27.83% SO240926006-鈞匠-誠益-賴錫堅住宅-複層玻璃V-normal 29.20% ","SO240926006-鈞匠-誠益-賴錫堅住宅-複層玻璃V-normal 70.80% ","","SO240918009-AIW-嘉大草屯廠房-推射V-normal 15.90% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 26.52% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 26.52% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 26.52% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 4.53% SO240911003-協興-埔心小張公寓12戶-橫拉內紗+備料單V-normal 41.74% ","SO240911003-協興-埔心小張公寓12戶-橫拉內紗+備料單V-normal 50.35% ","SO240911003-協興-埔心小張公寓12戶-橫拉內紗+備料單V-normal 7.91% SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 29.75% ","SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 35.30% ","SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 34.95% ","","","","","","","SO240919010-協興-竟藝員水路-橫拉內紗+備料單V-normal 100.00% ","","SO240828011+12+13-王維盛-20門斗橫拉+備料單V-normal 6.53% ","SO240828011+12+13-王維盛-20門斗橫拉+備料單V-normal 66.11% ","SO240828011+12+13-王維盛-20門斗橫拉+備料單V-normal 27.36% ","","","","","","","","","","","","","","","","","SO240919013-源鼎-沙崗李先生-橫拉複層玻璃+備料單V-normal 15.24% ","SO240919013-源鼎-沙崗李先生-橫拉複層玻璃+備料單V-normal 84.76% ","","SO240913015-全倫-內門格子複玻+備料單V-normal 100.00% ","","","SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 12.06% ","SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 45.45% ","SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 42.49% ","SO240904010-AIW-廣達-大埔梁宅-橫拉-HD9004V-normal 100.00% ","SO240920003-格誠竹美B棟-橫拉+備料單V-normal 85.74% ","SO240920003-格誠竹美B棟-橫拉+備料單V-normal 14.26% SO240923010-久大(埔鹽)-橫拉外框+備料單V-normal 27.21% ","SO240923010-久大(埔鹽)-橫拉外框+備料單V-normal 72.79% ","","","","","SO240920001-格誠竹美B棟-推射+備料單V-normal 43.37% ","SO240920001-格誠竹美B棟-推射+備料單V-normal 1.39% SO240905009-廣維-656-橫拉複層+備料單V-normal 100.00% SO240920001-格誠竹美B棟-推射+備料單V-normal 28.18% ","SO240920001-格誠竹美B棟-推射+備料單V-normal 27.05% ","","","","","","SO240920001-格誠竹美A棟-推射+備料單V-normal 70.73% ","SO240920001-格誠竹美A棟-推射+備料單V-normal 29.27% ","","SO240925006-宸璽-南投華新段二次-推射+備料單V-normal 100.00% ","","","SO240920007-比佛利山莊黃小姐-推射V-normal 100.00% ","","","SO240920005-廣達-苑裡羅宅-橫拉+備料單V-normal 100.00% ","","","","","","SO240925005-宸璽-南投華新段二次-橫拉+備料單V-normal 23.74% ","SO240925005-宸璽-南投華新段二次-橫拉+備料單V-normal 76.26% ","","","","SO240918001-苗栗頭份興隆路-橫拉a+備料單V-normal 28.54% ","SO240918001-苗栗頭份興隆路-橫拉a+備料單V-normal 71.46% ","","SO240919019-AIW-葳翔-南屯永春段-推射V-normal 43.60% ","SO240919019-AIW-葳翔-南屯永春段-推射V-normal 50.43% ","SO240919019-AIW-葳翔-南屯永春段-推射V-normal 5.97% ","","","SO240919011-協興-竟藝員水路-橫拉複玻內紗+備料單V-normal 100.00% ","","SO240918005-鈞匠-寶鑫N區-橫拉內紗+備料單V-normal 28.16% ","SO240918005-鈞匠-寶鑫N區-橫拉內紗+備料單V-normal 61.81% ","SO240918005-鈞匠-寶鑫N區-橫拉內紗+備料單V-normal 10.03% SO240904005-AIW-泰和茂-B棟1F B1F-推射+備料單V-normal 100.00% ","","","","SO240918004-鈞匠-巨林南館4戶-浴廁門+備料單V-normal 93.36% ","SO240918004-鈞匠-巨林南館4戶-浴廁門+備料單V-normal 6.64% " 
"5","","","","SO240918007-AIW-格睿-全園C區-推射+備料單V-normal 93.02% ","SO240918007-AIW-格睿-全園C區-推射+備料單V-normal 6.98% SO240924001-AIW-大丰張緯良等四戶-橫拉外框+備料單V-normal 7.78% ","SO240924001-AIW-大丰張緯良等四戶-橫拉外框+備料單V-normal 92.22% ","","","","","","","SO240925008-宸璽-南投華新段二次-810橫拉+備料單V-normal 40.70% ","SO240925008-宸璽-南投華新段二次-810橫拉+備料單V-normal 59.30% ","SO241001006-AIW-順欣營造-伸股段八戶-橫拉外框+備料單V-normal 57.87% ","SO241001006-AIW-順欣營造-伸股段八戶-橫拉外框+備料單V-normal 42.13% SO240920001-格誠竹美A棟-橫拉+備料單V-normal 42.69% ","SO240920001-格誠竹美A棟-橫拉+備料單V-normal 57.31% ","","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 5.47% ","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 31.00% ","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 31.00% ","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 31.00% ","SO240918006-AIW-格睿-全園C區-橫拉+備料單V-normal 1.52% SO240926006-鈞匠-誠益-賴錫堅住宅-複層玻璃V-normal 100.00% ","","","SO240918009-AIW-嘉大草屯廠房-推射V-normal 21.52% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 25.95% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 25.95% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 25.95% ","SO240918009-AIW-嘉大草屯廠房-推射V-normal 0.62% SO240911003-協興-埔心小張公寓12戶-橫拉內紗+備料單V-normal 42.05% ","SO240911003-協興-埔心小張公寓12戶-橫拉內紗+備料單V-normal 43.08% ","SO240911003-協興-埔心小張公寓12戶-橫拉內紗+備料單V-normal 14.87% SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 18.85% ","SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 28.79% ","SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 28.79% ","SO240911004-協興-埔心小張公寓17戶-橫拉內紗V-normal 23.56% ","","SO240919010-協興-竟藝員水路-橫拉內紗+備料單V-normal 100.00% ","","","","SO240828011+12+13-王維盛-20門斗橫拉+備料單V-normal 36.95% ","SO240828011+12+13-王維盛-20門斗橫拉+備料單V-normal 63.05% ","","","","","","","","","","","","","","","","","SO240919013-源鼎-沙崗李先生-橫拉複層玻璃+備料單V-normal 3.86% ","SO240919013-源鼎-沙崗李先生-橫拉複層玻璃+備料單V-normal 96.14% ","SO240913015-全倫-內門格子複玻+備料單V-normal 100.00% ","","","","","SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 3.42% ","SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 38.43% SO240904010-AIW-廣達-大埔梁宅-橫拉-HD9004V-normal 100.00% ","SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 52.52% ","SO240913010-源鼎-龍京民宿-橫拉外框+備料單V-normal 5.63% SO240920003-格誠竹美B棟-橫拉+備料單V-normal 100.00% ","SO240923010-久大(埔鹽)-橫拉外框+備料單V-normal 100.00% ","","","","","","SO240905009-廣維-656-橫拉複層+備料單V-normal 100.00% ","SO240920001-格誠竹美B棟-推射+備料單V-normal 35.00% ","SO240920001-格誠竹美B棟-推射+備料單V-normal 65.00% ","","","","","","SO240920001-格誠竹美A棟-推射+備料單V-normal 37.42% ","SO240920001-格誠竹美A棟-推射+備料單V-normal 62.58% ","SO240925006-宸璽-南投華新段二次-推射+備料單V-normal 100.00% ","","","SO240920007-比佛利山莊黃小姐-推射V-normal 100.00% ","","","SO240920005-廣達-苑裡羅宅-橫拉+備料單V-normal 0.34% ","SO240920005-廣達-苑裡羅宅-橫拉+備料單V-normal 99.66% ","","","","","","SO240925005-宸璽-南投華新段二次-橫拉+備料單V-normal 100.00% ","","","","","SO240918001-苗栗頭份興隆路-橫拉a+備料單V-normal 100.00% ","","","","SO240919019-AIW-葳翔-南屯永春段-推射V-normal 46.85% ","SO240919019-AIW-葳翔-南屯永春段-推射V-normal 53.15% ","","SO240919011-協興-竟藝員水路-橫拉複玻內紗+備料單V-normal 100.00% ","","","","SO240918005-鈞匠-寶鑫N區-橫拉內紗+備料單V-normal 38.94% SO240904005-AIW-泰和茂-B棟1F B1F-推射+備料單V-normal 100.00% ","SO240918005-鈞匠-寶鑫N區-橫拉內紗+備料單V-normal 61.06% ","","","","SO240918004-鈞匠-巨林南館4戶-浴廁門+備料單V-normal 100.00% " 
`;

    const parsedData = parseCsv(csvString);
    setData(parsedData);

    if (parsedData.length > 0) {
      const cols: ColumnDef<CsvData>[] = Object.keys(parsedData[0]).map(
        (key) => ({
          accessorKey: key,
          header: key,
          cell: (info) => info.getValue() as string,
        }),
      );
      setColumns(cols);
    }
  }, []);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className="container mx-auto py-10">
      <div className="rounded-md border">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                      </TableHead>
                    );
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id} className="text-xs">
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext(),
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
