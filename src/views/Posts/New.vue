<template>
  <div class="posts-new">
    <div class="container">
    <h1>New Post</h1>
      <div>
        Professor:
        <input type="text" v-model="newProfessorName" />
        Course:
        <input type="text" v-model="newCourseId" />
        Details:
        <input type="text" v-model="newDetails" />

        

        <!-- Inline Checkboxes -->
        <h4 > Choose Resources</h4>
        <div v-for="resource in resources">
           <label >
             <input type="checkbox" v-bind:id="resource.id" v-bind:value="resource" v-model="postResources">
            
             {{resource.name}}
           </label>
           <input type="text" v-model="resource.details">
        </div>         
            <!-- {{postResources}} see array -->
     

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
      newProfessorName: "",
      newCourseId: "" ,
      newDetails: "",
      resources: [],  
      postResources: []

    };
  },
  created: function() {
    axios.get("/api/resources").then(response => {
      this.resources = response.data;
      console.log(this.resources);
    });
  },
  methods: {
    createPost: function() {
      var params = {
        professor_name: this.newProfessorName,
        course_id: this.newCourseId,
        details: this.newDetails, 
        post_resources: this.postResources
      };
      axios.post("/api/posts", params).then(response => {
        console.log("success", response.data);
        this.$router.push("/posts/" + response.data.id ); 
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(error.response.data.errors);
      });
    },  
  }  
};
</script>