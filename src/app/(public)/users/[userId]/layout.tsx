import {ReactNode} from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'UserLayout metadata'
};

type Props = { children: ReactNode }

const UserLayout = ({ children }: Props ) => {
    return (
        <>
            {children}
        </>        
    );
};

export default UserLayout;