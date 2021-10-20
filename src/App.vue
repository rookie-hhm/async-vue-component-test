<template>
<div>
  <div>{{ message }}</div>
  <div>{{ newMessage }}</div>
  <button @click="change">change</button>
  <router-link to="/home">home</router-link>
  <router-link to="/subhome">subhome</router-link>
  <div>
    <router-view></router-view>
  </div>
  
</div>
  
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      message: ''
    }
  },
  watch: {
    message () {
      console.log(this.message, 'message')
    }
  },
  updated () {
    console.log('updated')
  },
  computed: {
    newMessage () {
      console.log('computed')
      return this.message + 1
    }
  },
  mounted () {
    console.log('mounted', this.$router, this.$route)
  },
  methods: {
    get () {
      axios.get('http://localhost:3000/templateinfo').then(res => {
        console.log(res)
      })
    },
    change () {
      this.message += 1
      console.log('change')
    }
  },
  created () {
    // this.get()
  }
}
</script>