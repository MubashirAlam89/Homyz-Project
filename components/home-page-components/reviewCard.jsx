import "./reviewcard.css";
const ReviewCard = ({ title, from, imgSrc }) => {
  return (
    <div
      className={` w-full review-card flex items-center gap-4 p-5 rounded-md`}
    >
      <img
        className="w-20 h-20 object-cover rounded-md"
        src={imgSrc}
        alt={imgSrc}
      />
      <div>
        <h2 className="title-font text-xl font-semibold mb-2">{title}</h2>
        <p className="text-xl">{from}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
