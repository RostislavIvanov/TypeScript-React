import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";

const UserItemPage: FC = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState<IUser | null>(null)
    const {id} = useParams<string>();
    // console.log(params)

    const fetchUser = async () => {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + id);
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }
    useEffect(() => {
        fetchUser();
    }, [])

    const back = () : void => {
        navigate('/users')
    }
    return (
        <div>
            <button onClick={back}>back</button>
            <h1>Страница пользователя</h1>
            <div>{user?.id}. {user?.name}</div>
            <div>{user?.email}</div>
        </div>
    );
};

export default UserItemPage;