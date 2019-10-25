<template>
  <div class="courses-show">
    <div class="container">
      <p>{{ course.name }}</p>
      <p>{{ course.num }}</p>
      <p>{{ course.department }}</p>
      
      <div v-for="post in course.posts">
        <li>{{post.professor_name}}</li>
        <li>{{post.user_info}}</li>
        <li>{{post.post_resources}}</li>
      </div>
      
      <router-link to="/test">Back to test for now</router-link> 
    </div>
  </div>  
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      courses: {},
      post: ""
    };
  },
  created: function() {
    axios.get("/api/courses/" + this.$route.params.id).then(response => {
      this.course = response.data;
    });
  },
  methods: {}
};
</script>