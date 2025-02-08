import {ReactNode} from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'Adding new car'
};

type Props = { children: ReactNode }

const NewCarLayout = ({ children }: Props ) => {
    return (
        <>
            {children}
        </>
    );
};

export default NewCarLayout;