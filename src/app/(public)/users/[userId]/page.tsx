import {FC} from "react";
import {Metadata} from "next";

type Props = {
    params: { userId: string };
}

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const { userId } = await params;

    return { title: `User ${userId} page` };
};

const UserPage: FC<Props> = async ({ params }) => {
    const { userId } = await params;

    return (
        <div>
            User №{userId} content
        </div>
    );
};

export default UserPage;