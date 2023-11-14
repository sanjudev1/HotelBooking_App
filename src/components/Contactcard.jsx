const Contactcard = ({ number, type, action, icon }) => {
  return (
    <div className="bg-white text-black w-80 rounded-md shadow-2xl m-2 py-5 px-2 text-lg">
      <div className="flex">
        <div className="px-3 py-3 ml-2">{icon}</div>
        <div className="px-3 py-2">
          <h1>{type}</h1>
          <p>{number}</p>
        </div>
      </div>

      <button
        className="w-[80%] px-3 py-3 ml-5 bg-blue-800 text-white rounded-lg hover:bg-blue-950 text-xl
      "
      >
        {action}
      </button>
    </div>
  );
};

export default Contactcard;
