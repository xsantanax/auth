"use client"
import { useSession, signOut } from "next-auth/react"

function LoggedInPage() {
  const { data: session } = useSession()

  return (
    <div className="flex min-h-screen flex-col items-center p-24 justify-center space-y-8">
      <div>You are now logged in</div>
      {session && (
        <img
          src={session.user?.image!}
          alt="Proile pic"
          className="h-28 w-28 rounded-full"
        />
      )}
      <button className="hover:opacity-50" onClick={() => signOut()}>
        Log out
      </button>
    </div>
  )
}

export default LoggedInPage
