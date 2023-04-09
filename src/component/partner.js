import React from 'react'
import partner from "../Partner screen 1.png"
const Partner = () => {
    return (
        <div class="flex flex-col lg:flex-row mx-2 lg:mx-40 my-2 ">
                <section class="w-full lg:w-2/3 p-8 lg:my-auto">
                    <ul class="list-disc ">
                        <li class="mb-4 lg:text-xl">A trusted option for partners to make money near their surroundings .
                        </li>
                        <li class="mb-4 lg:text-xl">Work according to your choice on instant pay-outs.</li>
                        <li class="mb-4 lg:text-xl">Build a loyal profile and earn rewards on the go. </li>
                    </ul>
                </section>
                <aside class="w-full lg:w-1/3 p-8 flex justify-center items-center">
                    <img src={partner} alt="Your Image" class="h-[38rem] w-auto lg:h-3/5  lg:w-auto max-w-sm mx-auto" />
                </aside>
            </div>
    )
}

export default Partner