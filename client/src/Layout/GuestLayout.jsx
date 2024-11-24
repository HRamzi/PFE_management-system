import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-gray-100">
            

            <div className="w-full h-full overflow-hidden bg-white px-6 py-4 shadow-md sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
