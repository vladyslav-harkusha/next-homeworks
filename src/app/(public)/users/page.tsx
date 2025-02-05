'use client';
import {FC} from "react";
import {useRouter} from "next/navigation";
import {usersFromServer} from "@/data/usersFromServer";

const UsersPage: FC = () => {
    const router = useRouter();

    const onUserClick = (userId: number) => {
        router.push(`/users/${userId}`);
    };

    return (
        <div>
            <h2>UsersPage content</h2>
            <ul>
                {usersFromServer.map(({ id, name, description}) => (
                    <li key={id} onClick={() => onUserClick(id)} style={{ cursor: 'pointer', padding: '5px' }}>
                        <h3>{name}</h3>
                        <p>{description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UsersPage;