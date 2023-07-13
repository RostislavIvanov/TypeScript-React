import React, {FC} from 'react';
import {IUser} from "../types/types";
import {useNavigate} from "react-router-dom";

interface UserItemProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

const UserItem: FC<UserItemProps> = ({user, onClick}) => {
    return (
        <div>
            <div onClick={() => onClick(user)} style={{cursor: 'pointer', padding: 15, border: '1px solid black'}}>
                {user.id}. {user.name} проживает по адресу {user.address.city}, на улице {user.address.street}
            </div>
        </div>
    );
};

export default UserItem;