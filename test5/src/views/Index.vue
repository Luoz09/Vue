<template>
    <div>
      <Header @changecomp="changeComp" :msg="msg"></Header>
      <div style="height: 25px;">
        <router-link to="/Recommend">推荐</router-link>
        <router-link to="/Singer">歌手</router-link>
        <router-link to="/Top">排行</router-link>
        <!--<router-link to="/Search">搜索</router-link>-->
        <router-link :to="{ name : 'Search' }">搜索</router-link>
      </div>
      <router-view  @changemsg="changeMsg"  :treeData = 'treeData'  />
    </div>
</template>


<script>
import Header from '@/components/Header.vue'
import store from '@/store.ts'
export default {
  name: 'Index',
  data () {
    return {
      msg1: '',
      title: '标题啊',
      treeData: [
        {
          id: '1',
          menuName: '笑傲江湖',
          menuCode: '1',
          children: [
            {
              menuName: '令狐冲',
              menuCode: '10'
            },
            {
              menuName: '东方不败',
              menuCode: '11',
              children: [
                {
                  menuName: '西方失败',
                  menuCode: '110'
                }
              ]
            }
          ]
        },
        {
          id: '2',
          menuName: '射雕英雄',
          menuCode: '2',
          children: [
            {
              menuName: '蓉儿',
              menuCode: '20'
            },
            {
              menuName: '郭靖',
              menuCode: '21'
            }
          ]
        }
      ]
    }
  },
  provide () {
    return {
      parentvar: '',
      msg1: this.msg
    }
  },
  methods: {
    changeMsg (value) {
      console.log(value)
    },
    changeComp (value){
       console.log(value)
    }
  },
  components: {
    Header
  },
  computed: {
    msg () {
      console.log(store.state.headerTitle)
      return store.state.headerTitle
    }
  },
  mounted () {
    this.$router.push('./Recommend')
  }
}
</script>

<style scoped>
  a{
    text-decoration: none;
    font-size: 16px;
    display: block;
    width: 25%;
    float: left;
    color: white;
  }
  .router-link-active{
      color:burlywood;
  }
</style>
