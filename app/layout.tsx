import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { getServerSession } from "next-auth"
import { authOptions } from "../pages/api/auth/[...nextauth]"
import { SessionProvider } from "../components/SessionProvider"
import LoggedInPage from "@/components/LoggedInPage"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Auth",
  description: "Generated by create next app",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const session = await getServerSession(authOptions)

  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          {!session ? <div>{children}</div> : <LoggedInPage />}
        </SessionProvider>
      </body>
    </html>
  )
}
