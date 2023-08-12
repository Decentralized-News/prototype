export interface Article {
    hash: string;
    title: string;
    content: string;
    tag: string;
    author: string;
    authorOrigin: string;
    createdAt?: any;
}

export interface CreateArticleResponse {
    message: string;
}

export interface ArticleGetRequest {
    hashes: string[];
}

export interface ArticleGetResponse {
    articles: Article[];
}
