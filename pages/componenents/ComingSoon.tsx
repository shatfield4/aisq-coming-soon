import Image from "next/image";
import { useEffect, useState } from "react";
import Button from "./UI/Button";

const ComingSoon = () => {
  const [showContent, setShowContent] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    setShowContent(true);
    setTimeout(() => setShowButton(true), 1500);
    setTimeout(() => setShowImage(true), 1500);
  }, []);

  const handleSignUpEarlyAccess = () => {
    window.location.href = "https://airtable.com/shrnoCjCt6pObbkIn";
  };

  return (
    <div className="container mx-auto flex flex-col items-center justify-center mb-40">
      <div
        className={`relative h-40 w-40 md:h-40 md:w-64 transition-opacity duration-500 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src="/aisq_full_logo.svg"
          alt="Aisq Logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <h1
        className={`font-inter font-medium md:text-6xl text-4xl leading-6xl tracking-tighter text-white bg-clip-text text-center transition-opacity duration-1000 delay-500 mx-6 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        Automate Your Shopify
        <br />
        Customer Service Experience
      </h1>
      <div
        className={`font-inter font-normal md:text-2xl text-xl leading-2xl text-gray-400 mt-5 text-center mx-6 transition-opacity duration-1000 delay-1000 ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        Your solution for efficient, automated customer support that simplifies
        e-commerce operations and cuts costs.
      </div>
      <Button
        buttonText={"Join Waitlist"}
        showButton={showButton}
        onClick={handleSignUpEarlyAccess}
      />
      <div
        className={`flex justify-center px-8 my-16 transition-opacity duration-1000 ${
          showImage ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="gap-8 items-start flex justify-center w-full md:w-2/3">
          <div className="relative group">
            <div className="absolute -inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button className="relative bg-black rounded-2xl leading-none flex items-center divide-x divide-gray-600 text-white">
              <Image
                src="/dashboard-embedded.png"
                alt="Dashboard"
                width={1200}
                height={800}
                className="rounded-2xl"
              />
            </button>
          </div>
        </div>
      </div>

      <h1 className="font-inter font-medium md:text-6xl text-4xl leading-4xl tracking-tighter text-white bg-clip-text text-center transition-opacity duration-1000 delay-1500 mx-6 mt-20">
        Aisq is coming soon to the public.
      </h1>
      <div
        className={`font-inter font-normal md:text-2xl text-xl leading-2xl text-gray-400 mt-5 text-center mx-6`}
      >
        Sign up now to get early access.
      </div>
      <div className="flex flex-col">
        <Button
          buttonText={"Sign Up for Early Access"}
          onClick={handleSignUpEarlyAccess}
        />
      </div>
    </div>
  );
};

export default ComingSoon;
