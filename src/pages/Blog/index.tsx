import { useEffect, useState } from 'react';
import BlogAdd from './blogAdd';
import BlogList from './blogList';
import jwt_decode from 'jwt-decode';

interface DecodedToken {
    _id: string;
    role: string;
    iat: number;
    exp: number;
}

function BlogShark() {
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        function checkAdminStatus() {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const decoded = jwt_decode(token) as DecodedToken;
                    console.log('Decoded token:', decoded); // Agrega esta línea
                    if (decoded.role === 'admin') {
                        setIsAdmin(true);
                        return;
                    }
                } catch (err) {
                    console.error('Error decoding the token:', err);
                }
            }
            setIsAdmin(false);
        }

        checkAdminStatus();

        const storageListener = () => {
            checkAdminStatus();
        };

        window.addEventListener('storage', storageListener);

        return () => {
            window.removeEventListener('storage', storageListener);
        };
    }, []);

    console.log('isAdmin:', isAdmin); // Agrega esta línea

    return (
        <div>
            {isAdmin && <BlogAdd />}
            <BlogList />
        </div>
    );
}

export default BlogShark;