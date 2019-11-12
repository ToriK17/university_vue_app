<template>
  <div class="posts-show">
    <div class="container">
    <!-- Breadcrumbs -->
    <section class="g-bg-gray-light-v5 g-py-50">
      <div class="container">
        <div class="d-sm-flex text-center">
          <div class="align-self-center">
            <h2 class="h3 g-font-weight-300 w-100 g-mb-10 g-mb-0--md">{{ post.course_name }}</h2>
          </div>

          <div class="align-self-center ml-auto">
            <ul class="u-list-inline">
              <li class="list-inline-item g-mr-5">
                <a class="u-link-v5 g-color-main g-color-primary--hover" href="#">Home</a>
                <i class="g-color-gray-light-v2 g-ml-5">/</i>
              </li>
              <li class="list-inline-item g-mr-5">
                <a class="u-link-v5 g-color-main g-color-primary--hover" href="#">Pages</a>
                <i class="g-color-gray-light-v2 g-ml-5">/</i>
              </li>
              <li class="list-inline-item g-color-primary">
                <span>{{ post.course_name }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- End Breadcrumbs -->



























      <p>{{ post.course_name }}</p>
      <p>{{ post.professor_name }}</p>
      <p>{{ post.details }}</p>
      <p v-for="resource in post.post_resources">
        {{resource.name}}
        {{resource.details}}
      </p>
      <button v-on:click="createConversation()">Create Conversation</button>
      {{errors}}
    </div>

    <div >
      <h3>Edit Post</h3>
        Professor:
        <input type="text" v-model="post.professor_name" />
        Course:
        <input type="text" v-model="post.course_id" />
        Details:
        <input type="text" v-model="post.details" />
      <!-- Inline Checkboxes -->
        <h4 > Resources</h4>
        
        <div v-for="resource in resources" :key="resource.id">
           <label >
             <input type="checkbox" v-bind:id="resource.name" :value="resource" v-model="post.post_resources">
             {{resource.name}}
           </label>
           <input type="text" v-model="resource.details">
        </div>         
        <button v-on:click="updatePost()">Update Post</button> <br>
        <button v-on:click="destroyPost()">Delete Post</button>
    </div>
  </div>  
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      post: {}, 
      resources: [],
      errors: [], 
      user: {},
      user_id: localStorage.getItem("user_id")
    };
  },
  created: function() {
    axios.get("/api/posts/" + this.$route.params.id).then(response => {
      this.post = response.data;

      console.log(this.post);
      axios.get("/api/resources").then(response => {
        this.resources = response.data;
        console.log(this.resources);
        this.resources.forEach(function(resource) {
          this.post.post_resources.forEach(function(postResource) {
            if (resource.id === postResource.id) {
              resource.details = postResource.details;
            }
          }); 
        }.bind(this));
      });
    });
   
  },
  methods: {
    createConversation: function() {
      var params = {
        recipient_id: this.post.user_id
      };
      axios.post("/api/conversations", params).then(response => {
        console.log(response.data);
        this.$router.push("/conversations/" + response.data.id); 
      }).catch(error => {
        this.errors = error.response.data.errors;
        console.log(error.response.data.errors);
      });
    },
    updatePost: function() {
      var params = {
        professor_name: this.post.professor_name,
        course_id: this.post.course_id,
        details: this.post.details, 
        post_resources: this.post.post_resources 
      };
      axios
        .patch("/api/posts/" + this.$route.params.id, params)
        .then(response => {
          console.log(response.data);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        }); 
    },
    destroyPost: function(post) {
      axios
        .delete("/api/posts/" + this.post.id)
        .then(response => {
          console.log("post removed", response.data);
          this.$router.push("/users/" + this.user_id);  
        }).catch(error => {
          this.errors = error.response.data.errors;
        });
    }
  }
};
</script>