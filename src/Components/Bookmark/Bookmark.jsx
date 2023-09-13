import PropTypes from "prop-types"; // importing prop types

const Bookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className='bg-gray-200 p-4 m-4'>
      <h2 className='text-2xl'>{title}</h2>
    </div>
  );
};

Bookmark.propTypes = { bookmark: PropTypes.object };

export default Bookmark;
