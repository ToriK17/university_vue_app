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
              <div v-for="message in conversation.messages" class="card-block g-pa-0">
                <div class="media g-mb-20">
                  <img class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-20" :src= "message.image" alt="Missing Profile Image">
                  <div class="media-body g-brd-around g-brd-gray-light-v4 g-pa-20">
                    <div class="d-sm-flex justify-content-sm-between align-items-sm-center g-mb-15 g-mb-10--sm">
                      <h5 class="h4 g-font-weight-300 g-mr-10 g-mb-5 g-mb-0--sm">{{ message.user_name }}</h5>
                      <div class="text-nowrap g-font-size-12">
                        <span>{{message.created_at }}</span> / <a href="#">Reply</a>
                      </div>
                    </div>

                    <p>{{ message.body }}</p>

                  </div>
                </div>

                <div class="media g-ml-40 g-mb-20">
                  <img class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src="/assets/img-temp/100x100/img17.jpg" alt="Image Description">
                  <div class="media-body g-brd-around g-brd-gray-light-v4 g-pa-20">
                    <div class="d-sm-flex justify-content-sm-between align-items-sm-center g-mb-15 g-mb-10--sm">
                      <h5 class="h4 g-font-weight-300 g-mr-10 g-mb-5 g-mb-0--sm">Alberta Watson</h5>
                      <div class="text-nowrap g-font-size-12">
                        <span>7 hr ago</span> / <a href="#">Reply</a>
                      </div>
                    </div>

                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>

                    <ul class="list-inline g-mb-10 g-mb-20--md">
                      <li class="list-inline-item g-mb-10 g-mb-0--sm">
                        <img class="g-width-70 g-height-70" src="/assets/img-temp/100x100/img11.jpg" alt="Image Description">
                      </li>
                      <li class="list-inline-item g-mb-10 g-mb-0--sm">
                        <img class="g-width-70 g-height-70" src="/assets/img-temp/100x100/img12.jpg" alt="Image Description">
                      </li>
                      <li class="list-inline-item g-mb-10 g-mb-0--sm">
                        <img class="g-width-70 g-height-70" src="/assets/img-temp/100x100/img13.jpg" alt="Image Description">
                      </li>
                      <li class="list-inline-item u-bg-overlay g-bg-black-opacity-0_5--after">
                        <img class="g-width-70 g-height-70" src="/assets/img-temp/100x100/img8.jpg" alt="Image Description">
                        <a class="u-link-v5 u-bg-overlay__inner g-absolute-centered g-color-white g-color-primary--hover text-center" href="#">
                          <span class="g-font-size-20">10+</span> Photos
                        </a>
                      </li>
                    </ul>

                    <ul class="list-inline my-0">
                      <li class="list-inline-item g-mr-20">
                        <a class="g-color-gray-dark-v5 g-text-underline--none--hover" href="#">
                          <i class="icon-like g-pos-rel g-top-1 g-mr-3"></i> 637
                        </a>
                      </li>
                      <li class="list-inline-item g-mr-20">
                        <a class="g-color-gray-dark-v5 g-text-underline--none--hover" href="#">
                          <i class="icon-dislike g-pos-rel g-top-1 g-mr-3"></i> 08
                        </a>
                      </li>
                      <li class="list-inline-item g-mr-20">
                        <a class="g-color-gray-dark-v5 g-text-underline--none--hover" href="#">
                          <i class="icon-share g-pos-rel g-top-1 g-mr-3"></i> 24
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="media g-mb-20">
                  <img class="d-flex g-width-50 g-height-50 rounded-circle g-mt-3 g-mr-15" src="/assets/img-temp/100x100/img6.jpg" alt="Image Description">
                  <div class="media-body g-brd-around g-brd-gray-light-v4 g-pa-20">
                    <div class="d-sm-flex justify-content-sm-between align-items-sm-center g-mb-15 g-mb-10--sm">
                      <h5 class="h4 g-font-weight-300 g-mr-10 g-mb-5 g-mb-0--sm">David Lee</h5>
                      <div class="text-nowrap g-font-size-12">
                        <span>2 days ago</span> / <a href="#">Reply</a>
                      </div>
                    </div>

                    <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.</p>

                    <ul class="list-inline my-0">
                      <li class="list-inline-item g-mr-20">
                        <a class="g-color-gray-dark-v5 g-text-underline--none--hover" href="#">
                          <i class="icon-like g-pos-rel g-top-1 g-mr-3"></i> 178
                        </a>
                      </li>
                      <li class="list-inline-item g-mr-20">
                        <a class="g-color-gray-dark-v5 g-text-underline--none--hover" href="#">
                          <i class="icon-dislike g-pos-rel g-top-1 g-mr-3"></i> 14
                        </a>
                      </li>
                      <li class="list-inline-item g-mr-20">
                        <a class="g-color-gray-dark-v5 g-text-underline--none--hover" href="#">
                          <i class="icon-share g-pos-rel g-top-1 g-mr-3"></i> 65
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <a class="btn btn-block u-btn-primary rounded-0 g-py-13" href="#">Load More</a>
              </div>
              <!-- End Panel Body -->
            </div>
            <!-- End Comments (Option 2) -->
          </div>
          <!-- End Profle Content -->
        </div>
      </div>
    </section>
    








   <h2>New Message</h2>
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