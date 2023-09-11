import "./App.css";
import Header from "./Components/Header/Header";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";

function App() {
  return (
    <>
      <Header></Header>

      <div className='md:flex w-10/12 mx-auto my-4'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  );
}

export default App;
