import { useRouter } from 'next/router';
import { useEffect } from 'react';

const withAdmin = (WrappedComponent) => {
    const WithAdmin = (props) => {
        const router = useRouter();

        useEffect(() => {
            // Check if user is authenticated as admin
            const isAdmin = checkIfUserIsAdmin(); // Your authentication logic here

            // If user is not admin, redirect to login page
            if (!isAdmin) {
                router.push('/login'); // Redirect to login page
            }
        }, []);

        return <WrappedComponent {...props} />;
    };

    return WithAdmin;
};
// utils/auth.js

// export const checkIfUserIsAdmin = (userData) => {
//     // Assuming userData contains information about the user's role
//     // For example, userData.role === 'admin'
//     // This function checks if the user is authenticated as an admin

//     // Example logic:
//     // Check if the user role is 'admin'
//     return userData && userData.role === 'admin';
// };

export default withAdmin;
