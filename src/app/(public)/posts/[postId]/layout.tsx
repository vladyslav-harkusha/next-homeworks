import {ReactNode} from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'PostLayout metadata'
};

type Props = { children: ReactNode }

const PostLayout = ({ children }: Props ) => {
    return (
        <>
            {children}
        </>
    );
};

export default PostLayout;