<template>
   <div>
       <div class="banner">
         <img v-for="(item ,index) in bannerList" :src="item" alt="" height="160" width="100%"
              v-bind:key="index"  v-show="index==curIndex"
              class="slide" >

         <ul style="position: absolute; left: 50%; top: 200px;margin-left: -30px;">
           <li v-for="(item,index) in bannerList" :key="index"
               style="list-style: inside ;text-align: center; float: left;color: white;width: 25px;font-size: 30px;"
               :class="{ on : index === curIndex }"></li>
         </ul>

         <!-- <img src="Images/1.jpg" height="150" width="100%"/>
          <img src="../../public/Images/2.jpg" height="150" width="100%"/>
          <img src="../../public/Images/3.jpg" height="150" width="100%"/>
          <img src="../../public/Images/4.jpg" height="150" width="100%">-->
       </div>
   </div>
</template>

<script>
 import store from '@/store.ts'
export default {
  name: 'Recommend',
  store,
  data () {
    return {
      curIndex: 0,
      bannerList: ['../static/Images/1.jpg', '../static/Images/2.jpg', '../static/Images/3.jpg', '../static/Images/4.jpg']
    }
  },
  methods: {
    autoplay () {
      setInterval(this.playBanner, 2000)
    },
    playBanner () {
      this.curIndex++
      if (this.curIndex === this.bannerList.length) {
        this.curIndex = 0
      }
    }
  },
  mounted () {
    store.state.headerTitle = '推荐'
    this.autoplay()
  }
}
</script>

<style scoped>
  .on{
     color: black!important;
  }
  .banner {
    height: 150px;
    width: 100%;
  }
</style>
