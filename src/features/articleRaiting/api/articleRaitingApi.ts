import { Raiting } from '@/entities/Raiting';
import { rtkApi } from '@/shared/api/rtkApi';

interface getArticleRaitingArg {
    userId: string;
    articleId: string;
}

interface rateArticleArg {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRaitingApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRaiting: build.query<Raiting[], getArticleRaitingArg>({
            query: ({ userId, articleId }) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                },
            }),
        }),
        rateArticle: build.mutation<void, rateArticleArg>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg,
            }),
        }),
    }),
});

export const useGetArticleRaiting = articleRaitingApi.useGetArticleRaitingQuery;
export const useRateArticle = articleRaitingApi.useRateArticleMutation;
