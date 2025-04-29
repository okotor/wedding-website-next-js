import { useRouter } from 'next/router';
import useAuthStore from '../../store/AuthStore';
import { useEffect } from 'react';

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
    const router = useRouter();

    useEffect(() => {
        if (!isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, router]);

    if (!isAuthenticated) {
        return null; // Prevent rendering protected content until authenticated
    }

    return children;
};

export default ProtectedRoute;