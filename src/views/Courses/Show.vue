<template>
  <div class="courses-show">
    <div class="container">
      <div>
        <p>{{ course.name }}</p>
        <p>{{ course.num }}</p>
        <p>{{ course.department }}</p>
      </div>
      <p>------------------------------</p>
      <div><router-link :to="`/courses/${course.id}/posts/new`">New Post</router-link> </div>
      
      <div v-for="post in course.posts">
        <p>{{post.user_info}}</p>
        <p>{{post.professor_name}}</p>
        <!-- <p>{{post.details}}</p> -->
        <p>{{post.created_at}}</p>

        <div v-for="resource in post.post_resources">
          <p>{{resource.name}}</p>
          <!-- <p>{{resource.details}}</p> -->
        </div>
        <div><router-link :to="`/posts/${post.id}`">Full Post</router-link> </div>
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