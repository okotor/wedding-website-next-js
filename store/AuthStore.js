import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      login: (email, password) => {
        if (email === 'svatebnihost@gmail.com' && password === 'MaruTom23') {
          set({ isAuthenticated: true });
          return true;
        }
        return false;
      },
      logout: () => set({ isAuthenticated: false }),
    }),
    {
      name: 'auth-store', // key in localStorage
    }
  )
);

export default useAuthStore;