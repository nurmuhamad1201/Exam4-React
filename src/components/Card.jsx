// eslint-disable-next-line react/prop-types
const InfoCard = ({ imageSrc, title, description, exploreText, authorImageSrc, authorName, authorRole }) => {
  return (
    <div className="flex items-center md:flex-wrap px-[50px] lg:px-0 gap-4 dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg">
      <img src={imageSrc} alt="" className="w-[50%] md:w-[95%] rounded-[30px]" />
      <div>
        <h1 className="text-[50px] font-bold mb-2">{title}</h1>
        <p className="text-lg mb-4">{description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">{exploreText}</button>
        <div className="flex items-center gap-4 mt-4">
          <img src={authorImageSrc} alt="" className="w-20 h-20 rounded-full" />
          <div>
            <h1 className="text-xl font-bold mb-2">{authorName}</h1>
            <p className="text-base">{authorRole}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
// Import necessary libraries and dependencies

const InfoCard2 = ({ imageSrc, title, description, exploreText }) => {
  return (
    <div className="flex items-center md:flex-wrap px-[50px] lg:px-0 gap-4 dark:bg-gray-800 dark:text-white p-6 rounded-lg shadow-lg">
      <div>
        <h1 className="text-[50px] font-bold mb-2">{title}</h1>
        <p className="text-lg mb-4">{description}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">{exploreText}</button>
      </div>
      <img src={imageSrc} alt="" className="w-[50%] md:w-[95%] rounded-[30px]" />
    </div>
  );
};

export default  InfoCard;


export { InfoCard2 };
