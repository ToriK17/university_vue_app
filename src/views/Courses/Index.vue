<template>
  <div class="courses-index">
    <div class="container">
      <h1>Courses for University Of Nevada, Las Vegas </h1>
      Search: <input type="text" v-model="courseFilter">   
  

      <div v-for="course in filterBy(courses, courseFilter)">
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
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      courses: [], 
      courseFilter: ""
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