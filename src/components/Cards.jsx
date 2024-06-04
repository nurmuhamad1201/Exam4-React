import imgma from '../img/1517.png'

// eslint-disable-next-line react/prop-types
const TestimonialCard = ({ name, role, text }) => {
  return (
    <div className="bg-white dark:bg-black p-6 rounded-lg py-[20px] shadow-lg text-center">
      <img src={imgma} alt={name} className="mx-auto rounded-full w-24 h-24 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-500 mb-4">{role}</p>
      <p className="text-gray-600 mb-4">{text}</p>
      <div className="flex justify-center">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927C9.304 2.11 10.696 2.11 10.951 2.927l1.142 3.686c.073.238.282.4.53.41l3.897.119c.615.019.869.793.417 1.196l-3.003 2.633c-.19.167-.275.429-.222.678l.711 3.809c.129.691-.607 1.2-1.215.872L10 13.348l-3.218 1.982c-.607.328-1.344-.181-1.215-.872l.711-3.809c.053-.25-.032-.511-.222-.678L3.053 8.338c-.452-.403-.198-1.177.417-1.196l3.897-.119c.248-.01.457-.172.53-.41l1.142-3.686z"/>
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
