<template>
    <div class="header">
        <i class="fa fa-music" style="font-size: 1.5em"></i>
        &emsp;My Music App
         [ {{ msg }} ]

        <span v-for="item in lists" style="margin: 0 10px" @click="changeComp(item)">{{ item }}</span>
        <i class="fa fa-user icon_right" style="font-size: 1.5em"></i>
    </div>
</template>

<script>
export default {
  name: 'Header',
  props: ["msg"],
  inject: ['parentvar','msg1'],
  data () {
    return {
      lists: ["推荐","歌手","排行","搜索"]
    }
  },
  computed: {
     new1 () {
       console.log(this.msg1)
        return this.msg1
     }
  },
  mounted () {
    console.log(this.msg1)
  },
  methods:{
    changeComp (value){
       this.$emit('changecomp',value)
    }
  }
}
</script>

<style scoped>
   .header {
     line-height: 50px;
     color: burlywood;
     background: #393D49;
   }
   .icon_right{
      float: right;
      line-height: 50px;
      margin-right: 20px;
   }
</style>
