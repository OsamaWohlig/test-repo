<template>
    <div class="w-[100%]">
        <div class="relative w-full bg-white mx-2">
            <Header/>
            <NavLink/>
            <ProductDetails/>
            <Footer/>
        </div>
        <BottomBar/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import NavLink from '../components/NavLinks.vue'
import ProductDetails from '../components/ProductDetails.vue'
export default {
    components:{Header,NavLink,ProductDetails}
}
</script>

<style>

</style>