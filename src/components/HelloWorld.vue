<template>
  <div class="hello">
    <div>
      <p>{{totalNum}}</p>
      <button @click="addBtn">加</button>
      <button @click="deleteBtn">减</button>
    </div>
  </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  computed: {
    ...mapState ({
      totalNum : state => state.totalNum
    })
  },
  methods: {
    // 加
    addBtn() {
      this.$store.dispatch('add')
    },

    // 减
    deleteBtn() {
      this.$store.dispatch('delete')
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
