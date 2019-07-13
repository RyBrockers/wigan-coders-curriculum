<template>
  <div class="home">
    <h1 class="home-h1">Have a look at what we have been up to.</h1>
    <div class="home-container">
      <div class="card center">
        <h2 class="up-h2">Get up and going!</h2>
         <p class="up-p">We have some great resources you can use to get Up and Going straight away and start to learn how to code today.</p>
        <div class="home-card-content">

          <div class="free-courses">
            <div class="card blue-grey udemy">
              <h2 class="udemy-h2">Udemy</h2>
              <p>A great free resource that also has a premium section. There are some very high quality free courses on Udemy. For HTML, CSS, JAVASCRIPT and much more</p>
              <a class="btn green code-academy-btn">Learn More</a>
            </div>
            <div class="card blue-grey free-code-camp">
              <h2 class="free-code-camp-h2">Free-Code-Camp</h2>
              <p>A great free resource that also has a premium section. There are some very high quality free courses on Udemy. For HTML, CSS, JAVASCRIPT and much more</p>
              <a class="btn green code-academy-btn">Learn More</a>
            </div>
            <div class="card blue-grey code-academy">
              <h2 class="code-academy-h2">Code-Academy</h2>
              <p>A great free resource that also has a premium section. There are some very high quality free courses on Udemy. For HTML, CSS, JAVASCRIPT and much more</p>
              <a class="btn green code-academy-btn">Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
        <div class="rec-reading">
      <div class="rec-reading-container">
        <div class="card rec-reading">
          <img src="static/images/reading-image.png" alt="recommended-reading">
          <h2>Take a look at our recommended reading</h2>
          <div class="ueloquent">
            <h2>Eloquent</h2>
            <img src="static/images/upandgoing.jpg" alt="ebooks">
            </div>

             <div class="upandgoing">
            <h2>Up and Going</h2>
            <img src="static/images/eloquentjs.jpg" alt="ebooks">
            <p>A fantastic Ebook to learn JavaScript</p>
            </div>
        </div>
      </div>
    </div>



    <div class="card insta-div">
      <h3 class="home-h3">As seen on Instagram!</h3>

      <vue-instagram
        token="16190182252.1677ed0.c5289a2dab244b999103af2d61878af1"
        class="the-feed"
        username="Wigancoding"
        :count="4"
      >
        <template slot="feeds" scope="props">
          <img :src=" props.feed.images.thumbnail.url " alt class="feed-image" />
        </template>
        <template slot="error" scope="props">
          <div class="fancy-alert">{{ props.error.error_message }}</div>
        </template>
      </vue-instagram>
    </div>

  </div>
</template>


<script>
import VueInstagram from "vue-instagram";

export default {
  name: "Home",

  components: {
    VueInstagram
  },

  data() {
    return {};
  }
};
</script>



<style>
h4 {
  text-align: center;
}

.home-h1 {
  margin-bottom: 30px;
  margin-top: 30px;
  text-align: center;
  font-size: 25px;
}

.insta-div {
  padding: 20px;
}

.card {
  margin-top: 30px;
  padding: 15px;
}

.feed-image {
  padding: 5px;
}

.insta-div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.up-h2 {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: #00a1d6;
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
}

.free-courses {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 90%;
  margin-left: 15px;
}

.home-card-content {
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.udemy {
  width: 33%;
  border-radius: 10px;
  color: #fff;
  padding: 10px;
  margin: 5px;
}

.udemy-h2 {
  color: #d60004;
  font-weight: bold;
}
.free-code-camp {
  width: 33%;
  border-radius: 10px;
  color: #fff;
  padding: 10px;
  margin: 5px;
}

.free-code-camp-h2 {
  color: #34a249;
  font-weight: bold;
}
.code-academy {
  width: 33%;
  border-radius: 10px;
  color: #fff;
  padding: 10px;
  margin: 5px;
}

.code-academy-h2 {
  color: #000;
  font-weight: bold;
}

.the-feed {
  margin-left: 26px;
}

.btn {
  margin-top: 50px;
}

.home-container {
  width: auto;
  height: auto;
}

.up-p {
padding: 10px;
margin-bottom: 20px;
}

.rec-reading-container {
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
text-align: center;
}

.card.rec-reading {
    justify-content: center;
align-items: center;
flex-direction: row;
text-align: center;
}

.re-reading {
  justify-content: center;
align-items: center;
flex-direction: row;
text-align: center;
}
</style>
