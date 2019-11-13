<template>
  <div id="app">
     <!-- Header -->
    <header id="js-header" class="u-header u-header--static--lg u-header--show-hide--lg u-header--change-appearance--lg" data-header-fix-moment="500" data-header-fix-effect="slide">
      <div class="u-header__section u-header__section--light g-bg-white g-transition-0_3 g-py-10" data-header-fix-moment-exclude="g-bg-white g-py-10" data-header-fix-moment-classes="g-bg-white-opacity-0_7 u-shadow-v18 g-py-0">
        <nav class="js-mega-menu navbar navbar-expand-lg">
          <div class="container">
            <!-- Responsive Toggle Button -->
            <button class="navbar-toggler navbar-toggler-right btn g-line-height-1 g-brd-none g-pa-0 g-pos-abs g-top-3 g-right-0" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="navBar" data-toggle="collapse" data-target="#navBar">
              <span class="hamburger hamburger--slider">
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
              </span>
              </span>
            </button>
            <!-- End Responsive Toggle Button -->

            <!-- Logo -->
            <a href="/" class="navbar-brand">
              <img width="50px" height="50px" src="/assets/img/logo/orange_nugget.jpg"/>
            </a>
            <!-- <li class="nav-logo-item g-mx-40--lg">
              <router-link to="/" class="navbar-brand">
                <img src="/assets/orange_nugget.jpg" alt="Orange Nugget">
              </router-link>
              
            </li> -->
            <!-- need to make this mini so it fits in the nav bar -->
            <!-- End Logo -->

            <!-- Navigation -->
            <div class="collapse navbar-collapse align-items-center flex-sm-row g-pt-10 g-pt-5--lg" id="navBar">
              <ul class="navbar-nav ml-auto text-uppercase g-font-weight-600 u-main-nav-v2 u-sub-menu-v2">

                 <!-- Signup -->
                 <!-- need to add v-if="!isLoggedIn()" -->
                <li class="nav-item g-mx-2--md g-mx-5--xl g-mb-5 g-mb-0--lg">
                  <router-link v-if="!isLoggedIn()" to="/signup" class="nav-link">SignUp</router-link>
                </li>
                <!-- End Signup -->

                <!-- Login -->
                <!-- need to add v-if="!isLoggedIn()"  -->
                <li class="nav-item g-mx-2--md g-mx-5--xl g-mb-5 g-mb-0--lg">
                  <router-link v-if="!isLoggedIn()"  to="/login" class="nav-link">Login</router-link>
                </li>
                <!-- End Login -->

                <!-- Logout -->
                <!-- need to add v-if="isLoggedIn()" -->
                <li class="nav-item g-mx-2--md g-mx-5--xl g-mb-5 g-mb-0--lg">
                  <router-link v-if="isLoggedIn()" to="/logout" class="nav-link">Logout</router-link>
                </li>
                <!-- End Logout -->

                <!-- Find a Class -->
                <li class="nav-item g-mx-2--md g-mx-5--xl g-mb-5 g-mb-0--lg">
                  <router-link to="/courses" class="nav-link">Find a Class</router-link>
                </li>
                <!-- End Find a Class -->

                <!-- Profile -->
                <!-- add v-if="isLoggedIn()" -->
                <li class="nav-item g-mx-2--md g-mx-5--xl g-mb-5 g-mb-0--lg">
                  <router-link v-if="isLoggedIn()" v-bind:to="'/users/' + userId()" class="nav-link">Profile</router-link>
                </li>
                <!-- End Profile -->

                <!-- Messages -->
                <!-- add v-if="isLoggedIn()" -->
                <li class="nav-item g-mx-2--md g-mx-5--xl g-mb-5 g-mb-0--lg">
                  <router-link v-if="isLoggedIn()" to="/conversations" class="nav-link">Messages</router-link>
                </li>
                <!-- End Messages -->

                <!-- Campus Updates -->
                <li class="nav-item g-mx-2--md g-mx-5--xl g-mb-5 g-mb-0--lg">
                  <router-link to="/announcements" class="nav-link">Campus Updates</router-link>
                </li>
                <!-- End Campus Updates -->


               
              </ul>
            </div>
            <!-- End Navigation -->
          </div>
        </nav>
      </div>
    </header>
    <!-- End Header --> 
    
      


  <div>
    <router-view/>
  </div>

   <!--  <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link> | 
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link> |
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link> | 
      <router-link v-if="isLoggedIn()" v-bind:to="'/users/' + userId()" >Profile</router-link> |
      <router-link to="/courses">Find your class </router-link> |
      <router-link to="/announcements">School Announcements </router-link> |
      <router-link v-if="isLoggedIn()" to="/messages">Messages </router-link> |

    </div> -->          
    
    <!-- Footer -->
    <div class="g-bg-black-opacity-0_9 g-color-white-opacity-0_8 g-py-60">
      <div class="container">
        <div class="row">
          <!-- Footer Content -->
          <div class="col-lg-3 col-md-6 g-mb-40 g-mb-0--lg">
            <a class="d-block g-mb-20" href="index.html">
              <img class="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHYwJDuBcl1PwcC7T77y9ubeO5rG2UQXQQEM2ajlqxBt27M0M7&s" alt="Logo">
            </a>
            <p>If you love Knugget and those tasty nuggz, share the wealth and let your fellow classmates know!</p>
            <p class="mb-0">Mmmmmmm . . . Knuggety Nuggz!</p>
          </div>
          <!-- End Footer Content -->

          <!-- Footer Content -->
          <div class="col-lg-3 col-md-6 g-mb-40 g-mb-0--lg">
            <div class="u-heading-v3-1 g-brd-white-opacity-0_3 g-mb-25">
              <h2 class="u-heading-v3__title h6 text-uppercase g-brd-primary">Contact Us</h2>
            </div>

            <article>
              <h3 class="h6 g-mb-2">
                  <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">24/7 Support</a>
                  <!-- link this to open to email in future -->
                </h3>
              <div class="small g-color-white-opacity-0_6"></div>
            </article>

            <hr class="g-brd-white-opacity-0_1 g-my-10">

            <article>
              <h3 class="h6 g-mb-2">
                  <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">New Features and Hot Nuggs Coming Soon</a>
                </h3>
              <div class="small g-color-white-opacity-0_6"></div>
            </article>

            <hr class="g-brd-white-opacity-0_1 g-my-10">

            <article>
              <h3 class="h6 g-mb-2">
                  <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">New terms and conditions</a>
                </h3>
              <div class="small g-color-white-opacity-0_6">November 14, 2019</div>
            </article>
          </div>
          <!-- End Footer Content -->

          <!-- Footer Content -->
          <div class="col-lg-3 col-md-6 g-mb-40 g-mb-0--lg">
            <div class="u-heading-v3-1 g-brd-white-opacity-0_3 g-mb-25">
              <h2 class="u-heading-v3__title h6 text-uppercase g-brd-primary">Useful Links</h2>
            </div>

            <nav class="text-uppercase1">
              <ul class="list-unstyled g-mt-minus-10 mb-0">
                <li class="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">
                  <h4 class="h6 g-pr-20 mb-0">
                      <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">About Us</a>
                      <i class="fa fa-angle-right g-absolute-centered--y g-right-0"></i>
                    </h4>
                </li>
                <li class="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">
                  <h4 class="h6 g-pr-20 mb-0">
                      <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">More Resources</a>
                      <i class="fa fa-angle-right g-absolute-centered--y g-right-0"></i>
                    </h4>
                </li>
                <li class="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">
                  <h4 class="h6 g-pr-20 mb-0">
                      <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">Our Services</a>
                      <i class="fa fa-angle-right g-absolute-centered--y g-right-0"></i>
                    </h4>
                </li>
                <li class="g-pos-rel g-brd-bottom g-brd-white-opacity-0_1 g-py-10">
                  <h4 class="h6 g-pr-20 mb-0">
                      <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">Jobs: Work with us</a>
                      <i class="fa fa-angle-right g-absolute-centered--y g-right-0"></i>
                    </h4>
                </li>
                <li class="g-pos-rel g-py-10">
                  <h4 class="h6 g-pr-20 mb-0">
                      <a class="g-color-white-opacity-0_8 g-color-white--hover" href="#">Contact Us</a>
                      <i class="fa fa-angle-right g-absolute-centered--y g-right-0"></i>
                    </h4>
                </li>
              </ul>
            </nav>
          </div>
          <!-- End Footer Content -->

          <!-- Footer Content -->
          <div class="col-lg-3 col-md-6">
            <div class="u-heading-v3-1 g-brd-white-opacity-0_3 g-mb-25">
              <h2 class="u-heading-v3__title h6 text-uppercase g-brd-primary">Our Contact Info</h2>
            </div>

            <address class="g-bg-no-repeat g-line-height-2 g-mt-minus-4" style="background-image: url();">
                25, Lorem Lis Street, Orange
                <br> Nevada, US
                <br> Phone: 800 123 3456
                <br> Fax: 800 123 3457
                <br> Email: <a href="mailto:info@knugget.com" class="">info@knugget.com</a>
              </address>
          </div>
          <!-- End Footer Content -->
        </div>
      </div>
    </div>
    <!-- End Footer -->
    
  </div>
</template>

<style>

</style>
<script>
export default {
  data: function() {
    return {
      user_id: localStorage.getItem("user_id"),
      email: localStorage.getItem("email")
    };
  },
  methods: {
    isLoggedIn: function() {
      if (localStorage.getItem("jwt")) {
        return true;
      } else {
        return false;
      }
    },
    userId: function() {
      return localStorage.getItem("user_id");
    }
  }
};
</script>