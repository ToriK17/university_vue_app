<template>
  <div class="courses-show">
    <div class="container">
      <p>{{ course.name }}</p>
      <p>{{ course.num }}</p>
      <p>{{ course.department }}</p>
      
      <p>{{ course.posts}}</p>
      <router-link to="/test">Back to test for now</router-link> 
    </div>
  </div>  
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      courses: {}
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