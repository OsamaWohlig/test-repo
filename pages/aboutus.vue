<template>
<div class="w-[100%]">
        <div class="relative w-full bg-white mx-2">
            <Header/>
            <NavLink/>
            <Aboutus/>
            <Footer/>
        </div>
        <BottomBar/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import NavLink from '../components/NavLinks.vue'
import Aboutus from '../components/About.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Header, Aboutus, NavLink, Footer },
}
</script>

<style>

</style>