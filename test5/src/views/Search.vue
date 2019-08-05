<template>
  <div>
    <table>
      <tr>
        <th><input type="checkbox" v-model="choose" @click="chooseAll()"/></th>
        <th>名称</th>
        <th>价格</th>
        <th>数量</th>
        <th>品牌</th>
        <th>总价</th>
      </tr>
      <tr v-for="(item ,index) in shopCarData" :key="index">
         <th><input type="checkbox" v-model="item.flag" /></th>
         <th>{{ item.name }}</th>
         <th>{{ item.price }}</th>
         <th><input type="text" v-model="item.num"> <!--{{ item.num }}--></th>
         <th>{{ item.brand}}</th>
         <th>{{ item.price * item.num }}</th>
      </tr>
      <tr>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th>{{ shopCarCount }}</th>
        <th><button @click="submitShopCar()">提交</button></th>
      </tr>
    </table>
  </div>
</template>

<script>
  import  store  from '@/store.ts'
export default {
  name: 'Search',
  data () {
    return {
      shopCarData: [
        { name: '冰箱', price: 360, num: 0, brand: '美的', flag: false },
        { name: '空调', price: 1360, num: 0, brand: '格力', flag: false },
        { name: '电池', price: 11, num: 0, brand: '南孚', flag: false },
        { name: '洗衣机', price: 700, num: 0, brand: '美的', flag: false },
        { name: '电磁炉', price: 870, num: 0, brand: '苏泊尔', flag: false }
      ]
    }
  },
  methods: {
    chooseAll () {
      this.shopCarData.forEach((item) => {
        item.flag = !this.choose
      })
    },
    submitShopCar () {
      let msg = ''
      this.getChooseGoodsInfo().forEach((item) => {
        if (item.num > 0) { msg += item.name + '：' + item.price + ' * ' + item.num + ' = ' + item.price * item.num + '\n' }
      })
      alert(msg)
    },
    getChooseGoodsInfo () {
      return this.shopCarData.filter((item) => {
        return item.flag
      })
    }
  },
  mounted () {
    store.state.headerTitle = '搜索'
  },
  computed: {
    choose () {
      return this.shopCarData.every((item) => {
        return item.flag
      })
    },
    shopCarCount () {
      let chooseShopCarData = this.shopCarData.filter((item) => {
        return item.flag
      })
      let sum = 0
      chooseShopCarData.forEach((item) => {
        sum += item.price * item.num
      })
      return sum
    }
  }
}
</script>

<style scoped>
  table th{
    padding: 20px;
  }
</style>
