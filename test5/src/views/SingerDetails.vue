<template>
    <div>
       {{ detailItem.name }}
        -------
      {{ detailItem.author }}
        ------
      {{ detailItem.price }}
    </div>
</template>

<script>
export default {
  name: 'SingerDetails',
  data () {
    return {
      detailItem: []
    }
  },
  mounted () {
    this.detailItem = this.$route.params.item
  }
}
</script>

<style scoped>

</style>
