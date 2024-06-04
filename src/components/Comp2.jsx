

const NewsletterForm = () => {
  return (
    <div className="bg-black text-white p-8 rounded-lg shadow-lg mt-12 text-center">
      <h2 className="text-2xl font-semibold mb-4">Discover the power of creative freedom with Align.</h2>
      <p className="text-gray-400 mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pratium consectetur egestas mauris adipiscing elit.</p>
      <form className="space-y-4">
        <input type="text" placeholder="Your Name" className="w-full p-3 rounded-lg border border-gray-700 bg-black focus:outline-none focus:ring-2 focus:ring-pink-500" />
        <input type="email" placeholder="Email Address" className="w-full p-3 rounded-lg border border-gray-700 bg-black focus:outline-none focus:ring-2 focus:ring-pink-500" />
        <button type="submit" className="w-full py-3 rounded-lg bg-pink-500 hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 text-white">Submit</button>
      </form>
    </div>
  );
};

export default NewsletterForm;
