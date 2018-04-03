<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  width:100%;
}

th {
  text-align: left;
  font-weight: bold;
  padding-bottom:5px;
}

th:first-child {
  width:100%;
}

tr td {
  padding-bottom:5px;
}
</style>

<template>
  <div class="container">
    <HeaderComp title="User Overview" />

    <table>
      <thead>
        <th>Name</th>
        <th>Action</th>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{user.Name}}</td>
          <td>
            <router-link :to="detailLink(user.Id)">Details</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import HeaderComp from './HeaderComp';

export default {
  name: 'UserOverview',
  components: {
    HeaderComp
  },
  methods: {
    detailLink (id) {
      return "/details/" + id
    }
  },
  computed: {
    users () {
      return this.$store.state.users;
    }
  }
}
</script>
