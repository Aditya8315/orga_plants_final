import React from 'react'
import Group from "../Group.png"
const Store = () => {
    return (
        
    <div class="flex flex-col lg:flex-row mx-2 lg:mx-40 my-2 ">
    <section class="w-full lg:w-2/3 p-8 lg:my-auto">
    <ul class="list-disc ">
                <li class="mb-4 lg:text-xl">Detailed view & advanced Analytics for easy management.
                </li>
                <li class="mb-4 lg:text-xl">Easy customer support for any your business needs. </li>
                <li class="mb-4 lg:text-xl">Chat directly with customers.</li>
            </ul>
    </section>
    <aside class="w-full lg:w-1/3 p-8 flex justify-center items-center">
        <img src={Group} alt="Your Image" class="h-[18rem] w-auto lg:h-3/5  lg:w-auto max-w-sm mx-auto" />
    </aside>
</div>
    )
}

export default Store