<template>
  <div class="users-edit">

    <section class="overflow-hidden">
      <div class="row no-gutters">
        <div class="col-lg-6">
          <!-- Promo Block - Slider -->
          <div class="js-carousel h-100" data-autoplay="true" data-infinite="true" data-fade="true" data-speed="5000">
            <div class="js-slide g-bg-img-hero h-100 g-min-height-50vh" style="background-image: url(../../assets/img-temp/900x900/img3.jpg);" data-calc-target="#js-header"></div>

            <div class="js-slide g-bg-img-hero h-100 g-min-height-50vh" style="background-image: url(../../assets/img-temp/900x900/img4.jpg);" data-calc-target="#js-header"></div>
          </div>
          <!-- End Promo Block - Slider -->
        </div>

        <div class="col-lg-6">
          <div class="g-pa-40 g-mx-70--xl">
            <!-- Form -->
            <form v-on:submit.prevent="submit()" class="g-py-15">
              <h2 class="h3 g-color-black mb-4">Signup</h2>
              <ul>
                <!-- <li class="text-danger" v-for="error in errors">{{ error }}</li> -->
              </ul>
              <div class="mb-4">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text g-width-45 g-brd-right-none g-brd-gray-light-v4 g-color-primary"><i class="icon-communication-128 u-line-icon-pro g-pos-rel g-top-2"></i></span>
                  </div>
                  <input v-model="userName" class="form-control g-color-black g-brd-left-none g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-pl-0 g-pr-15 g-py-15" type="text" placeholder="Username">
                </div>
              </div>


              <div class="mb-4">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text g-width-45 g-brd-right-none g-brd-gray-light-v4 g-color-primary"><i class="icon-communication-062 u-line-icon-pro g-pos-rel g-top-2"></i></span>
                  </div>
                  <input v-model="email" class="form-control g-color-black g-brd-left-none g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-pl-0 g-pr-15 g-py-15" type="tel" placeholder="Your email">
                </div>
              </div>

              <div class="mb-4">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text g-width-45 g-brd-right-none g-brd-gray-light-v4 g-color-primary"><i class="icon-media-094 u-line-icon-pro g-pos-rel g-top-2"></i></span>
                  </div>
                  <input v-model="password" class="form-control g-color-black g-brd-left-none g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-pl-0 g-pr-15 g-py-15" type="tel" placeholder="Password">
                </div>
              </div>

              <div class="mb-4">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text g-width-45 g-brd-right-none g-brd-gray-light-v4 g-color-primary"><i class="icon-media-094 u-line-icon-pro g-pos-rel g-top-2"></i></span>
                  </div>
                  <input v-model="passwordConfirmation" class="form-control g-color-black g-brd-left-none g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-pl-0 g-pr-15 g-py-15" type="password" placeholder="Password Confirmation">
                </div>
              </div>

              <div class="mb-4">
                <div class="input-group">
                   
                  <input type="file" v-on:change="setFile($event)" ref="fileInput">               
                </div>
              </div>

              <div class="mb-1">
                <label class="form-check-inline u-check g-font-size-13 g-pl-25 mb-2">
                  <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox">
                  <div class="u-check-icon-checkbox-v6 g-absolute-centered--y g-left-0">
                    <i class="fa g-rounded-2" data-check-icon="&#xf00c"></i>
                  </div>
                  I accept the <a href="#">Terms and Conditions</a>
                </label>
              </div>

              <div class="mb-3">
                <label class="form-check-inline u-check g-font-size-13 g-pl-25 mb-2">
                  <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" type="checkbox">
                  <div class="u-check-icon-checkbox-v6 g-absolute-centered--y g-left-0">
                    <i class="fa g-rounded-2" data-check-icon="&#xf00c"></i>
                  </div>
                  Subscribe to our newsletter
                </label>
              </div>

              <div class="g-mb-30">
                <button class="btn btn-md btn-block u-btn-primary rounded text-uppercase g-py-13" type="submit" value="Submit" >Signup</button>
              </div>

              <p class="g-font-size-13 text-center mb-0">Already have an account? <a class="g-font-weight-600" to="/login">Login</a>
              </p>
            </form>
            <!-- End Form -->
          </div>
        </div>
      </div>
    </section>
























    <form v-on:submit.prevent="submit()">
      <li v-for="error in errors">{{ error }}</li>
      <h1>Edit User Information</h1>
      <label>Username:</label>
      <input type="text" v-model="user.user_name">
      <label>Email:</label>
      <input type="text" v-model="user.email">
      <label>Password:</label>
      <input type="text" v-model="user.password">
      <label>Password Confirmation :</label>
      <input type="text" v-model="user.password_confirmation">
      <label>Profile Pic:</label>
      <input type="file" v-on:change="setFile($event)" ref="fileInput">
      <button v-on:click="submit()">Submit</button> 
      <button v-on:click="destroyUser()">Delete Profile</button>     
    </form>
  </div>
   
 
  
</template>

<script>
import axios from "axios";
export default {
  data: function() {
    return {
      user: {}, 
      errors: [], 
      image: ""
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
    submit: function() {
      var formData = new FormData();
      formData.append("user_name", this.user.user_name);
      formData.append("email", this.user.email);
      if (this.user.passwords && this.user.password_confirmation) {
        formData.append("password", this.user.password);
        formData.append("password_confirmation", this.user.password_confirmation);
      }
      if (this.image) {
        formData.append("image", this.image);
      }

      axios
        .patch("/api/users/" + this.user.id, formData)
        .then(response => {
          this.$router.push("/users/" + this.user.id);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
        });  
    },
    destroyUser: function() {
      
      axios
        .delete("/api/users/" + this.user.id)
        .then(response => {
          console.log("deleted user", response.data);
          this.$router.push("/logout");
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });  
    }
  }
};
</script>