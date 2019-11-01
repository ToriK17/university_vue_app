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

        Stuff you have:
        <span v-for="resource in resources">
          <input type=“checkbox” v-bind:id="resource.name" v-bind:value="details"> 
          <li><label for="checkbox">{{ resource.name }}</label></li> 
        </span>
         
                       
      
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
      newDetails: "",
      post_resources: {}, 
      resources: [], 
      checked: false, 
      details: ""
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
        professor: this.newProfessor,
        course: this.newCourse,
        details: this.newDetails
      };
      axios.post("/api/posts", params).then(response => {
        console.log("success", response.data);
        this.$router.push("/posts/" + response.data.id ); 
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(error.response.data.errors);
      });
    },
  //   isChecked: function(checked) {
  //     if checked == 
  //   }   
  }  
};
</script>