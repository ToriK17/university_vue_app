<template>
  <div class="users-show">
    <div class="container">
    <p>User Name: {{ user.user_name }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Posts: {{ user.posts }}</p>
    <router-link to="/test">Send to test for now</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {}
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  methods: {}
};
</script>