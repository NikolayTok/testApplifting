import { useEffect, useState } from 'react';
import { getArticle, deleteArticle } from '../../services/API';
import { DetailArticleType } from '../../types';

const MyArticleItem = (props: DetailArticleType) => {
  const [detail, setDetail] = useState<DetailArticleType>();
  const { articleId, title } = props;

  useEffect(() => {
    getArticle(articleId).then((data) => setDetail(data?.data));
  }, [articleId]);

  const deleteItem = () => {
    deleteArticle(articleId).then(() => window.location.reload());
  };

  return (
    <div className='flex justify-beetween pt-3 pb-3 border-b'>
      <h2 className='max-w-full w-[200px]'>{title}</h2>
      <p className=' max-w-sm w-full'>{detail?.content.slice(0, 45)}</p>
      <span className='block max-w-[150px] w-full'>Elisabeth Strain</span>
      <span className='block max-w-[150px] w-full'>
        {detail?.comments.length}
      </span>
      <div className='max-w-[80px] w-full'>
        <button className='pr-3'>
          <img src='../images/icons/edit.svg' alt='edit' />
        </button>
        <button onClick={deleteItem}>
          <img src='../images/icons/trash.svg' alt='delete' />
        </button>
      </div>
    </div>
  );
};

export default MyArticleItem;
