<template>
<div class="w-[100%]">
<div class="relative w-full bg-white">
  <Header/>
  <NavLink/>
  <Hero/>
  <Swiper/>
  <Services/>
  <Footer/>
</div>
  <BottomBar/>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import NavLink from '../components/NavLinks.vue'
import BottomBar from '../components/BottomBar.vue'
import Swiper from '../components/Swiper.vue'
import Services from '../components/Services.vue'
import Footer from '../components/Footer.vue'
export default {
  components:{Header, Hero, NavLink, BottomBar, Swiper, Services, Footer},
  name: 'IndexPage'
}
</script>
