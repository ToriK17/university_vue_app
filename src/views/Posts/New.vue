<template>
  <div class="posts-new">
    <!-- Signup -->
    <section class="container g-pt-100 g-pb-20">
      <div class="row">
        <div class="col-lg-5 flex-lg-unordered g-mb-80">
          <div class="g-brd-around g-brd-gray-light-v3 g-bg-white rounded g-px-30 g-py-50 mb-4">
            <header class="text-center mb-4">
              <h1 class="h3 g-color-black g-font-weight-300 text-capitalize">Post a new Knugget</h1>
            </header>

            <!-- Form -->
            <form class="g-py-15">
               
              <div class="form-group row g-mb-25">
                <label for="example-text-input" class="col-2 col-form-label" >Professor</label>
                  <div class="col-10">
                    <input v-model="newProfessorName" class="form-control rounded-0 form-control-md" type="text" placeholder="enter professor name" id="example-text-input">
                  </div>
              </div>

              
              <div class="form-group g-mb-25">
                <label for="exampleTextarea">Optional Extra Details</label>
                <textarea v-model="newDetails" class="form-control rounded-0 form-control-md" id="exampleTextarea" rows="6"></textarea>
              </div>

              <legend class="g-font-size-default">Select the Knuggs you have</legend>
              <div v-for="resource in resources" class="mb-3">
                <label class="form-check-inline u-check g-color-gray-dark-v5 g-font-size-13 g-pl-25 mb-2">
                  <input v-bind:id="resource.id" v-bind:value="resource" v-model="postResources" class="u-check-icon-checkbox-v6 g-absolute-centered--y g-left-0" type="checkbox">          
                  {{resource.name}}
                </label>
                <div class="g-mb-20">
                  <input class="form-control g-color-black g-bg-white g-bg-white--focus g-brd-gray-light-v3 rounded g-py-15 g-px-15" type="text" placeholder="details" v-model="resource.details">
                </div>
              </div>

              <button v-on:click="createPost()" class="btn btn-block u-btn-primary rounded g-py-13" type="button">Create Post</button>
            </form>
            <!-- End Form -->
          </div>

          
        </div>

        <div class="col-lg-7 flex-lg-first g-mb-80">
          <div class="g-pr-20--lg">
            <div class="mb-5">
              <h2 class="h1 g-font-weight-300 mb-3">After you finished your class. . . </h2>
              <p class="g-color-gray-dark-v5">Don't let your textbooks, quizzes, exams, and more go to waste. Here you can sell these valuable resources to future students. Even just meeting up for coffee and sharing your experiences or knowledge nuggets can help another student better prepare for a difficult course ahead. </p>
            </div>

            

            <div class="text-center">
              <h2 class="h4 mb-4">Instantly Connect with students<span class="g-color-primary"> who need course supplies </span> you already have</h2>
              <img class="img-fluid" src="/assets/img/bg/right_doggo_2.png" alt="Pupper">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Signup -->






    <!-- <div class="container">
    <h1>New Post</h1>
      <ul>
        <li v-for="error in errors">{{ error }}</li>
      </ul>
      <div>
        Professor:
        <input type="text" v-model="newProfessorName" />
        Course:
         {{course.name}}
        Details:
        <input type="text" v-model="newDetails" />

        
        <h4 > Choose Resources</h4>
        <div v-for="resource in resources">
           <label >
             <input type="checkbox" v-bind:id="resource.id" v-bind:value="resource" v-model="postResources">
            
             {{resource.name}}
           </label>
           <input type="text" v-model="resource.details">
        </div> -->         
            <!-- {{postResources}} see array -->
     
<!-- 
        <button v-on:click="createPost()">Create Post</button>
      </div>
    </div> -->
  
  </div>
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin], 
  data: function() {
    return {
      post: {},
      resources: [],
      postResources: [], 
      newProfessorName: "",
      newDetails: "", 
      course_name: "", 
      course: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/resources").then(response => {
      this.resources = response.data;
      console.log(this.resources);
    });
    axios.get("/api/courses/" + this.$route.params.id).then(response => {
      this.course = response.data;
      console.log(this.course);
    });
  },
  methods: {
    createPost: function() {
      var params = {
        professor_name: this.newProfessorName,
        course_id: this.course.id,
        details: this.newDetails, 
        post_resources: this.postResources
      };
      axios
        .post("/api/posts", params)
        .then(response => {
          console.log("success", response.data);
          this.$router.push("/posts/" + response.data.id ); 
        }).catch(error => {
          this.errors = error.response.data.errors;
          this.status = error.response.status;
          console.log(error.response.data.errors);
        });
    },  
  }  
};
</script>