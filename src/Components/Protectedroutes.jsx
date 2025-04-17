import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Protectedroutes = ({ component }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null); 
    
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user); 
            } else {
                setUser(null); 
                navigate('/login'); 
            }
        });
        
        return () => unsubscribe(); 
    }, [navigate]);

    if (user === null) {
        return <h1>Loading...</h1>; 
    }

    return component; 
};

export default Protectedroutes;