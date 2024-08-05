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
          <h2 className="text-xl font-bold mt-[70%] mb-8">Your Order</h2>
          <div className="bg-gray-100 rounded-md ">
            <div className="flex justify-between mb-4">
              <div className="text-gray-700 font-bold">Product</div>
              <div className="text-gray-700 font-bold">Sub Total</div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="flex items-center">
                <img
                  src="https://cdn.pixabay.com/photo/2016/11/22/18/33/macbook-pro-1694306_960_720.jpg"
                  alt="Product"
                  className="w-16 h-16 rounded-md"
                />
                <div className="ml-4">
                  <p className="text-gray-700 font-bold">Pinnaeple Macbook Pro 2022</p>
                  <p className="text-gray-600">M1/512GB</p>
                  <p className="text-gray-600">x 3</p>
                </div>
              </div>
              <div className="text-gray-700 font-bold">$9.50</div>
            </div>
            <div className="flex justify-between mb-4">
              <p className="text-gray-700 font-bold">Worldwide Standard Shipping Free</p>
              <div className="text-gray-700 font-bold">-</div>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between mb-4">
              <p className="text-gray-700 font-bold text-lg">Order Total</p>
              <p className="text-gray-700 font-bold text-lg">$1,746.50</p>
            </div>
          </div>
          <h3 className="text-lg font-bold mb-4">Payment</h3>
          <div className="mb-4">
            <input
              type="checkbox"
              id="direct-bank-transfer"
              className="mr-2"
              defaultChecked
            />
            <label htmlFor="direct-bank-transfer" className="inline-block text-gray-700 text-sm font-bold">
              Direct Bank Transfer
            </label>
            <p className="text-gray-600 text-sm mt-1">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
            </p>
          </div>
          <div className="mb-4">
            <input type="checkbox" id="cash-on-delivery" className="mr-2" />
            <label htmlFor="cash-on-delivery" className="inline-block text-gray-700 text-sm font-bold">
              Cash on Delivery
            </label>
          </div>
          <div className="mb-4">
            <input type="checkbox" id="paypal" className="mr-2" />
            <label htmlFor="paypal" className="inline-block text-gray-700 text-sm font-bold">
              Paypal
              <a href="#" className="ml-2 text-blue-500 font-bold">
                What's Paypal?
              </a>
            </label>
            <img
              src="https://www.paypal.com/en_US/i/btn/btn_xpressCheckout.gif"
              alt="Paypal"
              className="w-24 h-8 ml-2"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
