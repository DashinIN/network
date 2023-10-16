import { AboutPage } from '@/Pages/AboutPage';
import { AdminPanelPage } from '@/Pages/AdminPanelPage';
import { ArticleDetailsPage } from '@/Pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/Pages/ArticleEditPage';
import { ArticlesPage } from '@/Pages/ArticlesPage';
import { ForbiddenPage } from '@/Pages/ForbiddenPage';
import { MainPage } from '@/Pages/MainPage';
import { NotFoundPage } from '@/Pages/NotFoundPage';
import { ProfilePage } from '@/Pages/ProfilePage';
import { userRole } from '@/entities/User';
import { AppRoutes, RoutePath } from '@/shared/consts/router';
import { AppRoutesProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: `${RoutePath.profile}:id`,
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: `${RoutePath.article_details}:id`,
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_CREATE]: {
        path: RoutePath.article_create,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_EDIT]: {
        path: `${RoutePath.article_edit}`,
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: `${RoutePath.admin_panel}`,
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [userRole.ADMIN, userRole.MANAGER],
    },
    [AppRoutes.FORBIDDEN]: {
        path: `${RoutePath.forbidden}`,
        element: <ForbiddenPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
