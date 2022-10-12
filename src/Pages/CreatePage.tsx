import { postArticle } from '../services/API';
import { useState } from 'react';

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onPostArticle = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (title || content) {
      postArticle(title, content).then(() => {
        alert('You create article!');
      });
    } else {
      alert('You have not completed all input fields. Try again!');
    }
  };

  return (
    <section className='max-w-3xl'>
      <form onSubmit={(e) => onPostArticle(e)}>
        <div className='flex mb-12'>
          <h1 className='text-4xl font-medium	pr-8'>Create new article</h1>
          <button className='btn-defalut' type='submit'>
            Publish Article
          </button>
        </div>
        <label>
          Article Title
          <input
            name='titleArticle'
            type='text'
            placeholder='My First Article'
            className='block w-full border border-grey rounded mt-2 mb-5 p-2'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label htmlFor='image'>Featured image</label>
        <input
          type='file'
          name='image'
          placeholder='Upload an Image'
          className='file:mr-4 file:py-2 file:px-4 file:mt-2 file:mb-8
      file:rounded file:border-0
      file:text-sm file:font-semibold
      file:bg-neutral-400	file:text-white
      hover:file:bg-blue-500
      active:file:bg-green-500	
      focus:file:bg-green-700	
      block w-full text-sm text-slate-500
      hover:file:cursor-pointer'
        />

        <label htmlFor='textconent' className='block'>
          Content
        </label>
        <textarea
          name='textContent'
          rows={20}
          placeholder='Supports markdown. Yay!'
          className='w-full border border-grey rounded mt-2 mb-4 p-2'
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
      </form>
    </section>
  );
};

export default CreatePage;
