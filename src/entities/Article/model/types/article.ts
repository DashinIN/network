import { User } from 'entities/User';

export enum ArticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}

export interface ArticleBlockBase {
    id: string;
    type: ArticleBlockType;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
    type: ArticleBlockType.CODE;
    code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
    type: ArticleBlockType.IMAGE;
    src: string;
    title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
    type: ArticleBlockType.TEXT;
    paragraphs: string[];
    title?: string;
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock;

export enum ArticleType {
    ДРАММА = 'Драмма',
    РОМАНТИКА = 'Романтика',
    ШКОЛА = 'Школа',
    СЕНЕН = 'Сенен',
    КОМЕДИЯ = 'Комедия',
    РАБОТА = 'Работа',
    СЕДЗЕ = 'Седзе',
    ПОВСЕДНЕВНОСТЬ = 'Повседневность',
    СВЕРХЪЕСТЕСТВЕННОЕ = 'Сверхъестественное',
    ДЕТЕКТИВ = 'Детектив',
    ТРИЛЛЕР = 'Триллер',
    ЭКШЕН = 'Экшен',
    ПРИКЛЮЧЕНИЯ = 'Приключения',
    ФАНТАСТИКА = 'Фантастика',
    ФЕНТЕЗИ = 'Фентези',
}

export enum ArticleView {
    BIG ='BIG',
    SMALL = 'SMALL'
}

export interface Article {
    id: string;
    title: string;
    subtitle:string;
    img: string;
    views: number;
    createdAt: string;
    user: User;
    type: ArticleType[];
    blocks: ArticleBlock[];
}
