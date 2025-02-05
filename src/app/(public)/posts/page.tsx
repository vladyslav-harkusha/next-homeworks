'use client';
import {FC} from "react";
import {useRouter} from "next/navigation";
import {postsFromServer} from "@/data/postsFromServer";

const PostPage: FC = () => {
    const router = useRouter();

    const onUserClick = (postId: number) => {
        router.push(`/posts/${postId}`);
    };

    return (
        <div>
            <h2>PostsPage content</h2>
            <ul>
                {postsFromServer.map(({ id, title, body}) => (
                    <li key={id} onClick={() => onUserClick(id)} style={{ cursor: 'pointer', padding: '5px' }}>
                        <h3>{title}</h3>
                        <p>{body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostPage;