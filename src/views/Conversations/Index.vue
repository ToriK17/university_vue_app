<template>
 <div class="conversations-index">
   
    <section class="g-bg-size-cover g-bg-pos-center g-bg-cover g-color-white g-py-50 g-mb-20" style="background-image: url(/assets/img/logo/messages.jpeg);">

      <div class="container text-center g-py-100--md g-py-80">
        <h1 class="text-uppercase g-font-weight-500 g-mb-30"></h1>
       </div>
    </section>

    <section class="g-pt-50 g-pb-90">
      <div class="container">
        <!-- Search Info -->
        <div class="d-md-flex justify-content-between g-mb-30">
          
          <ul class="list-inline">
            <li class="list-inline-item g-mr-30">
            </li>
            <li class="list-inline-item">
            </li>
          </ul>
        </div>
        <!-- End Search Info -->

        <!-- Search Result -->
        <article v-for="conversation in conversations">
          <router-link style="text-decoration: none; color: black" v-bind:to="'/conversations/' + conversation.id">
            <h2 class="h4 g-mb-15">
              <img class="g-height-54 g-width-54 rounded-circle g-mr-5" :src="conversation.user.image" alt="Profile Image">
              {{conversation.user.user_name}}
            </h2>

            <div class="d-lg-flex justify-content-between align-items-center g-mb-15">
              <!-- Search Info -->
              <ul class="list-inline g-mb-10 g-mb-0--lg">
                <li class="list-inline-item g-mr-30">
                  <i class="icon-calendar g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 2 weeks ago
                </li>
              </ul>
              <!-- End Search Info -->
            </div>

            <p class="g-mb-15">{{conversation.last_message.body}}</p>
            <hr class="g-brd-gray-light-v4 g-my-40">
          </router-link>
        </article>
        <!-- End Search Result -->


      </div>
    </section>











     
    <div>
      
      <div v-for="conversation in conversations">
        <router-link v-bind:to="'/conversations/' + conversation.id">
          {{conversation.user.user_name}} {{conversation.user.image}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ActionCable from "actioncable";

export default {
  data: function() {
    return {
      conversations: [],
      user: {}
    };
  },
  created: function() {
    axios.get("/api/conversations").then(response => {
      this.conversations = response.data;
      console.log(this.conversations);
    });
    // var cable = ActionCable.createConsumer("ws://localhost:3000/cable");
    // cable.subscriptions.create("MessagesChannel", {
    //   connected: () => {
    //     // Called when the subscription is ready for use on the server
    //     console.log("Connected to MessagesChannel");
    //   },
    //   disconnected: () => {
    //     // Called when the subscription has been terminated by the server
    //   },
    //   received: data => {
    //     // Called when there's incoming data on the websocket for this channel
    //     console.log("Data from MessagesChannel:", data);
    //     this.messages.push(data); // update the messages in real time
    //   }
    // });
  },
  methods: {
    // createMessage: function() {
    //   var params = {
    //     body: this.newMessageBody
    //   };
    //   axios.post("/api/messages", params).then(response => {
    //     this.newMessageBody = "";
    //   });      
    // }
  }
};
  


</script>