import { getAllArticles } from '../services/API';
import { useState, useEffect } from 'react';
import ArticlesList from '../Components/ArticlesList';
import { ArticlesType } from '../types';

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<ArticlesType[]>([]);

  useEffect(() => {
    getAllArticles().then((data) => {
      setArticles(data?.data.items);
      console.log(data?.data.items);
    });
  }, []);

  return (
    <section className='homePage'>
      <h1 className='font-medium text-4xl mb-10'>Recent articles</h1>
      <div className=''>
        <ArticlesList articles={articles} />
      </div>
    </section>
  );
};

export default HomePage;
