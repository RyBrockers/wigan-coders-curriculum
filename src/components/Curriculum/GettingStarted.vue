<template>
  <div class="getting-started">
    <div class="getting-started-container">
      <h3>Getting Started</h3>
      <div class="getting-started card">
        <h4>Setup</h4>
        <div class="getting-started-image">
        <img src="static/images/images.png" alt="computer-image">
        </div>
        <p class="getting-started-p">Here at Wigan Coders we require some small setup steps before we start.</p>
        <div class="getting-started-ul">
          <ul>
            <li>* For Mac users this process is a little easier. We use the Terminal. For Windows users this is the Command Prompt. If you are a Windows user, we recommend downloading <a href="https://gitforwindows.org/" target="blank">GitBash</a></li>
            <li>* Create a <a href="https://github.com" target="blank">GitHub</a> account. We use this software to save all our code we write and enable us to share it with eachother! Pretty cool right? Don't worry if you don't understand GitHub right now. We will go over this quite a lot during this course.</li>
            <li>* Set an <a href="https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account" target="blank">SSH KEY</a> to your GitHub account. This is so when we upload our code to GitHub, it knows who we are. Please be carefull with this step and follow this instructions form start to finish. Never attempt anything if you are unsure.</li>
            <li>* Install <a href="https://nodejs.org/en/" target="blank">Node.Js</a> and <a href="https://www.npmjs.com/" target="blank">NPM</a> package manager. <a href="https://nodejs.org/en/" target="blank">Node.Js</a> is a JavaScript runtime engine used with Chrome browsers. <a href="https://www.npmjs.com/" target="blank">NPM</a> is a package manager for installing dependantcies to our projects. Please follow the setip instructions carefully.</li>
            <li>* Install<span> Git</span> to your computer</li>
            <li>* Install a code editor. For this course we will use <a href="https://code.visualstudio.com/" target="blank">Visual Sudio Code</a></li>
            <li>* Finally we install <a href="https://eslint.org/docs/user-guide/getting-started" target="blank">es-lint</a></li>
          </ul>
          <router-link :to="{name: 'Setup'}" class="btn green">Setup your computer</router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'GettingStarted',
  data() {
    return {
user: null
    }
  }
}
</script>



<style scoped>
h3 {
  text-align: center;
    font-family: 'Montserrat', sans-serif;
color: #00a1d6;
font-size: 30px;
font-weight: bold;
margin-top: 40px;

}

li {
  padding: 10px;
}

.getting-started {
  padding: 10px;
}

.getting-started-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

.getting-started .card {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #e4e3e2;
  width: 80%;
  padding: 30px;

}

.getting-started-p {
  font-weight: bold;
}
</style>
