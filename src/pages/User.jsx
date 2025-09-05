import {useEffect, useState} from "react";

import axios from "axios";
import {useParams} from "react-router-dom";

function User() {
    const { id } = useParams();
    const [user, setUser] = useState();

    useEffect(() => {
        (async () => {
            const url = `http://localhost:5000/users/${id}`;
            try {
                const response = await axios.get(url);
                setUser(response.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        })();
    }, [id]);


    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    );
}

export default User;
