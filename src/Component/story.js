import React from 'react';

function Story() {
  return (
    <>
      <h2 className="text-2xl font-bold mt-2 ml-4">TOP CELL PHONES & TABLETS</h2>
      <div className="flex flex-col bg-white">
        <div className="flex w-full space-x-4 mt-1">
          <div className="relative flex p-4 rounded-[13px] w-[60%] h-[500px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/ef02/d1db/263e787dceaa0e3d8c30e163080b0d2b?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cTGTAMsQLcDmZSmJu6iU7hrK~PqYfqq-nR7xJuee1Cpcpq3WgE8LWwSD5qnGKqV~-qfLvMkwqbin~ybIxlmzKHNysgzFbYM9AQN7DwBoZ2TA3o2M87ZloRnk9s5rZ2hfoaaiP3QOBglNDns~kx9ACnZkrkvLM-JbwV42Vzs44x2UfREcc-vwaf1JwGM-udimQqGJ6cIgXmSRnFTBi4A-UMLhO~6OoDq7J1tu2EO-z2BIqFVz3MdudgiqjbFzBxf5DqoLaHHq12cDrNd8WsLT1ewv5rLlyKfcXyex32Tk3~NbOdVFkAlAoyXREe0iBug7fRQKFPJ93oHQHI5OQeHACA__"
              alt="Noise Cancelling Headphone"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute text-white">
              <div className="text-left ml-7 mt-10 text-9xl">
                <h1 className="text-4xl font-bold">Noise Cancelling</h1>
                <h1 className="text-3xl font-thin ml-1">Headphone</h1>
              </div>
              <p className="text-gray-200 text-xl mt-7 ml-11">
                Boso Over-Ear Headphone<br />WiFi, Voice Assistant,<br />Low Latency Game Mode
              </p>
              <button className="bg-white border border-gray-300 text-gray-700 mt-40 px-4 py-2 rounded-full hover:bg-gray-200 ml-7 font-bold w-[120px] h-[40px]">
                BUY NOW
              </button>
            </div>
            <div className="absolute bottom-0 right-0 mb-7 mr-7">
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-full hover:bg-gray-200 w-[120px] h-[40px] flex justify-between items-center mb-8 mr-5">
                <span className="flex flex-col items-center text-xs">
                  {'prv'.split('').map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </span>
                <span className='font-bold'>3 / 3</span>
                <span className="flex flex-col items-center text-xs">
                  {'nxt'.split('').map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </span>
              </button>
            </div>
          </div>
          <div className="relative flex bg-white p-4 rounded-lg w-[40%] h-[500px]">
            <img
              src="https://s3-alpha-sig.figma.com/img/8c32/60e6/8f2363e9e7dcabb1fbce5816640c968f?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Lcu8Dg97irV8Wd~vPv4V~GboxSAgXhXbxbxuHwP3nR8~qGvgKPpdXIOhQcO64ldispdaU57rNMfRJnY1va05646LbKOsJqGSWPJ~QAsEbZhJsFiFkAPPDSpclw3QLykKgrbZ0iQO2IE24y4m9VMbXDpIaN9-NDH8Rq4P5dHZ0LlvPsSiiSrTWzWV2CCS~sIkB0NJOk8OTIu6vFctv0MxQz7ncI7KUs7sjTHX57aiCY8FDH50jna9TtCseEzYhUrp9qmYWjhEosRGAZGvKQaBKx9TTJ41iBhkWlfq8od8IEcXdTVWBtKcabPtUUhbLX4Aiam4Vc4ivZEqXAG6xvHb1A__"
              alt="redmi note 12 Pro+ 5g"
              className="w-full h-full object-cover rounded-md"
            />
            <div className="absolute left-[10%] text-black">
              <div className='flex mt-4'>
                <h1 className="text-3xl font-bold">redmi note 12<br /> Pro+ 5g</h1>
                <button className="bg-black text-white px-4 rounded-md hover:bg-gray-800 ml-40 h-12 mt-9">
                  SHOP NOW
                </button>
              </div>
              <p className="text-black text-xl mt-4">Rise to the challenge</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Story;
