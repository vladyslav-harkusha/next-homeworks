import {ReactNode} from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
    title: 'All cars'
};

type Props = { children: ReactNode }

const CarsLayout = ({ children }: Props ) => {
    return (
        <>
            {children}
        </>        
    );
};

export default CarsLayout;