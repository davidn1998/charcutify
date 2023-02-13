import { CustomBoard } from "@/components/CustomBoard";

const customise = () => {
  return (
    <main className="container mx-auto mb-36 flex flex-1 flex-col items-center px-8">
      <h1 className="mb-16 text-4xl">Customise</h1>
      <CustomBoard />
    </main>
  );
};

export default customise;
