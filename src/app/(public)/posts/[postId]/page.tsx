import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params: { postId: string };
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { postId } = await params;

    return { title: `Post ${postId} page` };
};

const PostPage: FC<Props> = async ({ params }) => {
    const { postId } = await params;

    return (
        <div>
            Post №{postId} content
        </div>
    );
};

export default PostPage;