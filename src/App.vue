<template>
  <div id="app">
      
          

                
                

              

              

 <!--    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link> | 
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link> |
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link> | 
      <router-link v-if="isLoggedIn()" v-bind:to="'/users/' + userId()" >Profile</router-link> |
      <router-link to="/courses">Find your class </router-link> |
      <router-link to="/announcements">School Announcements </router-link> |
      <router-link v-if="isLoggedIn()" to="/messages">Messages </router-link> |

    </div> -->
    <!-- Home -->
 <!--    <li class="dropdown-item"  data-animation-in="fadeIn" data-animation-out="fadeOut" data-max-width="60%" data-position="left">
      <router-link to="/" id="mega-menu-home" class="nav-link g-py-7 g-px-0" aria-haspopup="true" aria-expanded="false">Home</router-link>
    </li> -->
    <!-- Sign Up -->
    <!-- <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link> -->
 <!--    <li class="dropdown-item" data-animation-in="fadeIn" data-animation-out="fadeOut" data-max-width="60%" data-position="left">
      <router-link to="/signup" id="mega-menu-home" class="nav-link g-py-7 g-px-0" aria-haspopup="true" aria-expanded="false">Sign Up</router-link>
    </li>   -->
    <!-- Login -->
    <!-- <router-link v-if="!isLoggedIn()" to="/login">Login</router-link>  -->
   <!--  <li class="dropdown-item" data-animation-in="fadeIn" data-animation-out="fadeOut" data-max-width="60%" data-position="left">
      <router-link to="/login" id="mega-menu-home" class="nav-link g-py-7 g-px-0" aria-haspopup="true" aria-expanded="false">Login</router-link>
    </li>   -->  

                   <!-- Logout-->
                   <!-- <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>  -->
                  <!--  <li class="dropdown-item" data-animation-in="fadeIn" data-animation-out="fadeOut" data-max-width="60%" data-position="left">
                     <router-link to="/logout" id="mega-menu-home" class="nav-link g-py-7 g-px-0" aria-haspopup="true" aria-expanded="false">Logout</router-link>
                   </li>  -->

                    <!-- Profile --><!-- 
                    <router-link v-if="isLoggedIn()" v-bind:to="'/users/' + userId()" >Profile</router-link>  -->
                   
                  <!--  <li class="dropdown-item" data-animation-in="fadeIn" data-animation-out="fadeOut" data-max-width="60%" data-position="left">
                     <router-link v-bind:to="'/users/' + userId()" id="mega-menu-home" class="nav-link g-py-7 g-px-0" aria-haspopup="true" aria-expanded="false">Profile</router-link>
                   </li>  
    -->
                 <!-- Universities -->
                 <!-- demo place holder -->
                   <!-- <li class="dropdown-item hs-has-sub-menu ">
                     <a id="nav-link--pages--contacts" class="nav-link " href="#" aria-haspopup="true" aria-expanded="false" aria-controls="nav-submenu--pages--contacts">Colleges</a>
    -->
                       <!-- Submenu  -->
                       <!-- <ul class="hs-sub-menu list-unstyled u-shadow-v11 u-dropdown-col-2 g-brd-top g-brd-primary g-brd-top-2 g-min-width-220 g-mt-minus-2" id="nav-submenu--pages--contacts" aria-labelledby="nav-link--pages--contacts">
                         <li class="dropdown-item ">
                           <router-link to="/" >University of Las Vegas</router-link>
                         </li>
                         <li class="dropdown-item ">
                           <a class="nav-link" href="">Gonzaga University</a>
                         </li>
                         <li class="dropdown-item ">
                           <a class="nav-link" href="">Michigan State University</a>
                         </li>
                         <li class="dropdown-item ">
                           <a class="nav-link" href="">Auburn University</a>
                         </li>
                         <li class="dropdown-item ">
                           <a class="nav-link" href="">Iowa State University</a>
                         </li>
                         <li class="dropdown-item ">
                           <a class="nav-link" href="">Utah State University</a>
                         </li>
                       </ul>
    -->                    <!-- End Submenu (level 2) -->
                  <!--  </li> -->
                       
                 <!-- Courses -->
                 <!-- <router-link to="/courses">Find your class </router-link>  -->
                   
                  <!--  <li class="dropdown-item" data-animation-in="fadeIn" data-animation-out="fadeOut" data-max-width="60%" data-position="left">
                     <router-link to="/courses" id="mega-menu-home" class="nav-link g-py-7 g-px-0" aria-haspopup="true" aria-expanded="false">Classes</router-link>
                   </li>  
    -->
                 <!-- Campus Updates -->
                 <!--<router-link to="/announcements">School Announcements </router-link>-->
                   
                  <!--  <li class="dropdown-item" data-animation-in="fadeIn" data-animation-out="fadeOut" data-max-width="60%" data-position="left">
                     <router-link to="/announcements" id="mega-menu-home" class="nav-link g-py-7 g-px-0" aria-haspopup="true" aria-expanded="false">Campus Updates</router-link>
                   </li> 
    -->
                 <!-- Messages -->
                 <!--<router-link v-if="isLoggedIn()" to="/messages">Messages </router-link>-->
                   
                   <!-- <li class="dropdown-item" data-animation-in="fadeIn" data-animation-out="fadeOut" data-max-width="60%" data-position="left">
                     <router-link to="/" id="mega-menu-home" class="nav-link g-py-7 g-px-0" aria-haspopup="true" aria-expanded="false">My Messages</router-link>
                   </li>      
                 </ul>
               </div> -->
               <!-- End Navigation -->
     <!--         </div>
           </nav>
         </div>
       </header>
    -->

    
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