<template>
  <div class="users-show">
    <div class="container">
      <p>User Name: {{ user.user_name }}</p>
      <p>Email: {{ user.email }}</p>
      <div>
        
        <button>Edit User Information</button>
      </div>
      <div v-for="post in user.posts">
        <p> {{ post.professor_name }}</p>
        <p> {{ post.details }}</p>
        <p> {{ post.course_dept}}</p>
        <p> {{ post.course_name}}</p>
          <div v-for="resource in post.post_resources">
        --------------------------
            <p> {{ resource.name }}</p>
            <p> {{ resource.details }}</p>
          </div>

      </div>
    <router-link to="/courses">Find some Nuggs</router-link>
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