<template>
  <div class="courses-index">
    <div class="container">
      <h1>Find Your Course:</h1>
      <div v-for="course in courses">
        <p>Course Name: {{ course.name }}</p>
        <p>Department: {{ course.department }}</p>
        <p>Course Number: {{ course.num }}</p>
        <div>
          <router-link v-bind:to="`/courses/${course.id}`">Posts for this Course</router-link> 
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      courses: []
    };
  },
  created: function() {
    axios.get("/api/courses").then(response => {
      this.courses = response.data;
    });
  },
  methods: {}
};
</script>