<template>
  <div class="home">
    <h1 class="home-h1">Have a look at what we have been up to.</h1>
    <div class="home-container">
      <div class="card center">
        <h2 class="up-h2">Get up and going!</h2>
        <p
          class="up-p"
        >We have some great resources you can use to get Up and Going straight away and start to learn how to code today.</p>
        <div class="home-card-content">
          <div class="free-courses">
            <div class="card blue-grey udemy">
              <h2 class="udemy-h2">Udemy</h2>
              <p>A great free resource that also has a premium section. There are some very high quality free courses on Udemy. For HTML, CSS, JAVASCRIPT and much more. The site usually has huge discounts on paid courses.</p>
              <a
                class="btn green code-academy-btn"
                href="https://www.udemy.com/"
                target="blank"
              >Learn More</a>
            </div>
            <div class="card blue-grey free-code-camp">
              <h2 class="free-code-camp-h2">Free-Code-Camp</h2>
              <p>Free-Code-Camp is completely free and has some really good projects you can get up and going with straight away. They even award you with certification. Get started today!</p>
              <a
                class="btn green code-academy-btn"
                href="https://www.freecodecamp.org/"
                target="blank"
              >Learn More</a>
            </div>
            <div class="card blue-grey code-academy">
              <h2 class="code-academy-h2">Code-Academy</h2>
              <p>Code Academy is a fantastic resource that also has a premium section. It has a very unique way of teaching and we highly recommend checking out their free HTML, CSS and JAVASCRIPT courses</p>
              <a
                class="btn green code-academy-btn"
                href="https://www.codecademy.com/"
                target="blank"
              >Learn More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card rec-reading">
      <h2 class="rec-h2">Recommended Reading</h2>
      <div class="rec-container">
        <img class="reading-logo" src="static/images/reading-image.png" alt="recommended-reading" />
      </div>

      <div class="reading-div">
        <div class="reading">
          <img src="static/images/css3.jpeg" alt="recommended-reading" />
        </div>
        <div class="reading">
          <img src="static/images/html5.jpg" alt="recommended-reading" />
        </div>
        <div class="reading">
          <img src="static/images/eloquent.jpg" alt="recommended-reading" />
        </div>
        <div class="reading">
          <img src="static/images/upandgoing.jpg" alt="recommended-reading" />
        </div>
      </div>
      <div class="reading-text">
        <p>
          These are just a few E-Books we recommend to get you sarted.
          <br />There are many free online sources for free Coding E-Book reading.
          <br />We have listed just a few below
        </p>
        <ul class="reading-ul">
          <a
            href="https://play.google.com/store/apps/details?id=com.knightcoder.programmingebooks&hl=en_GB"
            target="blank"
          >
            <li>Google Play Books</li>
          </a>
          <a href="https://www.oreilly.com/programming/free/" target="blank">
            <li>Oreilly</li>
          </a>
          <a href="https://www.programming-book.com/" target="blank">
            <li>Programming-Book</li>
          </a>
        </ul>
      </div>
      <div class="reading-text-2">
        <p>
          <span class="ebook-span">GitHub</span> is also a great place for free E-Books. We will use GitHub heavily throughout this course
        </p>
        <a
          href="https://github.com/EbookFoundation/free-programming-books/blob/master/free-programming-books.md"
          target="blank"
        >
          <img src="static/images/github-octocat co.png" class="git-icon" alt="github-svg" />
        </a>
      </div>
    </div>
    <div class="card podcasts">
      <div class="podcast-wrapper">
      </div>

      <div class="card podcast-text">
        <div class="podcast-p-div">
                  <h2 class="podcast-h2">Podcasts</h2>
        <img src="static/images/podcast-icon.png" class="pod-img" alt />
  <p class="podcast-p">
          If Podcasts are your thing, then we can recommend a few of those as well.
          <br />Podcasts can be great for inspiration and that little help you may seek on your journey into Coding.
          <br />Check out some our recommendations and get started today.
        </p>
        </div>
        <div class="podcast-div">
            <a href="https://learntocodewith.me/podcast/" target="blank">
              <h2>Learn To Code With Me Podcast</h2>
            </a>
            <p
              class="podcast-p"
            >A fantastic place to hear stories of other people learning how to code. Some with full time jobs and small families.</p>
            <a href="https://www.codenewbie.org/podcast/" target="blank">
              <h2>CodeNewbie</h2>
            </a>
            <p
              class="podcast-p"
            >Exactly as it says on the tin. A place for people who are new to the coding community and want to know more.</p>
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
  padding: 10px;
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
  padding: 10px;
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
  padding: 10px;
}

.the-feed {
  margin-left: 26px;
}

.btn {
  margin-top: 30px;
}

.home-container {
  width: auto;
  height: auto;
}

.up-p {
  padding: 10px;
  margin-bottom: 20px;
}

.rec-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.rec-h2 {
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  padding: 10px;
}

.reading-img {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.reading {
  padding: 10px;
}

.reading-logo {
  padding: 10px;
  margin-bottom: 30px;
}

.rec-reading {
  background: #d9e7ec;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
}

.reading-div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.reading-text {
  text-align: center;
  margin-top: 40px;
}

.reading-ul {
  margin-top: 50px;
  margin-bottom: 30px;
}

.ebook-span {
  font-weight: bold;
}

.reading-text-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.git-icon {
  margin-top: 30px;
}

.podcast-content {
  text-align: center;
  margin-right: 50px;
}

.podcasts {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.pod-header {
  text-align: center;
}

.podcast-ul {
  margin-top: 10px;
}

.podcast-p {
  text-align: center;
  padding: 20px;

}

.podcast-p-div {
  text-align: center;
  padding: 10px;
}

.podcast-h2 {
  font-weight: bold;
  padding: 10px;
  font-size: 30px;
  margin-bottom: 15px;
}

/* .pod-wrapper h2 {
  text-align: center;
  margin-top: 100px;
  font-weight: bold;
  font-size: 20px;
} */

.pod-img {
  text-align: center;
  margin-bottom: 10px;
}

.podcast-div h2 {
  text-align: center;
}


</style>
