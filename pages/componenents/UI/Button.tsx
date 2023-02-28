const Button = ({ showButton = true, buttonText = '', onClick = () => {} }) => {
    return (
      <button className={`flex items-center justify-center font-inter font-medium text-base text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full pl-8 pr-6 py-3 mt-8 transition-opacity duration-1000 ${showButton ? 'opacity-100' : 'opacity-0'}`} onClick={onClick}>
        <span>{buttonText}</span>
        <svg className="w-4 h-4 ml-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    );
  };

  export default Button;
