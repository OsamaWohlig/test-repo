<template>
<div class="flex h-[100vh] justify-center items-center">
  <div class="loader">

  <div class="cercle">
  </div>
  <div class="cercle">
  </div>
  <div class="cercle">
  </div>
  <div class="cercle">
  </div>
</div>

</div>
</template>

<script>
export default {
    mounted(){
        // Check if the URL contains a hash
        const url = window.location.href
        const hashIndex = url.indexOf('#');
        if (hashIndex === -1) {
            this.$router.push('/')
        }

        // Extract the substring after the hash
        const paramString = url.slice(hashIndex + 1);

        // Split parameters by "&" and create an object to store key-value pairs
        const paramsArray = paramString.split('&');
        const params = {};

        // Loop through the parameters and populate the object
        for (const param of paramsArray) {
            const [key, value] = param.split('=');
            params[key] = decodeURIComponent(value);
        }
        this.onSignIn(params.access_token)
    },
    methods:{
        async onSignIn(accessToken){
            const userData = await this.$axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${accessToken}`)
            this.$router.push('/')
        }
    }
}
</script>

<style>
.loader {
  position: absolute;
}

.cercle {
  position: absolute;
  background: #3f7ee8;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  top: -40px;
  left: -70px;
  animation: move-up6 .4s ease-in infinite alternate-reverse;
}

.cercle:nth-child(2) {
  width: 25px;
  height: 25px;
  top: -2px;
  left: -5px;
  background: #de4032;
  animation: move-down1 .4s ease-in infinite alternate-reverse;
}

.cercle:nth-child(3) {
  width: 30px;
  height: 30px;
  top: 35px;
  left: -7px;
  background: #eeb205;
  animation: move-updown1 .4s ease-in infinite alternate-reverse;
}

.cercle:nth-child(4) {
  width: 12px;
  height: 12px;
  top: -10px;
  left: 25px;
  background: #31aa52;
  animation: move-up6 .4s ease-in infinite alternate-reverse;
}

@keyframes move-up6 {
  to {
    transform: translateY(-5px);
  }
}

@keyframes move-down1 {
  to {
    transform: translateY(5px);
  }
}

@keyframes move-updown1 {
  to {
    transform: translateY(10px);
  }

  from {
    transform: translateY(-7px);
  }
}



</style>