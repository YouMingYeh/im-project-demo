import Solution from "./solution";
// import WorksheetPct from "./worksheet_pct";
// import WorksheetTime from "./worksheet_time";

export default function Page() {
  return (
    <div className="container py-10">
      <h1 className="mb-6 text-2xl font-bold">結果</h1>
      {/* <WorksheetPct /> */}
      {/* <WorksheetTime /> */}
      <Solution />
    </div>
  );
}
