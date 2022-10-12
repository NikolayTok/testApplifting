import MyArticleItem from './MyArticleItem';

const MyArticlesList = (props: any) => {
  const { myArticles = [] } = props;

  return (
    <section className='w-[40rem] md:max-w-[900px] md:w-full mt-10 overflow-x-auto	'>
      <ul className='flex pb-3 border-b-2'>
        <li className='max-w-[200px] w-full flex items-center'>
          <span className='pr-2'>Title</span>
          <button>
            <img src='../images/icons/Union.svg' alt='sort images' />
          </button>
        </li>
        <li className='max-w-sm w-full flex items-center'>
          <span className='pr-2'>Perex</span>
          <button>
            <img src='../images/icons/Union.svg' alt='sort images' />
          </button>
        </li>
        <li className='max-w-[150px] w-full flex items-center'>
          <span className='pr-2'>Author</span>
          <button>
            <img src='../images/icons/Union.svg' alt='sort images' />
          </button>
        </li>
        <li className='max-w-[150px] w-full flex items-center'>
          <span className='pr-2'># of comments</span>
          <button>
            <img src='../images/icons/Union.svg' alt='sort images' />
          </button>
        </li>
        <li className='max-w-[80px] w-full'>Actions</li>
      </ul>
      {!myArticles.length
        ? 'You dont have article'
        : myArticles.map((item: any) => {
            return <MyArticleItem key={item.articleId} {...item} />;
          })}
    </section>
  );
};

export default MyArticlesList;
