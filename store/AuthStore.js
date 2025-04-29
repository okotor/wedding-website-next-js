import { create } from 'zustand';

const useAuthStore = create((set) => ({
    isAuthenticated: false,
    login: (email, password) => {
        if (email === 'svatebnihost@gmail.com' && password === 'MaruTom23') {
            set({ isAuthenticated: true });
            return true;
        }
        return false;
    },
    logout: () => set({ isAuthenticated: false }),
}));

export default useAuthStore;