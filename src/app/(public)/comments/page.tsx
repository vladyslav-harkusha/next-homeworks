'use client';
import {FC} from "react";
import {useRouter} from "next/navigation";
import {commentsFromServer} from "@/data/commentsFromServer";

const CommentsPage: FC = () => {
    const router = useRouter();

    const onCommentClick = (commentId: number) => {
        router.push(`/comments/${commentId}`);
    };

    return (
        <div>
            <h2>CommentsPage content</h2>
            <ul>
                {commentsFromServer.map(({ id, title, body}) => (
                    <li key={id} onClick={() => onCommentClick(id)} style={{ cursor: 'pointer', padding: '5px' }}>
                        <h3>{title}</h3>
                        <p>{body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CommentsPage;