import { FaPlug, FaDesktop, FaClipboardList, FaEnvelopeOpenText } from 'react-icons/fa';

const Features = () => {
    return(
            <div className="flex flex-col items-center mt-8 md:flex-row md:justify-center md:mt-16">
              <div className="w-full md:w-2/3">
                <h2 className="text-green-500 text-3xl font-bold text-center mb-8">Key Features</h2>
                <ul className="text-gray-300 space-y-8 md:grid md:grid-cols-2 md:gap-8">
                  <li className="flex flex-col items-center md:items-start space-y-4">
                    <div className="rounded-full bg-green-500 p-2 md:p-4">
                      <FaPlug className="w-8 h-8 md:w-12 md:h-12 text-white" />
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white">Powerful API</h3>
                      <p className="text-gray-400 mt-2 md:text-lg max-w-md">
                        Integrate with ease and speed. Our API is designed to make the process as simple as possible.
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col items-center md:items-start space-y-4">
                    <div className="rounded-full bg-green-500 p-2 md:p-4">
                      <FaDesktop className="w-8 h-8 md:w-12 md:h-12 text-white" />
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white">Connects to Your Store</h3>
                      <p className="text-gray-400 mt-2 md:text-lg max-w-md">
                        Connect your Shopify store and access your customer support inbox directly in our app.
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col items-center md:items-start space-y-4">
                    <div className="rounded-full bg-green-500 p-2 md:p-4">
                      <FaClipboardList className="w-8 h-8 md:w-12 md:h-12 text-white" />
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white">Automated Customer Support</h3>
                      <p className="text-gray-400 mt-2 md:text-lg max-w-md">
                        Respond to your customers with order and shipping updates, refunds, returns, and replacements, all from within our app.
                      </p>
                    </div>
                  </li>
                  <li className="flex flex-col items-center md:items-start space-y-4">
                    <div className="rounded-full bg-green-500 p-2 md:p-4">
                      <FaEnvelopeOpenText className="w-8 h-8 md:w-12 md:h-12 text-white" />
                    </div>
                    <div className="mt-2 md:mt-0 md:ml-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white">AI-Powered Support</h3>
                      <p className="text-gray-400 mt-2 md:text-lg max-w-md">
                        Train the AI in our app to respond to customer support emails based on rules you set in plain English, and filter out emails that do not require a response.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
    );
};

export default Features;

