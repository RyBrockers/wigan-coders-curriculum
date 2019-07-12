<template>
  <div class="home">
      <h1 class="home-h1">Have a look at what we have been up to.</h1>
    <div class="container">
      <div class="card center">
        <h3 class="home-h3">As seen on Instagram!</h3>


        </div>
      </div>
      <footer>
          <div class="card insta-div">
   <vue-instagram token="16190182252.1677ed0.c5289a2dab244b999103af2d61878af1" username="Wigancoding" :count="3">
    <template slot="feeds" scope="props">
        <img :src=" props.feed.images.thumbnail.url " alt="" class="feed-image">
    </template>
    <template slot="error" scope="props">
        <div class="fancy-alert"> {{ props.error.error_message }} </div>
    </template>
</vue-instagram>
        </div>
</footer>
    </div>

</template>


<script>
import VueInstagram from 'vue-instagram'


export default {
  name: 'Home',

  components: {
    VueInstagram
  },


  data() {
    return {

    }
  }
}


</script>



<style>
h4 {
  text-align: center;
}

.home {
  font-size: 40px;

}

.home-h1 {
  margin-bottom: 30px;
  margin-top: 30px;
  text-align: center;
}

.insta-div {
  padding: 20px;
}

.card  {
margin-top: 30px;
}

.feed-image {
  padding: 5px;
}
</style>
