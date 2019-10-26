<template>
  <div class="courses-show">
    <div class="container">
      <div>
        <p>{{ course.name }}</p>
        <p>{{ course.num }}</p>
        <p>{{ course.department }}</p>
      </div>
      <div v-for="post in course.posts">
        <p>{{post.professor_name}}</p>
        <p>{{post.user_info}}</p>
        <div v-for="resource in post.post_resources">
          <p>{{resource.name}}</p>
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
      course: {},
      post: "", 
      post_resources: "",
      resource: ""
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