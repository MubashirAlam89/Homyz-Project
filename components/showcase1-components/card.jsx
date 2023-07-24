const Card = ({ src, href, title }) => {
  return (
    <div className="relative w-fit">
      <div className="z-40 w-full h-full top-4 opacity-0 hover:opacity-100 transition-all duration-500 right-4 absolute pt-72 pl-10 bg-red-400">
        <h1 className="text-3xl text-left w-fit text-white hover:text-black transition-all cursor-pointer ">
          {title}
        </h1>
      </div>
      <img src={src} alt="img" />
    </div>
  );
};

export default Card;
