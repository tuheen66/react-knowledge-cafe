import PropTypes from "prop-types"; // importing prop types

import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleAddToBookmark, handleMarkAsRead }) => {
  const {
    title,
    cover,
    author_img,
    author,
    reading_time,
    posted_date,
    hashtags,
  } = blog;
  return (
    <div className='mb-20 space-y-4'>
      <img className='w-full' src={cover} alt={`Cover picture of ${title}`} />

      <div className='flex justify-between my-4'>
        <div className='flex'>
          <img className='w-14 rounded-full' src={author_img} alt='' />

          <div className='ml-6'>
            <h2 className='text-2xl font-bold'>{author}</h2>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className='ml-4 text-red-600'
          >
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className='text-4xl'>{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href=''> #{hash} </a>{" "}
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time)}
        className='text-purple-800 font-bol underline'
      >
        Mark as read
      </button>
    </div>
  );
};

// setting prop type
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleMarkAsRead: PropTypes.func,
};
export default Blog;
