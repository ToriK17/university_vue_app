<template>
  <div class="courses-show">

    <section class="dzsparallaxer auto-init height-is-based-on-content use-loading" data-options='{direction: "reverse", settings_mode_oneelement_max_offset: "150"}'>
      <!-- Parallax Image -->
      <div class="divimage dzsparallaxer--target w-100 g-bg-cover g-bg-white-gradient-opacity-v3--after" style="height: 140%; background-image: url();"></div>
      <!-- End Parallax Image -->

      <div class="container text-center g-py-100--md g-py-80">
        <h2 class="h1 text-uppercase g-font-weight-300 g-mb-30">{{ course.name }} : {{ course.num }}</h2>
        <h2 class="h1 text-uppercase g-font-weight-300 g-mb-30">{{course.department}}</h2>

        <!-- Search Form -->

        <form class="g-width-60x--md mx-auto">
          <div class="form-group g-mb-20">
            <div class="input-group u-shadow-v21 rounded g-mb-15">
              <input v-model="resourceFilter" class="form-control form-control-md g-brd-white g-font-size-16 border-right-0 pr-0 g-py-15" type="text" placeholder="Used Books?  Midterms?  Recorded Lectures?">
              <div class="input-group-addon d-flex align-items-center g-bg-white g-brd-white g-color-gray-light-v1 g-pa-2">
                <button class="btn u-btn-primary g-font-size-16 g-py-15 g-px-20" type="submit">
                  <i class="icon-magnifier g-pos-rel g-top-1"></i>
                </button>
              </div>
            </div>
            <small class="form-text g-opacity-0_8 g-font-size-default">Get your hot nuggz here!</small>
          </div>
        </form>
        <!-- End Search Form -->
      
          <div class="container" v-for="post in course.posts">  
            <article>
              <header class="g-mb-15">
                <h2 class="h4 g-mb-5">
                    <router-link class="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" :to="`/posts/${post.id}`">{{post.professor_name}} for {{post.course_name}}</router-link>
                </h2>
                <span class="g-color-primary">https://wrapbootstrap.com/theme/unify-responsive-website-template-WB0412697?ref=htmlstream</span>
              </header>
              <div>  
                <h4 class="h6 g-font-weight-700 g-mb-20">Listed Resources: </h4>
                  <div class="row u-has-disabled-v1 g-mb-30">
                    <div class="form-check g-mb-10 g-px-0">
                      <p v-for="resource in post.post_resources" class="g-mb-15">
                        <label class="u-check g-pl-25">  
                          <input class="g-hidden-xs-up g-pos-abs g-top-0 g-left-0" name="radGroup2_1" type="radio" checked="" disabled="">
                          <div class="u-check-icon-font g-absolute-centered--y g-left-0 g-rounded-50x">
                            <i class="fa" data-check-icon="" data-uncheck-icon=""></i>
                          </div>
                          {{resource.name}}
                        </label>
                      </p>
                    </div>
                  </div>
              </div>
              
                    


              <div class="d-lg-flex justify-content-between align-items-center">
                <!-- Search Info -->
                <ul class="list-inline g-mb-10 g-mb-0--lg">
                  <li class="list-inline-item g-mr-30">
                    <img class="g-height-25 g-width-25 rounded-circle g-mr-5" src="/assets/img-temp/100x100/img7.jpg" alt="Image Description"> <a class="u-link-v5 g-color-main g-color-primary--hover">{{post.user_info}}</a>
                  </li>
                  <li class="list-inline-item g-mr-30">
                    <i class="icon-calendar g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> Posted: 2 weeks ago
                  </li>
                  <li class="list-inline-item g-mr-30">
                    <i class="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 722,538
                  </li>
                </ul>
                <!-- End Search Info -->

              </div>
            </article>
            <!-- End Search Result -->

            <hr class="g-brd-gray-light-v4 g-my-40">

            <!-- Search Result -->
            <article>
              <header class="g-mb-15">
                <h2 class="h4 g-mb-5">
                    <a class="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Stream - Bootstrap 4 UI Kit Freebie</a>
                  </h2>
                <span class="g-color-primary">https://htmlstream.com/freebies/Stream-Bootstrap-4-UI-Kit</span>
              </header>

              <p class="g-mb-15">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellusimp imperdiet molestie
                est volutpat at, sed viverra cursus nibh.</p>

              <div class="d-lg-flex justify-content-between align-items-center">
                <ul class="list-inline g-mb-10 g-mb-0--lg">
                  <li class="list-inline-item g-mr-30">
                    <img class="g-height-25 g-width-25 rounded-circle g-mr-5" src="/assets/img-temp/100x100/img1.jpg" alt="Image Description"> <a class="u-link-v5 g-color-main g-color-primary--hover" href="#">Htmlstream</a>
                  </li>
                  <li class="list-inline-item g-mr-30">
                    <i class="icon-calendar g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 3 weeks ago
                  </li>
                  <li class="list-inline-item">
                    <i class="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 178,273
                  </li>
                </ul>

                <!-- Search Rating -->
                <div>
                  <span class="js-rating g-color-primary mr-2" data-rating="4"></span>
                  <span class="g-color-gray-dark-v5">Relevance 4.0 out of 2029 votes</span>
                </div>
                <!-- End Search Rating -->
              </div>
            </article>
            <!-- End Search Result -->

            <hr class="g-brd-gray-light-v4 g-my-40">

            <!-- Search Result -->
            <article>
              <header class="g-mb-15">
                <h2 class="h4 g-mb-5">
                    <a class="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Admin UI Kit - Free PSD &amp; Sketch</a>
                  </h2>
                <span class="g-color-primary">https://htmlstream.com/freebies/Admin-UI-Kit</span>
              </header>

              <p class="g-mb-15">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellusimp imperdiet molestie
                est volutpat at, sed viverra cursus nibh.</p>

              <div class="d-lg-flex justify-content-between align-items-center">
                <ul class="list-inline g-mb-10 g-mb-0--lg">
                  <li class="list-inline-item g-mr-30">
                    <img class="g-height-25 g-width-25 rounded-circle g-mr-5" src="/assets/img-temp/100x100/img5.jpg" alt="Image Description"> <a class="u-link-v5 g-color-main g-color-primary--hover" href="#">Sally Manning</a>
                  </li>
                  <li class="list-inline-item g-mr-30">
                    <i class="icon-calendar g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 4 weeks ago
                  </li>
                  <li class="list-inline-item">
                    <i class="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 132,849
                  </li>
                </ul>

                <!-- Search Rating -->
                <div>
                  <span class="js-rating g-color-primary mr-2" data-rating="4.5"></span>
                  <span class="g-color-gray-dark-v5">Relevance 4.5 out of 1029 votes</span>
                </div>
                <!-- End Search Rating -->
              </div>
            </article>
            <!-- End Search Result -->

            <hr class="g-brd-gray-light-v4 g-my-40">

            <!-- Search Result -->
            <article>
              <header class="g-mb-15">
                <h2 class="h4 g-mb-5">
                    <a class="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Dribbble Mockups - PSD Freebies For Themes</a>
                  </h2>
                <span class="g-color-primary">https://example.com/freebies/Dribbble-UI-Kit</span>
              </header>

              <p class="g-mb-15">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellusimp imperdiet molestie
                est volutpat at, sed viverra cursus nibh.</p>

              <div class="d-lg-flex justify-content-between align-items-center">
                <ul class="list-inline g-mb-10 g-mb-0--lg">
                  <li class="list-inline-item g-mr-30">
                    <img class="g-height-25 g-width-25 rounded-circle g-mr-5" src="/assets/img-temp/100x100/img17.jpg" alt="Image Description"> <a class="u-link-v5 g-color-main g-color-primary--hover" href="#">David Miller</a>
                  </li>
                  <li class="list-inline-item g-mr-30">
                    <i class="icon-calendar g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 1 month ago
                  </li>
                  <li class="list-inline-item">
                    <i class="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 201,032
                  </li>
                </ul>

                <!-- Search Rating -->
                <div>
                  <span class="js-rating g-color-gray-light-v2 mr-2" data-rating="0"></span>
                  <span class="g-color-gray-dark-v5">Unknown rating</span>
                </div>
                <!-- End Search Rating -->
              </div>
            </article>
            <!-- End Search Result -->

            <hr class="g-brd-gray-light-v4 g-my-40">

            <!-- Search Result -->
            <article>
              <header class="g-mb-15">
                <h2 class="h4 g-mb-5">
                    <a class="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Pixel UI Kit - Over 300 Sketch Layouts</a>
                  </h2>
                <span class="g-color-primary">https://pixeel.c.ukm/freebies/Pixel-UI-Kit</span>
              </header>

              <p class="g-mb-15">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores. Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellusimp imperdiet molestie
                est volutpat at, sed viverra cursus nibh.</p>

              <div class="d-lg-flex justify-content-between align-items-center">
                <ul class="list-inline g-mb-10 g-mb-0--lg">
                  <li class="list-inline-item g-mr-30">
                    <img class="g-height-25 g-width-25 rounded-circle g-mr-5" src="/assets/img-temp/100x100/img3.jpg" alt="Image Description"> <a class="u-link-v5 g-color-main g-color-primary--hover" href="#">Pixeel</a>
                  </li>
                  <li class="list-inline-item g-mr-30">
                    <i class="icon-calendar g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 2 months ago
                  </li>
                  <li class="list-inline-item">
                    <i class="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 442,371
                  </li>
                </ul>

                <!-- Search Rating -->
                <div>
                  <span class="js-rating g-color-primary mr-2" data-rating="5"></span>
                  <span class="g-color-gray-dark-v5">Relevance 5.0 out of 3849 votes</span>
                </div>
                <!-- End Search Rating -->
              </div>
            </article>
          </div>  
            <!-- End Search Result -->

            <hr class="g-brd-gray-light-v4 g-my-40">

            <!-- Pagination -->
            <nav class="g-mb-50" aria-label="Page Navigation">
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a class="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-13" href="#" aria-label="Previous">
                    <span aria-hidden="true">
                      <i class="fa fa-angle-left"></i>
                    </span>
                    <span class="sr-only">Previous</span>
                  </a>
                </li>
                <li class="list-inline-item g-hidden-sm-down">
                  <a class="u-pagination-v1__item u-pagination-v1-5 u-pagination-v1-5--active rounded g-pa-4-11" href="#">1</a>
                </li>
                <li class="list-inline-item g-hidden-sm-down">
                  <a class="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11" href="#">2</a>
                </li>
                <li class="list-inline-item g-hidden-sm-down">
                  <a class="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11" href="#">3</a>
                </li>
                <li class="list-inline-item g-hidden-sm-down">
                  <span class="g-pa-4-11">...</span>
                </li>
                <li class="list-inline-item g-hidden-sm-down">
                  <a class="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-11" href="#">80</a>
                </li>
                <li class="list-inline-item">
                  <a class="u-pagination-v1__item u-pagination-v1-5 rounded g-pa-4-13" href="#" aria-label="Next">
                    <span aria-hidden="true">
                      <i class="fa fa-angle-right"></i>
                    </span>
                    <span class="sr-only">Next</span>
                  </a>
                </li>
                <li class="list-inline-item float-right">
                  <span class="u-pagination-v1__item-info g-pa-4-11">Page 1 of 80</span>
                </li>
              </ul>
            </nav>
            <!-- End Pagination -->

            <h3 class="h5 g-color-gray-dark-v1 g-mb-20">Searches Related to Unify Template</h3>

            <!-- Tags -->
            <ul class="u-list-inline g-width-60x--md mb-0">
              <li class="list-inline-item g-mb-10">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Wrapbootstrap</a>
              </li>
              <li class="list-inline-item g-mb-10">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Web Design</a>
              </li>
              <li class="list-inline-item g-mb-10">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Best Responsive Bootstrap Template</a>
              </li>
              <li class="list-inline-item g-mb-10">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Thematic Pages</a>
              </li>
              <li class="list-inline-item g-mb-10">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Corporate &amp; Business Template</a>
              </li>
              <li class="list-inline-item g-mb-10">
                <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">SASS</a>
              </li>
            </ul>
            <!-- End Tags -->
          </div>
        </section>
      </div>
    </section>
  </div>  
</template>  
      


      
        
        
     
      <!-- 
      <div><router-link :to="`/courses/${course.id}/posts/new`">New Post</router-link> </div>
      
      <div v-for="post in course.posts">
        <p>{{post.user_info}}</p>
        <p>{{post.professor_name}}</p>
      
        <p>{{post.created_at}}</p>


        <div v-for="resource in post.post_resources">
          <p>{{resource.name}}</p>
        </div>

        <div>
          <router-link :to="`/posts/${post.id}`">Full Post</router-link> 
        </div>
      </div> -->
    
 

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      course: {},
      post: "", 
      post_resources: "",
      resource: "",
      resources: [], 
      resourceFilter: ""
    };
  },
  created: function() {
    axios.get("/api/courses/" + this.$route.params.id).then(response => {
      this.course = response.data;
    });
  },
  methods: {}
};
</script>