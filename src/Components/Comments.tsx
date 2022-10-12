import { postComment } from '../services/API';
import { useContext } from 'react';
import { GlobalContext } from './context/globalContext';
import { CommentType } from '../types';
interface PropsComments {
  comments: CommentType[] | [];
  articleId: string;
}

const Comments = (props: PropsComments) => {
  const { comments = [], articleId } = props;
  const { token } = useContext(GlobalContext);

  const createComment = () => {
    let { commentsText } = document.forms[0];
    if (commentsText.value.length > 0) {
      postComment(commentsText.value, articleId);
    }
  };

  return (
    <div className='mb-20'>
      <h2 className='font-medium text-2xl mb-6'>{`Comments (${comments.length})`}</h2>
      <div className=''>
        {!token ? (
          <p className='mb-5'>You must be logged in to create comments!</p>
        ) : (
          <div className='userComments flex items-center mb-5'>
            <div className='max-w-[40px] mr-[28px]'>
              <img
                src='../images/icons/userIcon.svg'
                alt='icons logo'
                className='rounded-full h-fit'
              />
            </div>
            <form className='max-w-[690px] w-full' onSubmit={createComment}>
              <input
                name='commentsText'
                type='text'
                placeholder='Join the discussion'
                className='border w-full rounded inline pt-2 pb-2 pl-3'
              />
            </form>
          </div>
        )}

        {comments.length ? (
          comments.map((item: any) => {
            return (
              <div className='flex mb-5' key={item.commentId}>
                <div className='max-w-[40px] mr-[28px]'>
                  <img
                    src='../images/icons/userIcon.svg'
                    alt='icons logo'
                    className='rounded-full h-fit'
                  />
                </div>
                <div className='wrap'>
                  <span className='font-bold mb-2 block'>{item.author}</span>
                  <div className='mb-2'>
                    <p>{item.content}</p>
                  </div>
                  <div className='score flex items-center'>
                    <span className='pr-[8px] mr-[6px] border-r	'>
                      {item.score}
                    </span>
                    <button
                      className='pr-[8px] mr-[6px] border-r'
                      //   onClick={() => commentVoteUp(item.commentId)}
                    >
                      <img src='../images/icons/chevron-up.svg' alt='vote Up' />
                    </button>
                    <button
                      className='pr-[8px] border-r'
                      //   onClick={() => commentVoteDown(item.commentId)}
                    >
                      <img
                        src='../images/icons/chevron-down.svg'
                        alt='vote Up'
                      />
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className=''>No comments</p>
        )}
      </div>
    </div>
  );
};

export default Comments;
