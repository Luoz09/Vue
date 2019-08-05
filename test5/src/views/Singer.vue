<template>
   <div>
     <ul>
       <li v-for="(group, index) in singerList" :key="index" class="headerLi">
         <span style="padding-left: 30px" > {{ group.title }} </span>
         <ul>
           <li v-for="(item,index) in group.items" :key="index" class="contentLi"  @click="showSingerDetails(item)">
             <span style="padding-left: 50px;"> {{ item.name }} </span>
           </li>
         </ul>
       </li>
      <!-- <li :key="index" v-for = "(item, index) in singerList" class="singerLi"> {{ item.name }} </li>-->
     </ul>
     <ul style="background:black;opacity: 0.7;  position: fixed;right: 15px;z-index: 99;top: 115px;">
       <li v-for="(item, index) in singerList" :key="index">
           <span style="font-size: 20px;padding: 5px;"> {{ item.title }} </span>
       </li>

     </ul>
   </div>
</template>

<script>
import { getSingerList } from '@/api/Singer.js'
import  store from '@/store.ts'
export default {
  name: 'Singer',
  data () {
    return {
      singerList: []
    }
  },
  inject: ['parentvar'],
  methods: {
    showSingerDetails (item) {
      console.log(item)
      this.$router.push({
        name: 'SingerDetails',
        params: {
          item: item
        }
      })
    }
  },
  computed: {
  },
  mounted () {
    console.log(this.parentvar)
    let a = [1, 2, 3]
    let b = [4, 5, 6]
    let c = [...a, ...b]
    let d = c.map((item) => {
      return item + 1
    })
    console.log(d)

    this.$emit('changemsg', '歌手')

    store.state.headerTitle = '歌手'
    getSingerList().then(res => {
      let singerList = res.data
      let map = []
      singerList.forEach(function (item, index) {
        const key = item.FIndex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push({
          name: item.name,
          author: item.author,
          price: item.price
        })
      })
      let ret = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          ret.push(val)
        }
      }
      ret.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      this.singerList = ret
    })
  }
}
</script>

<style scoped>
   .singerLi{
     line-height: 50px;
     text-align: left;
     padding-left: 50px;
   }
  .headerLi{
    width: 100%;
    line-height: 40px;
    background: burlywood;
    text-align: left;
  }

  .contentLi{
    background: black;
    color: white;
  }

</style>
