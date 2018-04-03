<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .header-comp {
    margin-bottom:20px;
  }

  h1 {
    font-size:20px;
    font-weight:bold;
  }
</style>

<template>
  <div class="header-comp">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HeaderComp',
  props: ['title'],
}
</script>
