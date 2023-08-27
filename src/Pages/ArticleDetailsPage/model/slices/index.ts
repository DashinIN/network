import { combineReducers } from '@reduxjs/toolkit';
import { ArticleDetaisPageSchema } from '../types';
import { articleDetailsRecomendationsReducer } from './articleDetailsRecomendationsSlice';
import { articleDetaisCommentsReducer } from './articleDetaisCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticleDetaisPageSchema>({
    recomendations: articleDetailsRecomendationsReducer,
    comments: articleDetaisCommentsReducer,
});
