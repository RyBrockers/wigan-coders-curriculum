<template>
  <div class="setup">
    <h2 class="setup-h2">Computer setup</h2>
    <div class="container">
      <div class="setup-div card">
        <div class="step-1">
          <h5>Step 1</h5>
          <ul>
            <li class="setup-li">
              For
              <span class="step-1-span">Mac</span> users we will be using the terminal. This is already installed on Mac devices. However there are some small changes we can make. We can change the shell from .bash to .zsh. Learn what this means and how to do this
              <a
                href="https://github.com/robbyrussell/oh-my-zsh/wiki/Installing-ZSH"
                target="blank"
              >HERE</a>
            </li>
            <div class="git-bash-div">
              <li class="setup-li">
                For
                <span class="step-1-span">Windows</span> users, we recommend using
                <a
                  href="https://gitforwindows.org/"
                  target="blank"
                >GitBash</a> . This is an emulator for the Windows Command Prompt that allow's us to use Mac commands.
              </li>
              <div class="logo-image">
                <img src="static/images/gwindows_logo.png" alt="git-bash-image" />
              </div>
            </div>
          </ul>
        </div>
      </div>

      <div class="setup-div card">
        <div class="step-2">
          <h5>Step 2</h5>
          <ul>
            <div class="git-bash-div">
              <div class="logo-image">
                <img src="static/images/github-octocat.png" alt="git-bash-image" />
              </div>
              <div>
                <li class="setup-li">
                  Next we will create a
                  <span class="step-1-span">GitHub</span> account. We use GitHub to keep track of our code and save it. We can share our code and collaberate with other dev's using GitHub. Find out more about GitHub and why we use it
                  <a
                    href="https://github.com"
                    target="blank"
                  >HERE</a>
                </li>
                <li>
                  Then we need to generate an
                  <a
                    href="https://help.github.com/en/enterprise/2.15/user/articles/adding-a-new-ssh-key-to-your-github-account"
                    target="blank"
                  >SSH KEY</a>
                  For
                  <span class="step-1-span">Mac</span> users follow the instruction below.
                </li>
                <ul class="ssh-ul">
                  <li>1. Open the Terminal</li>
                  <li>2. Enter  <span class="highlight-span"> al   ~/  .ssh</span> . This will search for any exsisting keys you may already have on your computer.</li>

                </ul>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Setup",
  date() {
    return {};
  }
};
</script>


<style>
.setup-h2 {
  text-align: center;
}

.setup-div {
  padding: 10px;
  margin-top: 30px;
}

.logo-image {
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.git-bash-div {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.step-1-span {
  font-weight: bold;
}

.setup-li {
  padding: 20px;
  margin-bottom: 10px;
}

.ssh-ul {
  margin-top: 20px;
}

.highlight-span {
background: #c7c7c7;
border-radius: 3px;
padding: 4px;
}
</style>

