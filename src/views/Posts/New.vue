<template>
  <div class="posts-new">
    <div class="container">
    <h1>New Post</h1>
      <div>
        Professor:
        <input type="text" v-model="newProfessor" />
        Course:
        <input type="text" v-model="newCourse" />
        Details:
        <input type="text" v-model="newDetails" />

        <button v-on:click="createPost()">Create Post</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      post: {}, 
      newProfessor: "",
      newCourse: "" ,
      newDetails: "" 
    };
  },
  created: function() {
    axios.get("/api/posts/" + this.$route.params.id).then(response => {
      this.post = response.data;
    });
  },
  methods: {
    createPost: function() {
      var params = {
        Professor: this.newProfessor,
        Course: this.newCourse,
        Details: this.newDetails
      };
      axios.post("/api/posts", params).then(response => {
        this.posts.push(response.data);
        this.newProfessor = "";
        this.newCourse = "";
        this.newDetails = "";
      });
    }
  }
};
</script>