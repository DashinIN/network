import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticleDetailsRecomendationsSchema } from './ArticleDetailsRecomendationsSchema';

export interface ArticleDetaisPageSchema {
    recomendations: ArticleDetailsRecomendationsSchema;
    comments: ArticleDetailsCommentsSchema;

}
