<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 b {
   font-weight: bold;
 }

 .toolbar {
   margin-top:20px;
 }

 .page-user-details {
   position: relative;
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

.message-ok {
    padding: 10px;
    background-color: green;
    margin-bottom: 10px;
    color: #fff;
}
</style>

<template>
  <div class="page-view page-user-details">

    <HeaderComp title="User Edit" />

    <div v-if="message != null" class="message-ok">
      {{ message }}
    </div>

    <div>
      <b>Name</b><br />
      <input type="text" v-model="name" />
    </div>

    <div class="toolbar">
      <div v-on:click="save()" class="edit-button">Save</div>
    </div>

  </div>
</template>

<script>
import HeaderComp from './HeaderComp';

export default {
  name: 'UserEdit',
  components: {
    HeaderComp
  },
  computed: {
    message () {
      return this.$store.state.message
    },
    name: {
      get () {
        return (this.$store.state.user == null) ? "" : this.$store.state.user.Name
      },
      set (value) {
        this.$store.commit('USER_UPDATE', {"Name": value})
      }
    },
    user () {
      return this.$store.state.user;
    }
  },
  methods: {
    save () {
      this.$store.dispatch("USER_SAVE")
    }
  },
  mounted () {
    this.$store.commit("MESSAGE", null)
    this.$store.dispatch("USERS_SELECT", this.$route.params.id)
  }
}
</script>
