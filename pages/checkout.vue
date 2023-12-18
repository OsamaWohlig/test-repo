<template>
<div class="w-[100%]">
        <div class="relative w-full bg-white mx-2">
            <Header/>
            <NavLink/>
            <Checkout/>
            <Footer/>
        </div>
        <BottomBar/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import NavLink from '../components/NavLinks.vue'
import Checkout from '../components/Checkout.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Header, Checkout, NavLink, Footer },

}
</script>

<style>

</style>