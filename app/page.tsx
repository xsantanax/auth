"use client"
import Image from "next/image"
import { signIn } from "next-auth/react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 justify-center space-y-12">
      <Image
        src="/next.svg"
        width={200}
        height={200}
        alt="logo"
        className="bg-gray-900 p-4"
      />
      <button
        onClick={() => signIn("google")}
        className="text-black bg-white p-6 rounded font-bold text-2xl animate-pulse"
      >
        Click here to login with Google
      </button>
    </main>
  )
}
