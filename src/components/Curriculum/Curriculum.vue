<template>
  <div class="curriculum">
    <div class="card-container">
      <h3 class="curriculum-h3">Wigan Coders Pathway</h3>
      <div class="card left">
        <h4 class="curr-h4">HTML</h4>
        <p class="info-p">A 14 day course that will give you the skills to create your own Portfolio!</p>
        <ul>
          <p><span class="curriculum-span blue-grey lighten-4">Week 1</span></p>
          <li>* Start at the begining. Learn the history of HTML and understand it's importance.</li>
          <li>* Learn how to create a HTML document and understand it's Structure.</li>
          <li>* Learn fundamental HTML elements and how to code them.</li>
          <li>* Learn Symantics, what it means and why it's good practice.</li>
          <li>* Complete your first "Hello World!" HTML document.</li>

        </ul>

         <ul>
          <p><span class="curriculum-span blue-grey lighten-4">Week 2</span></p>
          <li>* Learn how to create "Forms" in HTML.</li>
          <li>* Learn how to create "Lists" in HTML.</li>
          <li>* Learn how to create "Tables" in HTML</li>
          <li>* Intoduction to CSS.</li>
          <li>* Complete your first "Portfolio" HTML document.</li>

        </ul>
        <button class=" btn green darken-2">Get Started</button>
      </div>
      <div class="card left">
        <h4 class="curr-h4">CSS3</h4>
        <p class="info-p">A 7 day course that will give you the skills to create your own Landing Page!</p>
        <ul>
          <p><span class="curriculum-span blue-grey lighten-4">Stage 1</span></p>
          <li>* Start at the begining. Learn the history of CSS and understand it's importance and purpose.</li>
          <li>* Learn how to create a CSS stylesheet and understand it's Structure.</li>
          <li>* Learn fundamental CSS selectors and how to code them.</li>
          <li>* Learn the use cases of these selectors.</li>
          <li>* Complete your first "Hello World!" HTML/CSS document.</li>

        </ul>

         <ul>
          <p><span class="curriculum-span blue-grey lighten-4">Stage 2</span></p>
          <li>* Learn about FlexBox.</li>
          <li>* Complete FlexBox Froggy.</li>
          <li>* Learn about positioning elements</li>
          <li>* Learn simple CSS animations</li>
          <li>* Complete your first "Portfolio" HTML/CSS document.</li>

        </ul>
        <button class=" btn green darken-2">Get Started</button>
      </div>
    </div>


  </div>
</template>


<script>
export default {
  name: 'Curriculum',
  data() {
    return {

    }
  }
}
</script>



<style scoped>
h4 {
  text-align: center;
}

.card {
  padding: 10px;
  margin-top: 60px;
  padding: 20px;
  background: #d9e7ec;
  width: 50%;
  font-size: 18px;

}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

li {
  padding: 10px;
}

p  {
  font-weight: bold;
  padding: 10px;
  margin-bottom: 30px;
}

p span {
  padding: 5px;
}

.curriculum-h3 {
  text-align: center;
  font-family: 'Montserrat', sans-serif;
color: #00a1d6;
font-size: 30px;
font-weight: bold;
margin-top: 40px;
}

.info-p {
  padding: 20px;
  font-weight: bold;
  margin-bottom: 40px;
}

.curr-h4 {
  font-weight: bold;
  font-size: 25px;
}
</style>
