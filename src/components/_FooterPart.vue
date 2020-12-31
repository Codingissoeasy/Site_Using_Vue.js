<template>
  <div>
    <!-- Footer -->
    <div class="w3-padding-16 w3-border-top w3-white" style="margin-top: 2px">
      <div class="w3-cell-row">
        <!---------------------------------------First Division--------------------------------------->
        <div class="w3-container w3-cell">
          <center style="margin-top: 45px; margin-bottom: 16px">
            <img
              class="mb-2"
              src="static/img/icon/icon.png"
              alt=""
              width="39"
              height="39"
            />
            <h6>
              {{ params.blog_name }}
            </h6>

            <small class="d-block mb-3 text-muted"> © 2020 </small>
          </center>
          <center>
            <a
              href="https://www.facebook.com/sunilpvr98"
              class="w3-button w3-circle w3-white w3-hover-blue"
              style="padding-left: 12px; padding-right: 12px"
            >
              <i class="fa fa-facebook"></i>
            </a>
            <a
              href="mailto:codingissoeasy"
              class="w3-button w3-circle w3-white w3-hover-red"
              style="padding-left: 9px; padding-right: 9px"
            >
              <i class="fa fa-envelope"></i>
            </a>
            <a
              href="https://wa.me/919265929051"
              class="w3-button w3-circle w3-white w3-hover-green"
              style="padding-left: 9px; padding-right: 9px"
            >
              <i class="fa fa-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/sunil_98_"
              class="w3-button w3-circle w3-white w3-hover-red"
              style="padding-left: 9px; padding-right: 9px"
            >
              <i class="fa fa-instagram"></i>
            </a>
            <a
              href="#"
              class="w3-button w3-circle w3-white w3-hover-blue"
              style="padding-left: 9px; padding-right: 9px"
            >
              <i class="fa fa-twitter"></i>
            </a>
          </center>
        </div>

        <!-----------------------------------Sec. Division----------------------------------->

        <div class="w3-container w3-cell w3-hide-small w3-hide-medium">
          <h5 style="margin-left: 10px"><b>Web Devlopment</b></h5>
          <!-- <ul class="list-unstyled text-small" style="font-family: sans-serif; "> -->
          <ul
            class="w3-ul w3-border-0 text-small"
            style="font-family: sans-serif"
          >
            <li class="w3-border-0">
              <a class="w3-button" href="/c-language" style="padding: 2px">
                C Programming
              </a>
            </li>
            <li class="w3-border-0" style="margin-top: -10px">
              <a class="w3-button" href="/language" style="padding: 2px">
                C++ Language
              </a>
            </li>
            <li class="w3-border-0" style="margin-top: -10px">
              <a class="w3-button" href="/python" style="padding: 2px"
                >Python</a
              >
            </li>
            <li class="w3-border-0" style="margin-top: -10px">
              <a class="w3-button" href="/machine-learning" style="padding: 2px"
                >Machine Learning</a
              >
            </li>
            <li class="w3-border-0" style="margin-top: -10px">
              <a class="w3-button" href="/java" style="padding: 2px">JAVA</a>
            </li>
            <!-- <li class="w3-border-0" style="margin-top : -10px;"><a class="w3-button " href="#"></a></li> -->
          </ul>
        </div>

        <!---------------------------------Third Division--------------------------------->

        <div class="w3-container w3-cell w3-hide-small w3-hide-medium">
          <h5><b>Web Design</b></h5>
          <ul
            class="w3-ul w3-border-0 text-small"
            style="font-family: sans-serif"
          >
            <li class="w3-border-0" style="margin-top: -10px">
              <a class="w3-button" style="padding: 2px" href="/html">HTML</a>
            </li>
            <li class="w3-border-0" style="margin-top: -10px">
              <a class="w3-button" style="padding: 2px" href="/css">CSS</a>
            </li>
            <li class="w3-border-0" style="margin-top: -10px">
              <a class="w3-button" style="padding: 2px" href="/js"
                >JavaScript</a
              >
            </li>
            <li class="w3-border-0" style="margin-top: -10px">
              <a class="w3-button" style="padding: 2px" href="/bt4"
                >Bootstrap</a
              >
            </li>
            <li class="w3-border-0" style="margin-top: -10px">
              <a class="w3-button" style="padding: 2px" href="#"></a>
            </li>
            <li class="w3-border-0" style="margin-top: -10px">
              <a class="w3-button" style="padding: 2px" href="#"></a>
            </li>
            <li class="w3-border-0" style="margin-top: -10px">
              <a class="w3-button" style="padding: 2px" href="#"></a>
            </li>
          </ul>
        </div>

        <!---------------------------------Fourth Division--------------------------------->

        <div class="w3-container w3-cell">
          <h5 class="w3-margin-left"><b> Menu</b></h5>
          <ul
            class="w3-ul w3-border-0 text-small"
            style="font-family: sans-serif"
          >
            <li class="w3-border-0" style="margin-top: -10px">
              <a class="w3-button" style="padding: 2px" href="/">Home</a>
            </li>
            <li class="w3-border-0" style="margin-top: -10px">
              <a class="w3-button" style="padding: 2px" href="/language"
                >Language</a
              >
            </li>
            <li class="w3-border-0" style="margin-top: -10px">
              <a class="w3-button" style="padding: 2px" href="/comp-prog"
                >Compititive Programming</a
              >
            </li>
            <li class="w3-border-0" style="margin-top: -10px">
              <a class="w3-button" style="padding: 2px" href="/contect"
                >Contact Us</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- Footer -->
  </div>
</template>

<script>
export default {
  name: "_FooterPart",
};
</script>