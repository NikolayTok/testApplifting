import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getArticle } from '../services/API';
import { getDateCreate } from '../utils/getDate';
import Comments from '../Components/Comments';
import { DetailArticleType } from '../types';

const DetailPage: React.FC = () => {
  const [detail, setDetail] = useState<DetailArticleType>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      getArticle(id).then((data) => setDetail(data?.data));
    }
  }, [id]);

  return (
    <>
      {detail ? (
        <section className=''>
          <div className='max-w-3xl	mb-8 border-b-2 pb-8'>
            <h1 className='font-medium text-4xl mb-4'>{detail.title}</h1>
            <div className='infoAutor text-gray-400	text-sm'>
              <span className='pr-4'>Elisabeth Strain</span>
              <span>{detail ? getDateCreate(detail.createdAt) : 'none'}</span>
            </div>
            <div className='mt-5 mb-5'>
              <img
                className='w-full'
                src='../images/imagesArticles/1.png'
                alt='images article'
              />
            </div>
            <div>
              <p className='leading-9 text-base '>{detail.content}</p>
            </div>
          </div>
          <Comments comments={detail.comments} articleId={detail.articleId} />
        </section>
      ) : null}
    </>
  );
};

export default DetailPage;
