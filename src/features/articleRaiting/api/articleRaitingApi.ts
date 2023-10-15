import { Raiting } from '@/entities/Raiting';
import { rtkApi } from '@/shared/api/rtkApi';

const articleRaitingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRaiting: build.query<Raiting[], {userId: string, articleId: string}>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
    }),
});

export const useGetArticleRaiting = articleRaitingApi.useGetArticleRaitingQuery;
