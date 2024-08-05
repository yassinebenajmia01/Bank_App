import React from 'react';

function Checkout() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <div className="flex justify-between items-center mb-8">
        <a
          href="#"
          className="text-black font-bold bg-gray-200 p-4 rounded-xl w-[55%]"
        >
          Returning customer? <span className='text-red-500 underline'>Click here to log in</span>
        </a>
        <a
          href="#"
          className="text-black font-bold bg-gray-200 p-4 rounded-xl w-[40%]"
        >
          Have a coupon? <span className='text-red-500 underline'>Click here to enter your code</span>
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Billing Detail</h2>
          
          <div className="flex mb-4 space-x-4">
            <div className="w-1/2">
              <label htmlFor="first-name" className="block text-gray-700 text-sm font-bold mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="first-name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-1/2">
              <label htmlFor="last-name" className="block text-gray-700 text-sm font-bold mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="last-name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="company-name" className="block text-gray-700 text-sm font-bold mb-2">
              Company Name <span className='text-gray-400'>(Optional)</span>
            </label>
            <input
              type="text"
              id="company-name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
              Country / Region <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="US">United States (US)</option>
              <option value="CA">Canada</option>
              <option value="UK">United Kingdom</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="street-address" className="block text-gray-700 text-sm font-bold mb-2">
              Street Address
            </label>
            <input
              type="text"
              id="street-address"
              placeholder="House number and street name ... "
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <input
              type="text"
              id="street-address"
              placeholder="Apartment, suit, unit, etc (Optional) "
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow- mt-3 pt-3"
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="town-city" className="block text-gray-700 text-sm font-bold mb-2">
              Town / City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="town-city"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="state-county" className="block text-gray-700 text-sm font-bold mb-2">
              State / County <span className="text-red-500">*</span>
            </label> 
            <select
              id="state-county"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="WA">Washington</option>
              <option value="OR">Oregon</option>
              <option value="CA">California</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="zip-code" className="block text-gray-700 text-sm font-bold mb-2">
              Zip Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="zip-code"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone-number" className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone-number"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email-address" className="block text-gray-700 text-sm font-bold mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email-address"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <input type="checkbox" id="create-account" />
            <label htmlFor="create-account" className="inline-block text-gray-700 text-sm font-bold ml-2">
              Create an account?
            </label>
          </div>
          <div className="mb-8">
  <h2 className="text-xl font-bold mb-4 mt-10">Additional Information</h2>
  <div className="mb-4">
    <label htmlFor="order-notes" className="block text-gray-700 text-lg font-bold mb-2 mt-8 ">
      Order Notes <span className="text-gray-400">(Optional)</span>
    </label>
    <textarea
      id="order-notes"
      rows="4"
      placeholder="Note about your order, e.g. special note for delivery"
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    ></textarea>
  </div>
</div>
        </div>
        

        <div>
        <h2 className="text-xl font-bold mt-[60%] mb-30 my-3">Your Order</h2>
        <div className="bg-gray-100 rounded-md h-[25%]">
          <div className="flex justify-between mb-4 border-b border-gray-300">
            <div className="text-gray-500 font-bold text-base mt-5 ml-3 ">PRODUCT</div>
            <div className="text-gray-500 font-bold ml-[75%] text-base mt-5 my-3 ">SUB<span className='ml-[5%] text-base '>TOTAL </span>
            </div>
          

              
            </div>
            <div className="flex justify-between mb-4">
              <div className="flex items-center">
                <img
                  src="https://s3-alpha-sig.figma.com/img/1ca3/6b05/619c3f1e50a7b8603401775a7325fdd4?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mXJbv2VBilErfA~aSKgLJIbsiJT3cxyZGd244ADeTYOnlOp7bFgIA~G0DSWwnPMaq8pZE72AXw~9basngfnsJZu0W-~CRFhjGfZ2E6x8Zsd4JXdvNiOP9bGSGUohzrapaaX~5~I8cecQ6fjy2NiuEgLMBk3Ami3VZch~lncaJ5X1bnNZUDoZESqz9-spkwH5-teCBqzvLBS9XXAoHhgZHEBxtzkrz-AnJQ6VDWM~Q83LPZnXHAUF6V4uJXmOGdQn4NFiWvhzzMhaZ-s-jouuSLxd5fkzpBJZvqq8Gt72keN9UyVIlQLWMV1~cmrg88eXayYbFndB9Vw3Nh1uUL-qUg__"
                  alt="Product"
                  className="w-16 h-16 rounded-md ml-8"
                />
                <div className="ml-4">
                  <p className="text-gray-700 font-bold ">Pinnaeple Macbook Pro 2022</p>
                  <p className="text-gray-700 font-bold">M1/512GB</p>
                  <p className="text-gray-00">x 3</p>
                </div>
              </div>
              
            </div>
            <div className="flex justify-between mb-4 ">
              <p className="text-gray-700 font-bold">Worldwide Standard Shipping Free</p>
              <div className="font-bold text-red-500 mr-5">+ $9.50</div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-4">
              <p className="text-black font-bold text-xl ml-3">Order Total</p>
              <p className="text-green-500 font-bold text-xl mr-4">$1,746.50</p>
            </div>
          
          <div className="mb-4 bg-gray-300 h-[120%] rounded-b-lg ">
            <input
              type="checkbox"
              id="direct-bank-transfer"
              className="w-6 h-6 ml-5 text-green-600 mt-2"
              defaultChecked
            />
            <label htmlFor="direct-bank-transfer" className="inline-block text-gray-700 text-xl font-bold ml-4 mt-2">
              Direct Bank Transfer
            </label>
            <p className="text-gray-500 text-xl mt-1 ml-6">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </p>
          
          <div className="mb-4">
            <input type="checkbox" id="cash-on-delivery" className="w-6 h-6 ml-4 mt-6 text-green-600" />
            <label htmlFor="cash-on-delivery" className="inline-block text-gray-700 text-xl font-bold ml-3 ">
              Cash on Delivery
            </label>
          </div>
          <div className="mb-4">
  
  <div className="flex items-center">
  <input type="checkbox" id="paypal" className="w-6 h-6 ml-4 mt-6 text-green-600" />
    <label htmlFor="paypal" className="inline-block text-gray-700 text-xl font-bold ml-3 mt-4">
      Paypal
    </label>
    <a href="#" className="ml-2 text-blue-500 font-bold text-xl underline mt-4">
      What's Paypal?
    </a>
    <img
      src="https://s3-alpha-sig.figma.com/img/4828/a955/b097780d4cfc39322f712b2f45a624e6?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d-9S6adevVVgHkfQs19bhxUwlmP1Oqqm57vk6cfT2h9Phxr7og4TeH~ZCBVQpT~9FlPdWOIZs5HNjspUbb-SeqX3EI-NaEhW8obvpJuAMSTZ~VXnctweIhdJ3KOnYzuqWccWdhhvisBJW8CNlWhXrGgpyg9AnANjRQaz0vQRxOz0RemGMLyq2L92lscJXnHWpMlhvXWPDPgAwnQHnZX3QrzGSSefoKv1rfsq~HjFclNvRlli-jXl3aHTf-qJDCzOm--Fki-YtStSp05Z~3s1ZEMccobL6y4bh-gENlO7bqklDz7FKLkOoKII7P-IjKpeqBei97hB-IfQm469GqSF5g__"
      alt="Paypal"
      className="w-16 h-5 ml-auto mr-4"
    />
  </div>
</div>
          <button className="bg-green-500  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-[5%] w-[90%] mt-5">
            Place Order
          </button>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
}

export default Checkout;
