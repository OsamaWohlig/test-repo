<template>
<div>
    <div class="flex flex-col text-center w-full my-[3rem]">
      <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">ROOF PARTY POLAROID</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
    </div>
  <VueSlickCarousel v-bind="settings">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  </VueSlickCarousel>
</div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import Card from './Card.vue'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

  export default {
    name: 'Slider',
    components: { VueSlickCarousel, Card },
  data() {
    return {
      settings: {
           slidesToShow:3.5,
           slidesToScroll:2,
           infinite:true,
           dots:true,
           arrows:false,
           speed: 500,
           responsive: [
               {
                   "breakpoint": 1024,
                    "settings": {
                        arrows:false,
                        "slidesToShow": 3.5,
                        "slidesToScroll": 2,
                        "infinite": true,
                        "dots": true
                    }
                },
                {
                    "breakpoint": 600,
                    "settings": {
                        "slidesToShow": 2,
                        arrows:false,
                        "slidesToScroll": 1,
                        "initialSlide": 2,
                        "infinite": true,
                        "dots": true
                    }
                },
                {
                    "breakpoint": 480,
                    "settings": {
                        "slidesToShow": 1,
                        arrows:false,
                        "slidesToScroll": 1,
                        "infinite": true,
                        "dots": true
                    }
                }
            ]
      },
    }
  },
}
</script>

<style>
.slick-dots li button:before {
    margin-top: 1rem;
background-color: #6366f1;
height: 15px;
width: 15px;
border-radius: 7px;
text-indent: -9999px;
overflow:hidden; 
}
.slick-list {margin: 0 -6px;}
.slick-slide>div {padding: 0 6px;}
</style>