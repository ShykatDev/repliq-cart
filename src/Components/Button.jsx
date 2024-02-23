const CardButton = ({ children }) => {
  return (
    <button
      className={`px-3 sm:px-4 lg:px-3.5 py-2 sm:py-2 lg:py-2 text-sm border rounded-md flex items-center gap-2 duration-300 hover:bg-neutral-900 hover:text-neutral-100 hover:shadow-lg bg-neutral-900 text-neutral-100`}
    >
      {children}
    </button>
  );
};

export default CardButton;
