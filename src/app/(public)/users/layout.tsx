import {ReactNode} from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'UsersLayout metadata'
};

type Props = { children: ReactNode }

const UsersLayout = ({ children }: Props ) => {
    return (
        <>
            {children}
        </>        
    );
};

export default UsersLayout;