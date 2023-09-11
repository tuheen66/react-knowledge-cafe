import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <header className='flex justify-between items-center  py-4 border-b-2 w-10/12 mx-auto'>
      <h1 className='text-3xl font-bold '>Knowledge Cafe</h1>
      <img src={profile} alt='' />
    </header>
  );
};

export default Header;
