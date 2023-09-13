import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className='md:w-1/3 bg-gray-300 ml-4'>
      <div>
        <h3 className='text-2xl p-4 m-4 bg-gray-200'>
          Reading Time : {readingTime} min
        </h3>
      </div>
      <h2 className='bg-gray-200 p-4 m-4'>
        Bookmarked Blogs: {bookmarks.length}
      </h2>

      {bookmarks.map((bookmark, idx) => (
        <Bookmark key={idx} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};

export default Bookmarks;
