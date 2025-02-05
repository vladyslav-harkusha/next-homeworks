import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params: { commentId: string };
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { commentId } = await params;

    return { title: `Comment ${commentId} page` };
};

const CommentPage: FC<Props> = async ({ params }) => {
    const { commentId } = await params;

    return (
        <div>
            Comment №{commentId} content
        </div>
    );
};

export default CommentPage;