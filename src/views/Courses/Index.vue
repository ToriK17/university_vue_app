<template>
  <div class="courses-index">
    
    <section class="dzsparallaxer auto-init height-is-based-on-content use-loading" data-options='{direction: "reverse", settings_mode_oneelement_max_offset: "150"}'>
      <!-- Parallax Image -->
      <div class="divimage dzsparallaxer--target w-100 g-bg-cover g-bg-white-gradient-opacity-v3--after" style="height: 140%; background-image: url(https://t3.ftcdn.net/jpg/02/59/37/82/240_F_259378203_S0yrc3fXqNhOUJyTfDWH2UIhYAwxLcbe.jpg);"></div>
      <!-- End Parallax Image -->

      <div class="container text-center g-py-100--md g-py-80">
        <h2 class="h1 text-uppercase g-font-weight-300 g-mb-30">Courses for University Of Nevada, Las Vegas</h2>

        <!-- Search Form -->

        <form class="g-width-60x--md mx-auto">
          <div class="form-group g-mb-20">
            <div class="input-group u-shadow-v21 rounded g-mb-15">
              <input v-model="courseFilter" class="form-control form-control-md g-brd-white g-font-size-16 border-right-0 pr-0 g-py-15" type="text" placeholder="Search for your Course">
              <div class="input-group-addon d-flex align-items-center g-bg-white g-brd-white g-color-gray-light-v1 g-pa-2">
                <button class="btn u-btn-primary g-font-size-16 g-py-15 g-px-20" type="submit">
                  <i class="icon-magnifier g-pos-rel g-top-1"></i>
                </button>
              </div>
            </div>
            <small class="form-text g-opacity-0_8 g-font-size-default">No need for a crystal ball when you have knugget!</small>
          </div>
        </form>
        <!-- End Search Form -->
      </div>


      <!-- <router-link v-bind:to="`/courses/${course.id}`">Posts for this Course</router-link> 
        </div>
      </div> -->

      <section class="g-pt-50 g-pb-90">
        <div class="container">
          <!-- Search Info -->
          <div class="d-md-flex justify-content-between g-mb-30">
            <h3 class="h6 text-uppercase g-mb-10 g-mb--lg">About <span class="g-color-gray-dark-v1">384,907</span> results</h3>
            
          </div>
          <!-- End Search Info -->

          <div class="row">
            <div class="col-lg-4 g-mb-30" v-for="course in filterBy(courses, courseFilter)">
              <!-- Search Result -->
              <article class="g-pa-25 u-shadow-v11 rounded">
                <h2 class="h4 g-mb-15">
                    <router-link class="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" v-bind:to="`/courses/${course.id}`">{{ course.name }}</router-link>
                  </h2>

                <!-- Search Info -->
                <ul class="list-inline d-flex justify-content-between g-mb-20">
                  <li class="list-inline-item g-mr-10">
                    <img class="g-height-25 g-width-25 rounded-circle g-mr-5" src="/assets/img-temp/100x100/img7.jpg" alt="Image Description"> {{ course.department }}
                  </li>
                  <li class="list-inline-item">
                    <i class="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> {{ course.num }}
                  </li>
                </ul>
                <!-- End Search Info -->

                <p class="g-mb-15">Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellusimp imperdiet molestie est volutpat at, sed viverra cursus nibh. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti quos dolores.</p>

                <!-- Search Rating -->
                

                <!-- Share, Print and More -->
                <ul class="list-inline mb-0">
                  <li class="list-inline-item g-mr-20">
                    <a class="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                      <i class="icon-share g-pos-rel g-top-1 g-mr-5"></i> Share
                    </a>
                  </li>
                  <li class="list-inline-item g-mr-20">
                    <a class="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                      <i class="icon-printer g-pos-rel g-top-1 g-mr-5"></i> Print
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <div class="dropdown g-mb-10 g-mb-0--md">
                      <span class="d-block g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="icon-arrow-down-circle g-pos-rel g-top-1"></i> More
                        </span>
                      <div class="dropdown-menu dropdown-menu-right rounded-0 g-mt-10">
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-directions g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Report
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-star g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Save
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-question g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Info
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-cloud-download g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Ger More Info
                        </a>

                        <div class="dropdown-divider"></div>

                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> View More
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- End Share, Print and More -->
              </article>
              <!-- End Search Result -->
            </div>

            <div class="col-lg-4 g-mb-30">
              <!-- Search Result -->
              <article class="g-pa-25 u-shadow-v11 rounded">
                <h2 class="h4 g-mb-15">
                    <a class="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Stream - Bootstrap 4 UI Kit Freebie</a>
                  </h2>

                <!-- Search Info -->
                <ul class="list-inline d-flex justify-content-between g-mb-20">
                  <li class="list-inline-item g-mr-20">
                    <img class="g-height-25 g-width-25 rounded-circle g-mr-5" src="/assets/img-temp/100x100/img14.jpg" alt="Image Description"> <a class="u-link-v5 g-color-main g-color-primary--hover" href="#">Htmlstream</a>
                  </li>
                  <li class="list-inline-item">
                    <i class="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 168,273
                  </li>
                </ul>
                <!-- End Search Info -->

                <p class="g-mb-15">Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellusimp imperdiet molestie est volutpat at, sed viverra cursus nibh. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti quos dolores.</p>

                <!-- Search Rating -->
                <div class="g-mb-15">
                  <span class="js-rating g-color-primary mr-2" data-rating="4"></span>
                  <span class="g-color-gray-dark-v5">Relevance 4.0 out of 2029 votes</span>
                </div>
                <!-- End Search Rating -->

                <!-- Share, Print and More -->
                <ul class="list-inline mb-0">
                  <li class="list-inline-item g-mr-20">
                    <a class="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                      <i class="icon-share g-pos-rel g-top-1 g-mr-5"></i> Share
                    </a>
                  </li>
                  <li class="list-inline-item g-mr-20">
                    <a class="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                      <i class="icon-printer g-pos-rel g-top-1 g-mr-5"></i> Print
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <div class="dropdown g-mb-10 g-mb-0--md">
                      <span class="d-block g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="icon-arrow-down-circle g-pos-rel g-top-1"></i> More
                        </span>
                      <div class="dropdown-menu dropdown-menu-right rounded-0 g-mt-10">
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-directions g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Report
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-star g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Save
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-question g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Info
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-cloud-download g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Ger More Info
                        </a>

                        <div class="dropdown-divider"></div>

                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> View More
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- End Share, Print and More -->
              </article>
              <!-- End Search Result -->
            </div>

            <div class="col-lg-4 g-mb-30">
              <!-- Search Result -->
              <article class="g-pa-25 u-shadow-v11 rounded">
                <h2 class="h4 g-mb-15">
                    <a class="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Admin UI Kit - Free PSD &amp; Sketch</a>
                  </h2>

                <!-- Search Info -->
                <ul class="list-inline d-flex justify-content-between g-mb-20">
                  <li class="list-inline-item g-mr-20">
                    <img class="g-height-25 g-width-25 rounded-circle g-mr-5" src="/assets/img-temp/100x100/img5.jpg" alt="Image Description"> <a class="u-link-v5 g-color-main g-color-primary--hover" href="#">Sally Manning</a>
                  </li>
                  <li class="list-inline-item">
                    <i class="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 132,849
                  </li>
                </ul>
                <!-- End Search Info -->

                <p class="g-mb-15">Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellusimp imperdiet molestie est volutpat at, sed viverra cursus nibh. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti quos dolores.</p>

                <!-- Search Rating -->
                <div class="g-mb-15">
                  <span class="js-rating g-color-primary mr-2" data-rating="4.5"></span>
                  <span class="g-color-gray-dark-v5">Relevance 4.5 out of 1393 votes</span>
                </div>
                <!-- End Search Rating -->

                <!-- Share, Print and More -->
                <ul class="list-inline mb-0">
                  <li class="list-inline-item g-mr-20">
                    <a class="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                      <i class="icon-share g-pos-rel g-top-1 g-mr-5"></i> Share
                    </a>
                  </li>
                  <li class="list-inline-item g-mr-20">
                    <a class="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                      <i class="icon-printer g-pos-rel g-top-1 g-mr-5"></i> Print
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <div class="dropdown g-mb-10 g-mb-0--md">
                      <span class="d-block g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="icon-arrow-down-circle g-pos-rel g-top-1"></i> More
                        </span>
                      <div class="dropdown-menu dropdown-menu-right rounded-0 g-mt-10">
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-directions g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Report
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-star g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Save
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-question g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Info
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-cloud-download g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Ger More Info
                        </a>

                        <div class="dropdown-divider"></div>

                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> View More
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- End Share, Print and More -->
              </article>
              <!-- End Search Result -->
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4 g-mb-30">
              <!-- Search Result -->
              <article class="g-pa-25 u-shadow-v11 rounded">
                <h2 class="h4 g-mb-15">
                    <a class="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Dribbble Mockups - PSD Freebies For Themes</a>
                  </h2>

                <!-- Search Info -->
                <ul class="list-inline d-flex justify-content-between g-mb-20">
                  <li class="list-inline-item g-mr-10">
                    <img class="g-height-25 g-width-25 rounded-circle g-mr-5" src="/assets/img-temp/100x100/img17.jpg" alt="Image Description"> <a class="u-link-v5 g-color-main g-color-primary--hover" href="#">David Miller</a>
                  </li>
                  <li class="list-inline-item">
                    <i class="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 201,032
                  </li>
                </ul>
                <!-- End Search Info -->

                <p class="g-mb-15">Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellusimp imperdiet molestie est volutpat at, sed viverra cursus nibh. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti quos dolores.</p>

                <!-- Search Rating -->
                <div class="g-mb-15">
                  <span class="js-rating g-color-gray-light-v2 mr-2" data-rating="0"></span>
                  <span class="g-color-gray-dark-v5"> Unknown rating</span>
                </div>
                <!-- End Search Rating -->

                <!-- Share, Print and More -->
                <ul class="list-inline mb-0">
                  <li class="list-inline-item g-mr-20">
                    <a class="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                      <i class="icon-share g-pos-rel g-top-1 g-mr-5"></i> Share
                    </a>
                  </li>
                  <li class="list-inline-item g-mr-20">
                    <a class="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                      <i class="icon-printer g-pos-rel g-top-1 g-mr-5"></i> Print
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <div class="dropdown g-mb-10 g-mb-0--md">
                      <span class="d-block g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="icon-arrow-down-circle g-pos-rel g-top-1"></i> More
                        </span>
                      <div class="dropdown-menu dropdown-menu-right rounded-0 g-mt-10">
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-directions g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Report
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-star g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Save
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-question g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Info
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-cloud-download g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Ger More Info
                        </a>

                        <div class="dropdown-divider"></div>

                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> View More
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- End Share, Print and More -->
              </article>
              <!-- End Search Result -->
            </div>

            <div class="col-lg-4 g-mb-30">
              <!-- Search Result -->
              <article class="g-pa-25 u-shadow-v11 rounded">
                <h2 class="h4 g-mb-15">
                    <a class="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover" href="#">Pixel UI Kit - Over 300 Sketch Layouts</a>
                  </h2>

                <!-- Search Info -->
                <ul class="list-inline d-flex justify-content-between g-mb-20">
                  <li class="list-inline-item g-mr-20">
                    <img class="g-height-25 g-width-25 rounded-circle g-mr-5" src="/assets/img-temp/100x100/img3.jpg" alt="Image Description"> <a class="u-link-v5 g-color-main g-color-primary--hover" href="#">Pixeel Ltd</a>
                  </li>
                  <li class="list-inline-item">
                    <i class="icon-eye g-pos-rel g-top-1 g-color-gray-dark-v5 g-mr-5"></i> 442,371
                  </li>
                </ul>
                <!-- End Search Info -->

                <p class="g-mb-15">Nullam elementum tincidunt massa, a pulvinar leo ultricies ut. Ut fringilla lectus tellusimp imperdiet molestie est volutpat at, sed viverra cursus nibh. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                  voluptatum deleniti atque corrupti quos dolores.</p>

                <!-- Search Rating -->
                <div class="g-mb-15">
                  <span class="js-rating g-color-primary mr-2" data-rating="4"></span>
                  <span class="g-color-gray-dark-v5">Relevance 4.0 out of 2029 votes</span>
                </div>
                <!-- End Search Rating -->

                <!-- Share, Print and More -->
                <ul class="list-inline mb-0">
                  <li class="list-inline-item g-mr-20">
                    <a class="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                      <i class="icon-share g-pos-rel g-top-1 g-mr-5"></i> Share
                    </a>
                  </li>
                  <li class="list-inline-item g-mr-20">
                    <a class="u-link-v5 g-color-gray-dark-v5 g-color-primary--hover" href="#">
                      <i class="icon-printer g-pos-rel g-top-1 g-mr-5"></i> Print
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <div class="dropdown g-mb-10 g-mb-0--md">
                      <span class="d-block g-color-gray-dark-v5 g-color-primary--hover g-cursor-pointer" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <i class="icon-arrow-down-circle g-pos-rel g-top-1"></i> More
                        </span>
                      <div class="dropdown-menu dropdown-menu-right rounded-0 g-mt-10">
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-directions g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Report
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-star g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Save
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-question g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Info
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-cloud-download g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> Ger More Info
                        </a>

                        <div class="dropdown-divider"></div>

                        <a class="dropdown-item g-px-10" href="#">
                          <i class="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"></i> View More
                        </a>
                      </div>
                    </div>
                  </li>
                </ul>
                <!-- End Share, Print and More -->
              </article>
              <!-- End Search Result -->
            </div>
          </div>






          <hr class="g-brd-gray-light-v4 g-mt-10 g-mb-40">

          <!-- Pagination -->
          <!-- currently non working feature, add in the future -->
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

          <h3 class="h5 g-color-gray-dark-v1 g-mb-20">Searches Course Department</h3>

          <!-- Tags -->
          <ul class="u-list-inline g-width-60x--md mb-0">
            <li class="list-inline-item g-mb-10">
              <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">English</a>
            </li>
            <li class="list-inline-item g-mb-10">
              <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Mathematics</a>
            </li>
            <li class="list-inline-item g-mb-10">
              <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Biology</a>
            </li>
            <li class="list-inline-item g-mb-10">
              <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Civics</a>
            </li>
            <li class="list-inline-item g-mb-10">
              <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Physics</a>
            </li>
            <li class="list-inline-item g-mb-10">
              <a class="u-tags-v1 g-color-main g-brd-around g-brd-gray-light-v3 g-bg-gray-dark-v2--hover g-brd-gray-dark-v2--hover g-color-white--hover rounded g-py-4 g-px-10" href="#">Chemistry</a>
            </li>
          </ul>
          <!-- End Tags -->
        </div>
      </section>
    </section>




      <!-- <h1>Courses for University Of Nevada, Las Vegas </h1> -->
      <!-- Search: <input type="text" v-model="courseFilter">   --> 
  

      <!-- <div v-for="course in filterBy(courses, courseFilter)">
        <p>Course Name: {{ course.name }}</p>
        <p>Department: {{ course.department }}</p>
        <p>Course Number: {{ course.num }}</p>
        <div>
          <router-link v-bind:to="`/courses/${course.id}`">Posts for this Course</router-link> 
        </div>
      </div> -->
    </div>
  </div>  
</template>

<script>
import axios from "axios";
import Vue2Filters from "vue2-filters";

export default {
  mixins: [Vue2Filters.mixin],
  data: function() {
    return {
      courses: [], 
      courseFilter: ""
    };
  },
  created: function() {
    axios.get("/api/courses").then(response => {
      this.courses = response.data;
    });
  },
  methods: {}
};
</script>