import { RouteProps } from 'react-router-dom';
import { userRole } from '@/entities/User';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: userRole[];
};
