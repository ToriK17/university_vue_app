<template>
  <div class="home">
    <div class="container">
      
      <form v-on:submit.prevent="submit()"  >
        <h1>Signup</h1>
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
          console.log(response.data);
        })
        .catch(error => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);

        });
    }
  }
};
</script>
