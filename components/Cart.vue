<template>
  <div class="mx-auto flex max-w-3xl flex-col space-y-4 p-6 px-2 sm:p-10 sm:px-2">
  <h2 class="text-3xl font-bold">Your <span class="text-indigo-500">Cart</span></h2>
  <p class="mt-3 text-sm font-medium text-gray-700">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum eius
    repellat ipsam, sit praesentium incidunt.
  </p>
  <ul class="flex flex-col divide-y divide-gray-200">
    <CartCard/>
    <CartCard/>
    <CartCard/>
  </ul>
  <div class="space-y-1 text-right">
    <p>
      Total amount:<span class="font-semibold"> ₹48,967</span>
    </p>
  </div>
  <div class="flex justify-end space-x-4">
    <nuxt-link to="/">
    <button
      type="button"
      class="rounded-md border border-black px-3 py-2 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Back to shop
    </button>
    </nuxt-link>
    <nuxt-link to="checkout">
    <button
      type="button"
      class="rounded-md px-3 py-2 text-sm bg-indigo-500 font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
    >
      Order
    </button>
    </nuxt-link>
  </div>
</div>

</template>

<script>
import CartCard from './CartCard.vue'
export default {
    components:{CartCard}
}
</script>

<style>

</style>