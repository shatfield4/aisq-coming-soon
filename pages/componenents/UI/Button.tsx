const Button = ({ showButton = true, buttonText = '', onClick = () => {} }) => {
  return (
    <button
      className={`flex items-center justify-center font-inter font-medium text-base text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl pl-6 pr-5 py-3 mt-8 transition-all duration-300 ${showButton ? 'opacity-100' : 'opacity-0'} transition-all hover:shadow-2xl hover:scale-105`}
      onClick={onClick}
    >{buttonText} &rarr;
    </button>
  );
};

export default Button;
