<template>
  <div class="curriculum">
    <div class="card-container">
      <h3>Wigan Coders Pathway</h3>
      <div class="card left">
        <h4>HTML</h4>
        <p>A 14 day course that will give you the skills to create your own Portfolio!</p>
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
        <button class=" btn green">Get Started</button>
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

.curriculum-span {
  font-weight: bold;
  padding: 5px;
}
</style>
