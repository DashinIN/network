export {
    userReducer,
    userActions,
} from './model/slice/userSlice';
export type {
    User,
    UserSchema,
} from './model/types/user';
export {
    userRole,
} from './model/consts/consts';
export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelectors';
export {
    getUserAuthData,
} from './model/selectors/getUserAuthData/getUserAuthData';

export {
    getUserInited,
} from './model/selectors/getUserInited/getUserInited';
