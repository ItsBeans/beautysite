'use client'

import Header from "./Header"
import Foot from "./Foot"


export default function SkinBoost() {
  

  return (
    <div className="bg-white">
      <Header/>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Skin Booster
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-left">
            Elevate your skincare routine with our SkinBoost treatment, designed to deeply hydrate and rejuvenate your skin from within. This innovative treatment infuses your skin with hyaluronic acid, vitamins, and essential nutrients, providing intense hydration and improving skin texture and elasticity.
            </p>
            <ul class=" text-left py-12">
              <li>The steps are as follows:</li>
              <li><span class="font-bold">Cleansing:</span> To remove makeup and impurities.</li>
              <li><span class="font-bold">Numbing:</span> Apply numbing cream to ensure client is comfortable.</li>
              <li><span class="font-bold">Skin booster injection:</span> To deliver vitamins and other helpful ingredients into the skin.</li>
              <li><span class="font-bold">Serum Application:</span> To enhance the SkinBoost results and soothe the skin.</li>
              <li><span class="font-bold">Toning:</span>  To balance the skin’s pH.</li>
              <li><span class="font-bold">Moisturising:</span>  To hydrate and protect the skin.</li>
            </ul>
            <p className="mt-6 text-lg leading-8 text-gray-600">45 Minutes - £150 using profihlo, £110 using belotero </p>
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
      </div>
      <Foot/>
    </div>
  )
}
