import { getCompanion } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";

interface CompanionSessionPageProps {
  params: Promise<{ id: string }>;
}

const CompanionSession = async ({ params }: CompanionSessionPageProps) => {
  const { id } = await params;
  const { name, subject, title, topic, duration } = await getCompanion(id);
  const user = await currentUser();

  if (!user) redirect("/sign-in");

  if (!name) redirect("/companions");

  return (
    <main>
      <article className="flex max-md:flex-col justify-between p-6 rounded-border">
        <div className="flex items-center gap-2">
          <div
            className="max-md:hidden flex justify-center items-center rounded-lg size-[72px]"
            style={{ backgroundColor: getSubjectColor(subject) }}
          >
            <Image
              src={`/icons/${subject}.svg`}
              alt={subject}
              width={35}
              height={35}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p className="font-bold text-2xl">{name}</p>
              <div className="max-sm:hidden subject-badge">{subject}</div>
            </div>
            <p className="text-lg">{topic}</p>
          </div>
        </div>
        <div className="max-md:hidden items-start text-2xl">
          {duration} minutes
        </div>
      </article>
    </main>
  );
};

export default CompanionSession;
