<template>
  <div class="mx-auto max-w-7xl px-4 md:px-8 2xl:px-16">
  <div class="block grid-cols-9 items-start gap-x-10 pb-10 pt-7 lg:grid lg:pb-14 xl:gap-x-14 2xl:pb-20">
    <div class="col-span-5 grid grid-cols-2 gap-2.5">
      <div class="col-span-1 transition duration-150 ease-in hover:opacity-90">
        <img
          src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Nike Air Max 95 By You--0"
          class="w-full object-cover"
        />
      </div>
      <div class="col-span-1 transition duration-150 ease-in hover:opacity-90">
        <img
          src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Nike Air Max 95 By You--0"
          class="w-full object-cover"
        />
      </div>
      <div class="col-span-1 transition duration-150 ease-in hover:opacity-90">
        <img
          src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Nike Air Max 95 By You--0"
          class="w-full object-cover"
        />
      </div>
      <div class="col-span-1 transition duration-150 ease-in hover:opacity-90">
        <img
          src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2hvZXN8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
          alt="Nike Air Max 95 By You--0"
          class="w-full object-cover"
        />
      </div>
    </div>
    <div class="col-span-4 pt-8 lg:pt-0">
      <div class="mb-7 border-b border-gray-300 pb-7">
        <h2 class="text-heading mb-3.5 text-lg font-bold md:text-xl lg:text-2xl 2xl:text-3xl">
          Nike Air Max 95 By You
        </h2>
        <p class="text-body text-sm leading-6  lg:text-base lg:leading-8">
          The Nike Air Max 95 By You lets you take inspiration from the human
          body itself. The midsole represents the spine, graduated panels are
          the muscles, the lace loops are the shoe&#x27;s ribs and the mesh in
          the upper is the skin.
        </p>
        <div class="mt-5 flex items-center ">
          <div class="text-heading pr-2 text-base font-bold md:pr-0 md:text-xl lg:pr-2 lg:text-2xl 2xl:pr-0 2xl:text-4xl">
            $40.00
          </div>
          <span class="font-segoe pl-2 text-sm text-gray-400 line-through md:text-base lg:text-lg xl:text-xl">
            $50.00
          </span>
        </div>
      </div>
      <div class="space-s-4 3xl:pr-48 flex items-baseline gap-2 border-b border-gray-300 pb-8  md:pr-32 lg:pr-12 2xl:pr-32">
        <div class="group flex h-11 flex-shrink-0 items-center justify-between overflow-hidden rounded-md border border-gray-300 md:h-12">
          <button @click="decrement" class="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-s border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12">
            -
          </button>
          <span class="duration-250 text-heading flex h-full w-12  flex-shrink-0 cursor-default items-center justify-center text-base font-semibold transition-colors ease-in-out  md:w-20 xl:w-24">
            {{quantity}}
          </span>
          <button @click="increment"
            class="text-heading hover:bg-heading flex h-full w-10 flex-shrink-0 items-center justify-center border-e border-gray-300 transition duration-300 ease-in-out focus:outline-none md:w-12"
          >
            +
          </button>
        </div>
        <AddToCartBtn class="h-[3.25rem]"/>
      </div>
      <div class="shadow-sm ">
        <header class="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
          <h2 class="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
            Product Details
          </h2>
          <div class="relative flex h-4 w-4 flex-shrink-0 items-center justify-center">
            <div class="bg-heading h-0.5 w-full rounded-sm"></div>
            <div class="bg-heading absolute bottom-0 h-full w-0.5 origin-bottom scale-0 transform rounded-sm transition-transform duration-500 ease-in-out"></div>
          </div>
        </header>
        <div>
          <div class="pb-6 text-sm leading-7 text-gray-600 md:pb-7">
            Our Customer Experience Team is available 7 days a week and we offer
            2 ways to get in contact.Email and Chat . We try to reply quickly,
            so you need not to wait too long for a response!.
          </div>
        </div>
      </div>
      <!-- <div class="">
        <header class="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
          <h2 class="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
            Additional Information
          </h2>
        </header>
      </div>
      <div class="">
        <header class="flex cursor-pointer items-center justify-between border-t border-gray-300 py-5 transition-colors md:py-6">
          <h2 class="text-heading pr-2 text-sm font-semibold leading-relaxed md:text-base lg:text-lg">
            Customer Reviews
          </h2>
        </header>
      </div> -->
    </div>
  </div>
</div>

</template>

<script>
import AddToCartBtn from './AddToCartBtn.vue'
export default {
    components:{AddToCartBtn},
    data(){
        let quantity = 1
        return{
            quantity
        }
    },
    methods:{
        increment(){
            this.quantity = this.quantity + 1
        },
        decrement(){
            if(this.quantity>1) this.quantity=this.quantity-1
        }
    }
}
</script>

<style>

</style>