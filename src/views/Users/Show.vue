<template>
  <div class="users-show">
    <div class="container">
      
      <!-- Breadcrumb -->
      <section class="g-my-30">
        <div class="container">
          <ul class="u-list-inline">
            <li class="list-inline-item g-mr-7">
              <router-link class="u-link-v5 g-color-main g-color-primary--hover" v-bind:to="`/users/${user.id}/edit`">Edit User Information</router-link>
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
                        <a class="u-icon-v1 u-icon-size--md g-color-white" href="#">
                          <i class="icon-settings u-line-icon-pro"></i>
                        </a>
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
                <a href="page-profile-comments-1.html" class="list-group-item list-group-item-action justify-content-between">
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

            <!-- Profle Content -->
            <div class="col-lg-9">
              <!-- Latest Projects Panel -->
              <div class="card border-0 g-mb-40">
                <!-- Panel Header -->
                <div class="card-header d-flex align-items-center justify-content-between g-bg-gray-light-v5 border-0 g-mb-15">
                  <h3 class="h6 mb-0">
                      <i class="icon-layers g-pos-rel g-top-1 g-mr-5"></i> Latest Posts <small></small>
                    </h3>
                  
                </div>
                <!-- End Panel Header -->

                <!-- Panel Body -->
                <div class="js-scrollbar card-block u-info-v1-1 g-bg-white-gradient-v1--after g-height-400 g-pa-0">
                  <ul class="list-unstyled">
                    <li class="media g-brd-around g-brd-gray-light-v4 g-brd-left-3 g-brd-blue-left rounded g-pa-20 g-mb-10">
                      <div class="d-flex g-mt-2 g-mr-15">
                        <img class="g-width-40 g-height-40 rounded-circle" src="/assets/img-temp/100x100/img1.jpg" alt="Image Description">
                      </div>
                      <div class="media-body">
                        <div class="d-flex justify-content-between">
                          <h5 class="h6 g-font-weight-600 g-color-black">Unify Template</h5>
                          <span class="small text-nowrap g-color-blue">2 min ago</span>
                        </div>
                        <p>Curabitur hendrerit dolor sit amet consectetur. Adipiscing elitut leosit amet, consectetur eleifend.</p>
                        <span class="u-label u-label--sm g-bg-gray-light-v4 g-color-main g-rounded-20 g-px-10">HTML</span>
                        <span class="u-label u-label--sm g-bg-gray-light-v4 g-color-main g-rounded-20 g-px-10">AnhularJS</span>
                        <span class="u-label u-label--sm g-bg-gray-light-v4 g-color-main g-rounded-20 g-px-10">PHP</span>
                      </div>
                    </li>

                    <li class="media g-brd-around g-brd-gray-light-v4 g-brd-left-3 g-brd-pink-left rounded g-pa-20 g-mb-10">
                      <div class="d-flex g-mt-2 g-mr-15">
                        <img class="g-width-40 g-height-40 rounded-circle" src="/assets/img-temp/100x100/img5.jpg" alt="Image Description">
                      </div>
                      <div class="media-body">
                        <div class="d-flex justify-content-between">
                          <h5 class="h6 g-font-weight-600 g-color-black">UX/UI Design and Backend</h5>
                          <span class="small text-nowrap g-color-pink">16 min ago</span>
                        </div>
                        <p>Hac consectetur habitasse platea dictumst, adipiscing elitut leosit amet, consectetur eleifend.</p>
                        <span class="u-label u-label--sm g-bg-gray-light-v4 g-color-main g-rounded-20 g-px-10">CSS</span>
                        <span class="u-label u-label--sm g-bg-gray-light-v4 g-color-main g-color-black g-rounded-20 g-px-10">JavaScript</span>
                        <span class="u-label u-label--sm g-bg-gray-light-v4 g-color-main g-rounded-20 g-px-10">Ruby</span>
                        <span class="u-label u-label--sm g-bg-gray-light-v4 g-color-main g-rounded-20 g-px-10">ASP.NET</span>
                      </div>
                    </li>

                    <li class="media g-brd-around g-brd-gray-light-v4 g-brd-left-3 g-brd-black-left rounded g-pa-20 g-mb-10">
                      <div class="d-flex g-mt-2 g-mr-15">
                        <img class="g-width-40 g-height-40 rounded-circle" src="/assets/img-temp/100x100/img4.jpg" alt="Image Description">
                      </div>
                      <div class="media-body">
                        <div class="d-flex justify-content-between">
                          <h5 class="h6 g-font-weight-600 g-color-black">React Native App</h5>
                          <span class="small text-nowrap g-color-blue">2 min ago</span>
                        </div>
                        <p>Curabitur hendrerit dolor sit amet consectetur. Adipiscing elitut leosit amet, consectetur eleifend.</p>
                        <span class="u-label u-label--sm g-bg-gray-light-v4 g-color-main g-rounded-20 g-px-10">ReactJS</span>
                        <span class="u-label u-label--sm g-bg-gray-light-v4 g-color-main g-rounded-20 g-px-10">CSS</span>
                        <span class="u-label u-label--sm g-bg-gray-light-v4 g-color-main g-rounded-20 g-px-10">HTML</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- End Panel Body -->
              </div>
              <!-- End Latest Projects Panel -->

              
            </div>
            <!-- End Profle Content -->
          </div>
        </div>
      </section>
































      <!-- <p>User Name: {{ user.user_name }}</p> -->
      <!-- <p>Email: {{ user.email }}</p> -->
       <!-- <img :src="user.image" alt="">  -->
     
        
        <!-- <router-link v-bind:to="`/users/${user.id}/edit`">Edit User Information</router-link> -->

     
      <div v-for="post in user.posts">
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
      </div>
    <router-link to="/courses">Find some Nuggs</router-link>



    </div>
  </div>
</template>

<script>
import axios from "axios";
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
  methods: {}
};
</script>