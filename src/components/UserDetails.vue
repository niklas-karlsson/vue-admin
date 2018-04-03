<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 b {
   font-weight: bold;
 }

 .toolbar {
   margin-top:20px;
 }

 .toolbar .edit-button {
   padding:5px;
   border-radius:5px;
   border:1px solid #52e3c4;
   cursor: pointer;
 }

  .toolbar .edit-button:hover {
   background-color:#52e3c4;
   color:#fff;
 }
</style>

<template>
  <div class="page-view page-user-details">
    <HeaderComp title="User Details" />

    <div>
      <b>Name</b><br />
      {{ user.Name }}
    </div>

    <div class="toolbar">
      <div v-on:click="gotoEdit()" class="edit-button">Edit</div>
    </div>

  </div>
</template>

<script>
import HeaderComp from './HeaderComp';

export default {
  name: 'UserDetails',
  components: {
    HeaderComp
  },
  computed: {
    user () {
      return this.$store.state.user;
    }
  },
  methods: {
    gotoEdit (id) {
      this.$router.push({path: `/edit/${this.user.Id}`})
    }
  },
  mounted () {
    this.$store.dispatch("USERS_SELECT", this.$route.params.id);
  }
}
</script>
