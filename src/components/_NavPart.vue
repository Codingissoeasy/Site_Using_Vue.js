<template>
    <div>
          <div>
        <div class="w3-top">
        <div class="w3-bar w3-white w3-wide w3-padding w3-card" id="myNavbar">
            <a href="/" class="w3-bar-item w3-button " style="letter-spacing: 3px; padding-left: 10px;">
                <i class="fa fa-user-lock"></i>
                <img src="/static/img/icon/icon.png" style="width: 35px;height: auto;padding-right: 2px;">
                {{blogname}}
            </a>
            <!-- Float links to the right. Hide them on small screens -->
            <div class="w3-right w3-right" style="letter-spacing: normal;">
                <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right"
                    href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
                    <i class="fa fa-bars"></i>
                </a>
                <a href="/" class="w3-bar-item w3-button w3-hide-small">Home</a>
                <a href="/language" class="w3-bar-item w3-button w3-hide-small">Language's</a>
                <a href="/comp-prog" class="w3-bar-item w3-button w3-hide-small">Compititive-Programming</a>
                <a href="/contect" class="w3-bar-item w3-button w3-hide-small">Contect US</a>

            </div>
            <!--For small screen-->
            <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium"
                style="letter-spacing: normal; font-size: small;">
                <a href="/" class="w3-bar-item w3-button" onclick="toggleFunction()">Home</a>
                <a href="/language" class="w3-bar-item w3-button" onclick="toggleFunction()">Language</a>
                <a href="/comp-prog" class="w3-bar-item w3-button"
                    onclick="toggleFunction()">Compititive-Programming</a>
                <a href="/contact" class="w3-bar-item w3-button" onclick="toggleFunction()">Contect US</a>
            </div>
        </div>
    </div>
  </div>
    </div>
</template>

<script>
export default {
    name:'_NavPart',
    data(){
        return({
            blogname:'Coding is so easy'
        })
    }
}
</script>