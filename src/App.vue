<template>
  <div></div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    get () {
      axios.get('http://localhost:3000/templateinfo').then(res => {
        console.log(res)
      })
    }
  },
  created () {
    this.get()
  }
}
</script>