import { UserButton } from "@clerk/nextjs";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={"w-full h-full flex flex-col"}>
      <nav className={"w-full bg-zinc-700 p-2"}>
        <UserButton />
      </nav>
      <div className={"w-full flex flex-col items-center justify-center"}>
        {children}
      </div>
    </main>
  );
}
