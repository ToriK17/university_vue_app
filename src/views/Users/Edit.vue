<template>
  <div class="users-edit">
    <form v-on:submit.prevent="submit()">
      <h1>Edit User Information</h1>
      <label>Username:</label>
      <input type="text" v-model="user.user_name">
      <label>Email:</label>
      <input type="text" v-model="user.email">
      <label>Password:</label>
      <input type="text" v-model="user.password">
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
      errors: []
    };
  },
  created: function() {
    axios.get("/api/users/" + this.$route.params.id).then(response => {
      this.user = response.data;
      console.log(this.user);
    });
  },
  methods: {
    submit: function() {
      var params = {
        user_name: this.user.user_name,
        email: this.user.email, 
        password:this.user.password, 
      };
      axios
        .patch("/api/users/" + this.user.id, params)
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