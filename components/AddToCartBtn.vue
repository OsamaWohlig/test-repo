<template>
  <button
        type="button"
        class="mt-4 w-full border bg-[#6366f1] text-[#ffffff] rounded-lg text-white px-2 py-1.5 text-sm font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black hover:bg-indigo-600"
        @click="addToCart"
      >
        Add to Cart
      </button>
</template>

<script>
export default {
    methods:{
        addToCart(){
            this.$toast.open({message:'Added to Cart',position:'top-right'})
        }
    }
}
</script>

<style>
.v-toast .v-toast__item{
    background-color: #6366f1;
}
</style>