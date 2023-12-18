<template>
  <div class="rounded-md border">
    <img
      src="https://mobilezon.in/wp-content/uploads/2023/07/ipone-14-pro-max-tempered-glass-screen-protector-5-1.jpg"
      alt="Laptop"
      class="aspect-[16/9] object-contain w-full h-[170px] rounded-md md:aspect-auto md:h-[300px] lg:h-[250px]"
    />
    <div class="p-4">
    <nuxt-link to="product">
      <h1 class="inline-flex items-center text-lg font-semibold hover:text-indigo-500 hover:cursor-pointer">
        Nike Airmax v2
      </h1>
    </nuxt-link>
      <p class="mt-3 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
      <AddToCartBtn/>
    </div>
  </div>
</template>

<script>
import AddToCartBtn from './AddToCartBtn.vue'
export default{
    components:{AddToCartBtn}
}
</script>

<style>

</style>