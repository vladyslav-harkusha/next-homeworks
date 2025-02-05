import {ReactNode} from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'CommentsLayout metadata'
};

type Props = { children: ReactNode }

const CommentsLayout = ({ children }: Props ) => {
    return (
        <>
            {children}
        </>
    );
};

export default CommentsLayout;