<template>
<div class="w-[100%]">
        <div class="relative w-full bg-white mx-2">
            <Header/>
            <NavLink/>
            <MyOrders/>
            <Footer/>
        </div>
        <BottomBar/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import NavLink from '../components/NavLinks.vue'
import MyOrders from '../components/Order.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Header, MyOrders, NavLink, Footer },

}
</script>

<style>

</style>