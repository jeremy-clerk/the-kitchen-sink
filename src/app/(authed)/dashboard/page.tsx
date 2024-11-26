import { SignOutButton } from "@clerk/nextjs";

export default function Dashboard() {
  return (
    <div className={"h-full flex p-6 w-full"}>
      <div className={"bg-slate-600 p-2 rounded-md w-full max-w-lg"}>
        <SignOutButton signOutOptions={{ redirectUrl: "/sign-in" }}>
          <button
            className={
              "rounded-md p-2 bg-gradient-to-r capitalize shadow from-purple-900 to-purple-500"
            }
          >
            sign out
          </button>
        </SignOutButton>
      </div>
    </div>
  );
}
