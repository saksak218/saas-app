import CompanionForm from "@/components/CompanionForm";

const NewCompanion = () => {
  return (
    <main className="justify-center items-center py-10 min-lg:w-1/3 min-md:w-2/3">
      <article className="flex flex-col gap-4 w-full">
        <h1>Companion Builder</h1>

        <CompanionForm />
      </article>
    </main>
  );
};

export default NewCompanion;
