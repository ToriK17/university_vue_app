<template>
  <div class="posts-show">
    <div class="container">
      <h2>{{ post.course_name }}</h2>
      <p>{{ post.professor_name }}</p>
      <p>{{ post.details }}</p>
      <p>{{ post.resources}}</p>
      <router-link to="/test">Back to test for now</router-link> 
    </div>
  </div>  
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      post: {}
    };
  },
  created: function() {
    axios.get("/api/posts/" + this.$route.params.id).then(response => {
      this.post = response.data;
    });
  },
  methods: {}
};
</script>