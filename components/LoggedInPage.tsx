"use client"
import { useSession, signOut } from "next-auth/react"

function LoggedInPage() {
  const { data: session } = useSession()
  session && console.log("session.user", session.user)

  return (
    <div className="flex min-h-screen flex-col items-center p-24 justify-center space-y-8">
      <div>You are now logged in</div>
      {session && (
        <img
          src={session.user?.image!}
          alt="Profile pic"
          className="h-28 w-28 rounded-full"
          referrerPolicy="no-referrer"
        />
      )}
      {session && <div>{session.user?.name}</div>}
      <button className="hover:opacity-50" onClick={() => signOut()}>
        Log out
      </button>
    </div>
  )
}

export default LoggedInPage
