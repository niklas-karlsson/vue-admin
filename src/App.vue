<template>
  <div id="app">
    <div v-if="loading == true" class="loading">
      <div class="content">
        Loading...
      </div>
    </div>

    <div class="panel-top">Admin</div>
    <router-view class="panel-content" />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    loading () {
      return this.$store.state.loading
    }
  },
  mounted () {
    this.$store.dispatch("USERS_LOAD")
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  display: grid;
  grid-template-rows:50px auto;
  grid-row-gap:20px;
}

.panel-top {
  grid-row-start: 1;
  grid-row-end: 1;
  grid-column-start: 1;
  grid-column-end: 1;

  background-color:#4292e4;
  padding:10px;
  color:#fff;
}

.panel-content {
  grid-row-start: 2;
  grid-row-end: 2;
  grid-column-start: 1;
  grid-column-end: 1;

  margin:0px 20px 20px 20px;
}

.loading {
  position: absolute;
  left:0px;
  right:0px;
  top:0px;
  bottom:0px;

  background-color: #0000008a;
  z-index:10;
}

.loading .content {
  margin:50px auto;
  width:200px;
  padding:40px;
  background-color:#fff;
}
</style>
