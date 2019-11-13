<template>
  <div class="conversations-show">  
    <section class="g-mb-100">
      <div class="container">
        <div class="row">
          <!-- Profile Sidebar -->
          <div class="col-lg-3 g-mb-50 g-mb-0--lg">
            <!-- User Image -->
            <div class="u-block-hover g-pos-rel">
              <figure>
                <img class="img-fluid w-100 u-block-hover__main--zoom-v1" src="/assets/img-temp/400x450/img5.jpg" alt="Image Description">
              </figure>  <!-- :src="user.image" -->

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

              <!-- User Info -->
              <span class="g-pos-abs g-top-20 g-left-0">
                  
                </span>
              <!-- End User Info -->
            </div>
            <!-- User Image -->
          </div>
          <!-- End Profile Sidebar -->

          <!-- Profle Content -->
          <div class="col-lg-9">

          <!-- Messages  -->
            <div class="card border-0 g-mb-40">
              <!-- Panel Header -->
              <div class="card-header d-flex align-items-center justify-content-between g-bg-gray-light-v5 border-0 g-mb-15">
                <h3 class="h6 mb-0">
                    <i class="icon-bubbles g-pos-rel g-top-1 g-mr-5"></i> Messages with 
                  </h3>
              </div>
              <!-- End Panel Header -->

              <!-- Panel Body -->
              <div class="card-block g-pa-0">
                <div v-for="message in conversation.messages" class="media g-mb-20">
                  <img class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-20" :src= "message.image" alt="Missing Profile Image">
                  <div class="media-body g-brd-around g-brd-gray-light-v4 g-pa-20">
                    <div class="d-sm-flex justify-content-sm-between align-items-sm-center g-mb-15 g-mb-10--sm">
                      <h5 class="h4 g-font-weight-300 g-mr-10 g-mb-5 g-mb-0--sm">{{ message.user_name }}</h5>
                      <div class="text-nowrap g-font-size-12">
                        <span>{{message.created_at }}</span>
                      </div>
                    </div>

                    <p>{{ message.body }}</p>

                  </div>
                </div>

                <div>
                  <!-- Form -->
                  <form v-on:submit.prevent="createMessage()" class="g-py-15">
                    
                    <div class="mb-4">
                      <div class="input-group">
                        <div class="input-group-prepend">
                          <span class="input-group-text g-width-45 g-brd-right-none g-brd-gray-light-v4 g-color-primary"><i class="icon-communication-128 u-line-icon-pro g-pos-rel g-top-2"></i></span>
                        </div>
                        <input v-model="newMessageBody" class="form-control g-color-black g-brd-left-none g-bg-white g-bg-white--focus g-brd-gray-light-v4 g-pl-0 g-pr-15 g-py-15" type="text" placeholder="type message">
                      </div>
                    </div>

                    <div class="g-mb-30">
                      <input class="btn btn-md btn-block u-btn-primary rounded text-uppercase g-py-13" type="submit" value="Create Message">
                    
                    </div>

                   
                  </form>
                  <!-- End Form -->
                </div>

              </div>
              <!-- End Panel Body -->
            </div>
            <!-- End Comments (Option 2) -->
          </div>
          <!-- End Profle Content -->
        </div>
      </div>
    </section>
    




    <form v-on:submit.prevent="createMessage()">
      <div>
        <input type="text" v-model="newMessageBody"> 
        <input type="submit" value="Create Message"> 
      </div>    
    </form> 
    <div>
      <h2>Messages</h2>
      <div v-for="message in conversation.messages">
        <p>{{ message.user_name }} : {{message.created_at }}</p>
        <p>{{ message.body }}</p>
      </div>
    </div>

    <router-link to="/conversations">return to all messages</router-link> 
      
  </div>
</template>

<script>
import axios from "axios";
import ActionCable from "actioncable";

export default {
  data: function() {
    return {
      newMessageBody: "",
      conversation: {},
      errors: []
    };
  },
  created: function() {
    axios.get("/api/conversations/" + this.$route.params.id).then(response => {
      this.conversation = response.data;
      console.log(response.data);
    });
    var cable = ActionCable.createConsumer("ws://localhost:3000/cable");
    cable.subscriptions.create("MessagesChannel", {
      connected: () => {
        // Called when the subscription is ready for use on the server
        console.log("Connected to MessagesChannel");
      },
      disconnected: () => {
        // Called when the subscription has been terminated by the server
      },
      received: data => {
        // Called when there's incoming data on the websocket for this channel
        console.log("Data from MessagesChannel:", data);
        this.conversation.messages.push(data); // update the messages in real time
      }
    });
  },
  methods: {
    createMessage: function() {
      var params = {
        body: this.newMessageBody, 
        conversation_id: this.conversation.id 
      };
      axios.post("/api/messages", params).then(response => {
        this.newMessageBody = "";
        // this.conversation.messages.push(response.data);
      });      
    }
  }
};
  


</script>