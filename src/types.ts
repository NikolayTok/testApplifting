export type ArticlesType = {
  articleId: string;
  createdAt: string;
  imageId?: any;
  lastUpdatedAt: string;
  title: string;
  perex?: string;
};

export type CommentType = {
  author: string;
  commentId: string;
  content: string;
  createdAt: string;
  score: number;
};

export interface DetailArticleType extends ArticlesType {
  comments: CommentType[] | [];
  content: string;
}
