<template>
  <div class="home">
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
                <li class="text-danger" v-for="error in errors">{{ error }}</li>
              </ul>
              <div class="mb-4">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text g-width-45 g-brd-right-none g-brd-gray-light-v4 g-color-primary"><i class="icon-communication-128 u-line-icon-pro g-pos-rel g-top-2"></i></span>
                  </div>
                  <input v-model="userName" class="form-control g-color-black g-brd-left-none g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-pl-0 g-pr-15 g-py-15" type="email" placeholder="Username">
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
                  <input v-model="password_confirmation" class="form-control g-color-black g-brd-left-none g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-pl-0 g-pr-15 g-py-15" type="tel" placeholder="Password">
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
                <button class="btn btn-md btn-block u-btn-primary rounded text-uppercase g-py-13" type="button">Signup</button>
              </div>

              <p class="g-font-size-13 text-center mb-0">Already have an account? <a class="g-font-weight-600" href="page-signup-11.html">Login</a>
              </p>
            </form>
            <!-- End Form -->
          </div>
        </div>
      </div>
    </section>





      <form v-on:submit.prevent="submit()"  >
        <ul>
          <li class="text-danger" v-for="error in errors">{{ error }}</li>
        </ul>
        <div class="form-group">
          <label>Username:</label> 
          <input type="text" class="form-control" v-model="userName">
        </div>
        <div class="form-group">
          <label>Profile Pic:</label> 
          <input type="file" class="form-control" v-on:change="setFile($event)" ref="fileInput">
        </div>
        <div class="form-group">
          <label>Email:</label>
          <input type="email" class="form-control" v-model="email">
        </div>
        <div class="form-group">
          <label>Password:</label>
          <input type="password" class="form-control" v-model="password">
        </div>
        <div class="form-group">
          <label>Password confirmation:</label>
          <input type="password" class="form-control" v-model="passwordConfirmation">
        </div>
        <input type="submit" class="btn btn-primary" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      userName: "",
      image: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: [],
      user: {}
    };
  }, 
  methods: {
    setFile: function(event) {
      if (event.target.files.length > 0) {
        this.image = event.target.files[0];
      }
    },
    submit: function() {
      var formData = new FormData();
      formData.append("user_name", this.userName);
      formData.append("image", this.image);
      formData.append("email", this.email);
      formData.append("password", this.password);
      formData.append("password_confirmation", this.passwordConfirmation);
      
      axios
        .post("/api/users", formData)
        .then(response => {
          this.$router.push("/login/");
        })
        .catch(error => {
          this.status = error.response.status;
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);

        });
    }
  }
};
</script>
