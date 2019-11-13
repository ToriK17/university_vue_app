<template>
  <div class="posts-show">

    
    <!-- Breadcrumbs -->
    <section class="g-bg-gray-light-v5 g-py-50">
      <div class="container">
        <div class="d-sm-flex text-center">
          <div class="align-self-center">
            <h2 class="h3 g-font-weight-300 w-100 g-mb-10 g-mb-0--md">All the details . . .  </h2>
          </div>

          <div class="align-self-center ml-auto">
            <ul class="u-list-inline">
              <li class="list-inline-item g-mr-5">
                <router-link class="u-link-v5 g-color-main g-color-primary--hover" to="/">Home</router-link>
                <i class="g-color-gray-light-v2 g-ml-5">/</i>
              </li>
              
              <li class="list-inline-item g-color-primary">
                <router-link class="u-link-v5 g-color-main g-color-primary--hover" :to="`/courses/${post.course_id}`">Back to all the nuggz </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- End Breadcrumbs -->

  
  <section class="g-py-100">
    <div class="container">
      <div class="row">
        <!-- Content -->
        <div class="col-lg-8 g-mb-30 g-mb-0--lg">
          <article class="u-shadow-v11 rounded g-pa-30">
            <!-- Content Header -->
            <div class="row">
              <div class="col-md-9 g-mb-30 g-mb-0--md">
                <div class="media">
                  <div class="d-flex align-self-center g-mt-3 g-mr-20">
                    <img class="g-width-40 g-height-40" :src="user.image" alt="Profile Pic">
                  </div>
                  <div class="media-body">
                    <span class="d-block g-mb-3">
                        <a class="u-link-v5 g-font-size-18 g-color-gray-dark-v1">{{post.user_name}}</a>
                      </span>
                    <span class="g-font-size-13 g-color-gray-dark-v4 g-mr-15">
                        <i class="icon-location-pin g-pos-rel g-top-1 mr-1"></i> Las Vegas, NV
                      </span>
                  </div>
                </div>
              </div>
            </div>

              <!-- Button trigger modal -->
              <div class="col-md-3 align-self-center text-md-right align-self-right">
                <button v-if="$parent.userId() == post.user_id" class="align-self-right g-font-size-12 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded btn btn-primary  text-md-right"  type="button" data-toggle="modal" data-target="#editModal">Edit</button>
                <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit Post</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div class="modal-body">
                        <!-- Form -->
                        <form class="g-py-15">
                          
                          <div class="form-group row g-mb-25">
                            <label for="example-text-input" class="col-2 col-form-label" >Professor</label>
                              <div class="col-10">
                                <input v-model="post.professor_name" class="form-control rounded-0 form-control-md" type="text" placeholder="enter professor name" id="example-text-input">
                              </div>
                          </div>
                          
                          <div class="form-group g-mb-25">
                            <label for="exampleTextarea">Optional Extra Details</label>
                            <textarea v-model="post.details" class="form-control rounded-0 form-control-md" id="exampleTextarea" rows="6"></textarea>
                          </div>

                          <legend class="g-font-size-default">Select the Knuggs you have</legend>
                          <div v-for="resource in resources" class="mb-3">
                            <label class="form-check-inline u-check g-color-gray-dark-v5 g-font-size-13 g-pl-25 mb-2">
                              <input v-bind:id="resource.id" v-bind:value="resource" v-model="post.post_resources" class="u-check-icon-checkbox-v6 g-absolute-centered--y g-left-0" type="checkbox">          
                              {{resource.name}}
                            </label>
                            <div class="g-mb-20">
                              <input class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v3 rounded g-py-15 g-px-15" type="text" placeholder="details" v-model="resource.details">
                            </div>
                          </div>

                          <button v-on:click="updatePost()" class="btn btn-block u-btn-primary rounded g-py-13" type="button">Update Post</button>
                        </form>
                        <!-- End Form -->
                        <button v-on:click="destroyPost()" class="btn btn-block u-btn-warning rounded g-py-13" type="button">Destroy Post</button>
                    </div>
                  </div>  
              </div>
            </div>
          </div>  
            <!-- End Content Header -->

            <hr class="g-brd-gray-light-v4">


            <hr class="g-brd-gray-light-v4">

            <!-- Post Resources -->
            <h3 class="h5 g-color-gray-dark-v1 g-mb-10">Currently Offering</h3>
            <div class="g-mb-20">
            
            </div>

            <div v-for="resource in post.post_resources" class="row">
              <div class="col-lg">
                <ul class="list-unstyled mb-0">
                  <li class="d-flex  g-mb-12">
                      <i class="icon-christmas-021 u-line-icon-pro g-color-primary"></i>
                    <span class="d-block "> <u>{{ resource.name }}</u> 
                    <div class="g-mb-20">
                      <p>{{ resource.details }}</p>
                    <hr class="g-brd-gray-light-v4">
                    </div>
                    </span>
                  </li>
                  
                </ul>
              </div>

             
            </div>
            <!-- End Your Tasks -->

            <hr class="g-brd-gray-light-v4">

            <!-- Additional Post Details -->
            <h3 class="h5 g-color-gray-dark-v1 g-mb-10">Additional Details</h3>
            <div class="g-mb-20">
              <p>{{ post.details }}</p>
            </div>

          
            <!-- End Additional Post Details -->

            <hr class="g-brd-gray-light-v4">

          </article>
        </div>
        <!-- End Content -->

        <!-- Sidebar -->
        <div class="col-lg-4">
          <aside class="u-shadow-v11 rounded g-pa-30">
            <!-- Content Header -->
            <div class="media g-mb-20">
              <div class="d-flex align-self-center g-mt-3 g-mr-15">
                <div class="mb-3">
                <!-- Share -->
                <h3 class="h5 g-color-black mb-3">Share:</h3>
                <ul class="list-inline mb-0">
                  <li class="list-inline-item mr-1 mb-1">
                    <a class="btn u-btn-outline-facebook g-rounded-25" href="#">
                      <i class="mr-1 fa fa-facebook"></i>
                      Facebook
                    </a>
                  </li>
                  <li class="list-inline-item mx-1 mb-1">
                    <a class="btn u-btn-outline-twitter g-rounded-25" href="#">
                      <i class="mr-1 fa fa-twitter"></i>
                      Twitter
                    </a>
                  </li>
                  <li class="list-inline-item mx-1 mb-1">
                    <a class="btn u-btn-outline-dribbble g-rounded-25" href="#">
                      <i class="mr-1 fa fa-dribbble"></i>
                      Dribbble
                    </a>
                  </li>
                </ul>
                <!-- End Share -->
                <!-- Tags -->
                <div class="g-mb-30">
                  <h3 class="h5 g-color-black mb-3">Tags:</h3>
                  <ul class="u-list-inline mb-0">
                    <li class="list-inline-item g-mb-10">
                      <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="#">{{post.course_department}}</a>
                    </li>
                    <li class="list-inline-item g-mb-10">
                      <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="#">{{ post.professor_name }}</a>
                    </li>
                    <li class="list-inline-item g-mb-10">
                      <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover g-rounded-50 g-py-4 g-px-15" href="#">{{ post.course_name }}</a>
                    </li>
                  </ul>
                </div>
                <!-- End Tags -->
                </div>
              </div>
              
            </div>
            <!-- End Content Header -->

        

            <hr class="g-brd-gray-light-v4">


            <!-- Save or Print  -->
            <ul class="list-unstyled d-flex justify-content-between">
              <li>
                <a class="u-link-v5 g-color-main g-color-primary--hover" href="#">
                  <i class="fa fa-bookmark-o g-color-gray-dark-v5 g-mr-5"></i> Save for later
                </a>
              </li>
              <li>
                <a class="u-link-v5 g-color-main g-color-primary--hover" href="#">
                  <i class="icon-printer g-color-gray-dark-v5 g-pos-rel g-top-1 g-mr-5"></i> Print Job
                </a>
              </li>
            </ul>
            <!-- End Save or Print  -->

            <hr class="g-brd-gray-light-v4">

            <a v-on:click="createConversation()" class="btn btn-xl btn-block u-btn-primary text-uppercase g-font-weight-600 g-font-size-12" href="#">Contact Me</a>
          </aside>
        </div>
        <!-- Sidebar -->
      </div>
    </div>
  </section>


    
  </div>  
</template>























      <!-- <p>{{ post.course_name }}</p>
      <p>{{ post.professor_name }}</p>
      <p>{{ post.details }}</p>
      <p v-for="resource in post.post_resources">
        {{resource.name}}
        {{resource.details}}
      </p> -->
      <!-- <button v-on:click="createConversation()">Create Conversation</button> -->
      <!-- {{errors}} -->
    

    <!-- <div >
      <h3>Edit Post</h3>
        Professor:
        <input type="text" v-model="post.professor_name" />
        Course:
        <input type="text" v-model="post.course_id" />
        Details:
        <input type="text" v-model="post.details" />
      Inline Checkboxes
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
    </div> -->


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
          $('#editModal').modal('hide');

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