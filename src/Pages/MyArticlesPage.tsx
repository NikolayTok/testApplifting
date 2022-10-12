import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';

import { getAllArticles } from '../services/API';
import { GlobalContext } from '../Components/context/globalContext';
import { ArticlesType } from '../types';
import MyArticlesList from '../Components/MyAtricles/MyArticlesList';

const MyArticles: React.FC = () => {
  const [myArticles, setMyArticles] = useState<ArticlesType[]>([]);
  const { token } = useContext(GlobalContext);

  useEffect(() => {
    getAllArticles().then((data) => setMyArticles(data?.data.items));
  }, []);

  return (
    <section>
      {!token ? (
        <p>Oups! Failed Login</p>
      ) : (
        <div>
          <div>
            <div className='flex items-center'>
              <h1 className='text-4xl font-medium	pr-8'>My Articles</h1>
              <Link to={'/createarticles'} className='btn-defalut'>
                Create new article
              </Link>
            </div>
          </div>
          <div className='overflow-auto	'>
            {myArticles ? <MyArticlesList myArticles={myArticles} /> : null}
          </div>
        </div>
      )}
    </section>
  );
};

export default MyArticles;
