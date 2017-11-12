<template>
  <div class="home-body">
    <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="n in news" :key="n.name">
      <a :href="'../../static/publications/' + n.link"><img class="news" :src="'../../static/img/featured_news/' + n.image" :alt="n.name"></a>
      <a :href="'../../static/publications/' + n.link">
        {{ n.name }}
      </a>
    </swiper-slide>
    <!-- Optional controls -->
    <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
    <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
    <!-- <div class="swiper-button-next" slot="button-next"></div> -->
    <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
  </div>
  
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  export default {
    name: 'carrousel',
    data() {
      return {
        news: [
          {
            name: 'Drones to Grow Mind of Their Own',
            link: 'https://ucrtoday.ucr.edu/49421',
            image: 'Drone.jpg'
          },
          {
            name: 'Diversity-aware Multi-Video Summarization',
            link: 'TIP_Rameswar.pdf',
            image: 'tip.png'
          },
          {
            name: 'Multi-View Surveillance Video Summarization via Joint Embedding and Sparse Optimization',
            link: 'TMM_Rameswar.pdf',
            image: 'tmm.png'
          },
          {
            name: 'Unsupervised Adaptive Re-identification in Open World Dynamic Camera Networks',
            link: 'cvpr2017reid.pdf',
            image: 'cvpr.png'
          },
          {
            name: 'Collaborative Summarization of Topic-Related Videos',
            link: 'cvpr2017summ.pdf',
            image: 'cvpr2017summ.png'
          },
          {
            name: 'Non-Uniform Subset Selection for Active Learning in Structured Data',
            link: 'cvpr2017subset.pdf',
            image: 'cvpr2017typical.png'
          },
          {
            name: 'The Impact of Typicality for Informative Representative Selection',
            link: 'cvpr2017typicality.pdf',
            image: 'cvpr2017typicality.png'
          },
          {
            name: 'Online Adaptation for Joint Scene and Object Classification',
            link: 'eccv2016_jawad.pdf',
            image: 'eccv2016_jawad.png'
          },
          {
            name: 'Temporal Model Adaptation for Person Re-Identification',
            link: 'niki-eccv16.pdf',
            image: 'niki-eccv16.png'
          }      
        ],
        notNextTick: true,
        swiperOption: {
          // pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 1000,
          // prevButton: '.swiper-button-prev',
          // nextButton: '.swiper-button-next',
          slidesPerView: 4,
          paginationClickable: true,
          spaceBetween: 30,
          grabCursor: true
        }
      }
    },
  }
</script>