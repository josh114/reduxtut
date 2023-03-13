import { useDispatch } from 'react-redux';
import { reactionAdded } from './postsSlice';

const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤',
  rocket: '🚀',
  coffee: '☕',
};

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const arr = Object.entries(reactionEmoji);
  const reactionButtons = arr.map(([name, emoji]) => {
    return (
      <button
        key={name}
        className='reactionButton'
        type='button'
        onClick={() => {
          dispatch(reactionAdded({ postId: post.id, reaction: name }));
          console.log('Button clicked');
        }}
      >
        {emoji} {post.reactions[name]}
      </button>
    );
  });
  return <div>{reactionButtons}</div>;
};

export default ReactionButtons;
