<template>
  <div class="mx-auto my-4 max-w-4xl md:my-6">
  <div class="overflow-hidden  rounded-xl shadow">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <div class="px-5 py-6 text-gray-900 md:px-8">
        <div class="flow-root">
          <div class="-my-6 divide-y divide-gray-200">
            <div class="py-6">
              <form>
                <div class="mx-auto max-w-2xl px-4 lg:max-w-none lg:px-0">
                  <div>
                    <h3
                      id="contact-info-heading"
                      class="text-lg font-semibold text-gray-900"
                    >
                      Contact information
                    </h3>
                    <div class="mt-4 w-full">
                      <label
                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        for="name"
                      >
                        Full Name
                      </label>
                      <input
                        class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Enter your name"
                        id="name"
                      />
                    </div>
                  </div>
                  <hr class="my-8" />
                  <div class="mt-10">
                    <h3 class="text-lg font-semibold text-gray-900">
                      Payment Mode
                    </h3>
                    <div class="mt-6 grid grid-cols-3 gap-x-4 gap-y-6 sm:grid-cols-4">
                      <div class="col-span-3 sm:col-span-4">
                        <div class="flex items-center ps-4">
                            <input id="bordered-radio-1" type="radio" value="cash" name="bordered-radio" class="w-4 h-4 text-indigo-500 bg-indigo-500 border-gray-300 accent-indigo-500 dark:focus:ring-indigo-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-0">
                            <label for="bordered-radio-1" class="w-full py-1 ms-2 text-sm font-medium dark:text-gray-600">Cash on Delivery</label>
                        </div>
                        <div class="flex items-center ps-4">
                            <input checked id="bordered-radio-2" type="radio" value="online" name="bordered-radio" class="w-4 h-4 text-indigo-500 bg-indigo-500 border-gray-300 accent-indigo-500 dark:focus:ring-indigo-500 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 focus:outline-none focus:ring-0">
                            <label for="bordered-radio-2" class="w-full py-1 ms-2 text-sm font-medium dark:text-gray-600">Pay Online</label>
                        </div>
                        </div>
                    </div>
                  </div>
                  <hr class="my-8" />
                  <div class="mt-10">
                    <h3 class="text-lg font-semibold text-gray-900">
                      Shipping address
                    </h3>
                    <div class="mt-6 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-3">
                      <div class="sm:col-span-3">
                        <label
                          for="address"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Address
                        </label>
                        <div class="mt-1">
                          <input
                            type="text"
                            id="address"
                            name="address"
                            autoComplete="street-address"
                            class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>
                      <div class="col-span-3">
                        <label
                          for="city"
                          class="block text-sm font-medium text-gray-700"
                        >
                          City
                        </label>
                        <div class="mt-1">
                          <input
                            type="text"
                            id="city"
                            name="city"
                            autoComplete="address-level2"
                            class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>
                      <div class="col-span-3">
                        <label
                          for="postal-code"
                          class="block text-sm font-medium text-gray-700"
                        >
                          Postal code
                        </label>
                        <div class="mt-1">
                          <input
                            type="text"
                            id="postal-code"
                            name="postal-code"
                            autoComplete="postal-code"
                            class="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                          />
                        </div>
                      </div>
                        <div class="sm:col-span-3">
                        <label
                          for="region"
                          class="block text-sm font-medium text-gray-700"
                        >
                          State
                        </label>
                        <div class="mt-1">
                          <select id="region" class="select flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50" v-model="selectedState" name="">
                            <option v-for="state,i in states" :key="i">{{state}}</option>
                        </select>
                      </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-10 flex justify-end border-t border-gray-200 pt-6">
                    <button
                      type="button"
                      class="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-gray-100 px-5 py-6 md:px-8">
        <div class="flow-root">
          <ul class="-my-7 divide-y divide-gray-200">
            <CheckoutCard/>
            <CheckoutCard/>
            <CheckoutCard/>
            <CheckoutCard/>
          </ul>
        </div>
        <hr class="mt-6 border-gray-200" />
        <ul class="mt-6 space-y-3">
          <li class="flex items-center justify-between text-gray-600">
            <p class="text-sm font-medium">Sub total</p>
            <p class="text-sm font-medium">₹1,14,399</p>
          </li>
          <li class="flex items-center justify-between text-gray-900">
            <p class="text-sm font-medium ">Total</p>
            <p class="text-sm font-bold ">₹1,14,399</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import CheckoutCard from './CheckoutCard.vue'
export default {
  components: { CheckoutCard },
    data(){
        let paymentMode = ''
        const states = [
      "Andhra Pradesh",
      "Arunachal Pradesh",
      "Assam",
      "Bihar",
      "Chhattisgarh",
      "Goa",
      "Gujarat",
      "Haryana",
      "Himachal Pradesh",
      "Jharkhand",
      "Karnataka",
      "Kerala",
      "Madhya Pradesh",
      "Maharashtra",
      "Manipur",
      "Meghalaya",
      "Mizoram",
      "Nagaland",
      "Odisha",
      "Punjab",
      "Rajasthan",
      "Sikkim",
      "Tamil Nadu",
      "Telangana",
      "Tripura",
      "Uttar Pradesh",
      "Uttarakhand",
      "West Bengal",
      "Andaman and Nicobar Islands",
      "Chandigarh",
      "Dadra and Nagar Haveli and Daman and Diu",
      "Lakshadweep",
      "Delhi",
      "Puducherry"
    ];
        return{
             paymentMode, states
        }
    }
}
</script>

<style>
</style>