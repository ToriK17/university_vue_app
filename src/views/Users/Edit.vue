<template>
  <div class="users-edit">
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
      <button type="submit" value="Submit">Submit</button>     
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
      formData.append("password", this.user.password);
      formData.append("password_confirmation", this.user.password_confirmation);
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
    }
  }
};
</script>