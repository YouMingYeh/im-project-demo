import HyperParameterForm from "./hyper-parameter-form";

export default function HyperParameterPage() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="mb-6 text-2xl font-bold">生成規劃實例</h1>
      <HyperParameterForm />
    </div>
  );
}
