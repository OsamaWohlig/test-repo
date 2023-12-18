<template>
<div class="w-[100%]">
        <div class="relative w-full bg-white mx-2">
            <Header/>
            <NavLink/>
            <Profile/>
            <Footer/>
        </div>
        <BottomBar/>
    </div>
</template>

<script>
import Header from '../components/Header.vue'
import NavLink from '../components/NavLinks.vue'
import Profile from '../components/Profile.vue'
import Footer from '../components/Footer.vue'
export default {
  components: { Header, Profile, NavLink, Footer },

}
</script>

<style>

</style>