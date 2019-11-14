<template>
  <div class="users-show">
    <div class="container">
      
      <!-- Breadcrumb -->
      <section class="g-my-30">
        <div class="container">
          <ul class="u-list-inline">
            <li class="list-inline-item g-mr-7">
             
            </li>
            
          </ul>
        </div>
      </section>
      <!-- End Breadcrumb -->

  <section class="g-mb-100">
    <div class="container">
      <div class="row">
        <!-- Profile Sidebar -->
        <div class="col-lg-3 g-mb-50 g-mb-0--lg">
          <!-- User Image -->
          <div class="u-block-hover g-pos-rel">
            <figure>
              <img class="img-fluid" :src="user.image" alt="Profile Pic">
            </figure>

        <!-- Figure Caption -->
        <figcaption class="u-block-hover__additional--fade g-bg-black-opacity-0_5 g-pa-30">
          <div class="u-block-hover__additional--fade u-block-hover__additional--fade-up g-flex-middle">
            <!-- Figure Social Icons -->
            <ul class="list-inline text-center g-flex-middle-item--bottom g-mb-20">
              <li class="list-inline-item align-middle g-mx-7">
                <router-link class="u-icon-v1 u-icon-size--md g-color-white" v-bind:to="`/users/${user.id}/edit`">
                  <i class="icon-settings u-line-icon-pro"></i>
                </router-link>
              </li>
            </ul>
            <!-- End Figure Social Icons -->
          </div>
        </figcaption>
        <!-- End Figure Caption -->

            
          </div>
          <!-- User Image -->

        <!-- Sidebar Navigation -->
        <div class="list-group list-group-border-0 g-mb-40">

          <!-- User_name -->
          <a href="page-profile-comments-1.html" class="list-group-item list-group-item-action justify-content-between">
            <span><i class="icon-user"></i> {{user.user_name}}</span>
            <span class="u-label g-font-size-11 g-bg-cyan g-rounded-20 g-px-8"></span>
          </a>
          <!-- End User_name -->

          <!-- Email -->
          <a href="page-profile-comments-1.html" class="list-group-item list-group-item-action justify-content-between">
            <span><i class="icon-communication-005 u-line-icon-pro"></i> {{user.email }}</span>
            <span class="u-label g-font-size-11 g-bg-cyan g-rounded-20 g-px-8"></span>
          </a>
          <!-- End Email -->

          <!-- My Messages -->
          <a to="/conversations" class="list-group-item list-group-item-action justify-content-between">
            <span><i class="icon-bubbles g-pos-rel g-top-1 g-mr-8"></i> My Messages</span>
            <span class="u-label g-font-size-11 g-bg-pink g-rounded-20 g-px-8">2</span>
          </a>
          <!-- End My Messages -->

          <!-- Edit Profile -->
          <router-link v-bind:to="`/users/${user.id}/edit`" class="list-group-item list-group-item-action justify-content-between">
            <span><i class="icon-settings g-pos-rel g-top-1 g-mr-8"></i> Edit Profile</span>
            <span class="u-label g-font-size-11 g-bg-cyan g-rounded-20 g-px-8"></span>
          </router-link>
          <!-- End Edit Profile -->
        </div>
        <!-- End Sidebar Navigation -->
      </div>
      <!-- End Profile Sidebar -->



          <!-- My Posts Title Panel -->
        <div class="col-lg-9">
          
          <div class="card border-0 g-mb-40">
            <!-- Panel Header -->
            <div class="card-header d-flex align-items-center justify-content-between g-bg-gray-light-v5 border-0 g-mb-5">
              <h3 class="h6 mb-0">
                  <i class="icon-layers g-pos-rel g-top-1 g-mr-5"></i> My Posts <small></small>
                </h3>
            </div>
            <!-- End Panel Header -->
            <!-- Post Panel Body -->
            <div v-for="post in user.posts" class="js-scrollbar card-block u-info-v1-1 g-bg-white-gradient-v1--after g-height-170 g-pa-0">
              <router-link v-bind:to="`/posts/${post.id}`">
              <ul class="list-unstyled">
                <li class="media g-brd-around g-brd-gray-light-v4 g-brd-left-3 g-brd-blue-left rounded g-pa-20 g-mb-10">
                  <div class="d-flex g-mt-2 g-mr-15">
                    <img class="g-width-40 g-height-40 rounded-circle" src="https://i.pinimg.com/originals/f0/c7/8e/f0c78eb503b4cad61ccd9c6e82da9198.jpg" alt="School Image">
                  </div>
                  <div class="media-body">
                    <div class="d-flex justify-content-between">
                      <h5 class="h6 g-font-weight-600 g-color-black">{{ post.course_name}} with {{ post.professor_name }}</h5>
                      <span class="small text-nowrap g-color-blue">{{relativeDate(post.created_at)}}</span>
                    </div>
                    <p class="small text-nowrap g-color-blue"> Additional Details:<br> {{ post.details }}</p>
                    
                  </div>
                </li>
              </ul>
            </router-link>
            </div>
            <!-- End Panel Body -->
          </div>
              <!-- End Latest Projects Panel -->
        </div>

            <!-- End Profle Content -->
          </div>
        </div>
      </section>
    </div>
  </div>
</template>







      <!-- <p>User Name: {{ user.user_name }}</p> -->
      <!-- <p>Email: {{ user.email }}</p> -->
       <!-- <img :src="user.image" alt="">  -->
     
        
        <!-- <router-link v-bind:to="`/users/${user.id}/edit`">Edit User Information</router-link> -->

     
      <!-- <div v-for="post in user.posts">
        <p> {{ post.professor_name }}</p>
        <p> {{ post.details }}</p>
        <p> {{ post.course_dept}}</p>
        <p> {{ post.course_name}}</p>
          <div v-for="resource in post.post_resources">
        --------------------------
            <p> {{ resource.name }}</p>
            <p> {{ resource.details }}</p>
          </div>
      <router-link v-bind:to="`/posts/${post.id}`">Show Full Post</router-link>
      </div> -->
<!-- <router-link to="/courses">Find some Nuggs</router-link> -->




<script>
import axios from "axios";
import moment from 'moment';
export default {
  data: function() {
    return {
      user: {}
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  methods: {
    relativeDate: function(date) {
      return moment(date).format('MMMM Do YYYY, h:mm a');
    }
  }
};
</script>