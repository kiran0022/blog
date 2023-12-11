import { User } from '@supabase/supabase-js'
import { create } from 'zustand'

type UserState = {
    user: User | undefined
    setUser: (user: User | undefined) => void

}
export const useUser = create<UserState>((set) => ({
    user: undefined,
    setUser: (user) => set((state) => ({ user }))

}))