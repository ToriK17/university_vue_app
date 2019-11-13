<template>
  <div class="posts-show">

    <div class="container">
    <!-- Breadcrumbs -->
    <section class="g-bg-gray-light-v5 g-py-50">
      <div class="container">
        <div class="d-sm-flex text-center">
          <div class="align-self-center">
            <h2 class="h3 g-font-weight-300 w-100 g-mb-10 g-mb-0--md">{{ post.course_name }}</h2>
            <h2 class="h3 g-font-weight-300 w-100 g-mb-10 g-mb-0--md">With: {{ post.professor_name }}</h2>
          </div>

          <div class="align-self-center ml-auto">
            <ul class="u-list-inline">
              <li class="list-inline-item g-mr-5">
                <router-link class="u-link-v5 g-color-main g-color-primary--hover" to="/">Home</router-link>
                <i class="g-color-gray-light-v2 g-ml-5">/</i>
              </li>
              <!-- v-bind:to="`/courses/${course.id}`" -->
              <li class="list-inline-item g-color-primary">
                <router-link class="u-link-v5 g-color-main g-color-primary--hover" :to="`/courses/${post.course_id}`">Back to all {{ post.course_name }} Knuggets</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- End Breadcrumbs -->

  <!-- Portfolio Single Item -->
  <section class="container g-py-100">
    <div class="row g-mb-50">
      <div class="col-md-8 g-mb-30">
        <div class="mb-5">
          <h3 class="g-color-black mb-1">Knuggets From: {{post.user_name}} </h3>
          <span class="d-block lead mb-4 "></span>
            <dl class="row" v-for="resource in post.post_resources">
              <dt class="col-sm-3">{{resource.name}}</dt>
              <dd class="col-sm-9">{{resource.details}}</dd>
              <!-- this isnt working, add soft line break here -->
              <hr class="g-brd-gray-light-v4 g-my-20">
            </dl>
          <dt class="col-sm-3">More Details</dt>
            <p>{{ post.details }}</p>
          
        </div>

        <a v-on:click="createConversation()" class="btn btn-md u-btn-primary g-font-size-default g-rounded-25 g-px-30 g-py-12" href="#">Message {{post.user_name}}</a>
      </div>

      <div class="col-md-4 g-mb-30">
        <!-- User Block -->
        <div class="g-brd-around g-brd-gray-light-v4 g-pa-20 g-mb-40">
          <div class="row">
            <div class="col-lg-4 g-mb-40 g-mb-0--lg">
              <!-- User Image -->
              <div class="g-mb-20">
                <img class="img-fluid w-100" :src="post.user_image" alt="User Image">
              </div>
              <!-- User Image -->

              <!-- Button trigger modal -->
              <button v-if="$parent.userId() == post.user_id" type="button" class="btn btn-primary" data-toggle="modal" data-target="#editModal">
                Edit
              </button>

              <!-- Modal -->
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

            <div class="col-lg-8">
              <!-- User Details -->
              <div class="d-flex align-items-center justify-content-sm-between g-mb-5">
                <h2 class="g-font-weight-300 g-mr-10">{{post.user_name}}</h2>
                <ul class="list-inline mb-0">
                  <li class="list-inline-item g-mx-2">
                    <a class="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="#">
                      <i class="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-facebook"></i>
                      <i class="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-facebook"></i>
                    </a>
                  </li>
                  <li class="list-inline-item g-mx-2">
                    <a class="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="#">
                      <i class="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-twitter"></i>
                      <i class="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-twitter"></i>
                    </a>
                  </li>
                  <li class="list-inline-item g-mx-2">
                    <a class="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="#">
                      <i class="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-dribbble"></i>
                      <i class="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-dribbble"></i>
                    </a>
                  </li>
                  <li class="list-inline-item g-mx-2">
                    <a class="u-icon-v1 u-icon-size--sm u-icon-slide-up--hover g-color-gray-light-v1 g-bg-gray-light-v5 g-color-gray-light-v1--hover rounded-circle" href="#">
                      <i class="g-font-size-default g-line-height-1 u-icon__elem-regular fa fa-linkedin"></i>
                      <i class="g-font-size-default g-line-height-0_8 u-icon__elem-hover fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <!-- End User Details -->

              <!-- User Position -->
              <h4 class="h6 g-font-weight-300 g-mb-10">
                  <i class="icon-badge g-pos-rel g-top-1 g-mr-5 g-color-gray-dark-v5"></i>Student at UNLV
                </h4>
              <!-- End User Position -->

              <!-- User Info -->
              <ul class="list-inline g-font-weight-300">
                
                <li class="list-inline-item g-mr-20">
                  <i class="icon-check g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> Verified User
                </li>
                
              </ul>
              <!-- End User Info -->

              
            </div>
          </div>
        </div>
        <!-- End User Block -->

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

        <!-- Share -->
        <div class="mb-3">
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
        </div>
        <!-- End Share -->
      </div>
    </div>

    

    <!-- Pagination -->
      <nav class="text-center" aria-label="Page Navigation">
        <ul class="list-inline mb-0">
          <li class="list-inline-item float-sm-left">
            <a class="u-pagination-v1__item u-pagination-v1-4 g-brd-gray-light-v3 g-brd-primary--hover g-rounded-50 g-pa-7-16" href="#" aria-label="Previous">
              <span aria-hidden="true">
                <i class="fa fa-angle-left"></i>
                Previous
              </span>
            </a>
          </li>
          
          <li class="list-inline-item float-sm-right">
            <a class="u-pagination-v1__item u-pagination-v1-4 g-brd-gray-light-v3 g-brd-primary--hover g-rounded-50 g-pa-7-16" href="#" aria-label="Next">
              <span aria-hidden="true">
                Next
                <i class="fa fa-angle-right"></i>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    <!-- End Pagination -->
    </section>
  <!-- End Portfolio Single Item -->

    </div>
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