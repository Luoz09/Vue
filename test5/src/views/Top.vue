<template>
  <div>
    <ul>
      <li v-for="(item,index) in treeData" :key="index" @click.stop="IsShowChildren(item,index)"
          :style="style">
         {{ item.menuName }}
         <top v-if="item.children && item.children.length && index==curIndex" :treeData = item.children />
      </li>
    </ul>
  </div>
</template>
<script>
  import  store from '@/store.ts'
export default {
  name: 'Top',
  props: ['treeData'],
  data () {
    return {
      curIndex: 0,
      curItem: this.treeData[0],
      style: {
        marginLeft: '100px'
      }
    }
  },
  mounted () {
     store.state.headerTitle = '排行'
  },
  computed: {

  },
  methods: {
    IsShowChildren (item, index) {
      if (this.curItem === item && this.curIndex !== 99) {
        this.curIndex = 99
      } else {
        this.curItem = item
        this.curIndex = index
      }
    }
  }
}
</script>

<style scoped>

</style>
