import ArticleItem from './ArticleItem'

interface Props {
  articles: any;
}

const ArticlesList = (props: Props) => {
  const { articles } = props;

  return (
    <div className=''>
      {articles
        ? articles.map((item: any) => {
            return <ArticleItem key={item.articleId} {...item} />;
          })
        : null}
    </div>
  );
};

export default ArticlesList;
