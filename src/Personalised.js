'use client'


import Foot from './Foot';
import Header from './Header';


export default function Personalised() {

  /* To do: Fix the way this page looks on mobile */

  return (
    <div className="">
      <Header/>
        <div className=" place-content-center mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Signature facial
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
            Unlock the secret to radiant, healthy skin with our Signature Facial. Whether you’re combating dryness, acne, aging, or simply want to maintain your glow, our expert beauty therapists will create a custom treatment plan just for you.
            </p>
            
            <ul class=" text-left py-12">
              <li>The steps of the signature facial are as follows:</li>
              <li><span class="font-bold">Cleansing:</span> To remove makeup and impurities.</li>
              <li><span class="font-bold">Exfoliation:</span> To slough off dead skin cells.</li>
              <li><span class="font-bold">Steaming:</span> To open up pores.</li>
              <li><span class="font-bold">Extraction:</span>  To remove blackheads or whiteheads.</li>
              <li><span class="font-bold">Massage:</span>  To promote circulation and relaxation.</li>
              <li><span class="font-bold">Mask:</span>  To treat specific skin concerns and further nourish the skin.</li>
              <li><span class="font-bold">LED:</span>  boost collagen production, reduce inflammation, and improve overall skin tone.</li>
              <li><span class="font-bold">Toning:</span>  To balance the skin’s pH.</li>
              <li><span class="font-bold">Moisturising:</span>  To hydrate and protect the skin.</li>
            </ul>

            <p className="mt-6 text-lg leading-8 text-gray-600"> 90 Minutes - £80 </p>
            
           
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      
      <Foot/>
    </div>
  )
}
