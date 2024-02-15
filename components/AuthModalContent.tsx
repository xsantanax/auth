import { useState } from "react"

export default function AuthModalContent() {
  const [isRegistering, setIsRegistering] = useState(false)

  return (
    <div className="flex flex-col items-center space-y-4">
      {!isRegistering ? (
        <>
          <input placeholder="Email" />
          <input placeholder="Password" />
          <button className="bg-[#128] p-2 rounded">Login</button>
          <div className="text-black">or</div>
          <button
            className="bg-[#128] p-2 rounded"
            onClick={() => setIsRegistering(true)}
          >
            Create account
          </button>
        </>
      ) : (
        <>
          <input placeholder="Email" />
          <input placeholder="Password" />
          <input placeholder="Confirm Password" />
          <button className="bg-[#128] p-2 rounded">Create account</button>
          <button
            onClick={() => setIsRegistering(false)}
            className="text-black"
          >
            Go back
          </button>
        </>
      )}
    </div>
  )
}
