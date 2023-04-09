import React from 'react'
import QR from '../QR.png'
import Play from '../playstore.png'
import App from '../App.png'
const Welcome = () => {
  return (
    <>
    <div class="relative flex flex-col md:flex-row mb-10 px-4 md:px-0">
  <section class="md:w-3/5 flex flex-col items-center justify-center md:m-10">
    <h1 class="text-5xl text-black w-full md:w-[800px] py-4 md:ml-20">Groceries from your local stores on your doorstep!</h1>
    <div class="flex-row sm:flex-col justify-evenly items-center my-10">
      <img src={Play} alt="Play Store" class="w-auto md:w-[329px] h-auto"/>
      <img src={QR} alt="QR Code" class="w-auto md:w-auto h-auto mx-auto my-5"/>
    </div>
  </section>
  <aside class="md:w-2/5 flex items-center justify-center">
    <img src={App} alt="App" class="w-auto md:w-[293px] md:h-[630px] m-auto"/>
  </aside>
</div>
    {/* <div class=" relative  flex mb-10">
  <section class="w-3/5 items-center justify-center m-10">
    <h1 class=" text-black text-5xl  w-[800px] py-4 ml-20">Groceries from your local stores on your doorstep!</h1>
    <div class="flex justify-evenly items-center my-10">
      <img src={Play} alt="" class="mx-2 w-[329px] h-auto"/>
      <img src={QR} alt="" class="mx-2 w-auto h-auto"/>
    </div>
  </section>
  <aside class="w-2/5 items-center justify-center">
    <img src={App} alt="" class="w-[293px] h-[630px] m-auto"/>
  </aside>
</div> */}
    </>
  )
}

export default Welcome