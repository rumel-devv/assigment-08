
import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    baseURL:"https://assigment-08-chi.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()