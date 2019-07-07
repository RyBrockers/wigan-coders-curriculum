<template>
  <div class="setup">
    <h2 class="setup-h2">Computer setup</h2>
    <div class="container">
      <div class="setup-div card">
        <div class="step-1">
          <h5>Step 1</h5>
          <ul>
             <div class="logo-image">
                <img src="static/images/gwindows_logo.png" alt="git-bash-image" />
              </div>
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

            </div>
          </ul>
        </div>
      </div>

      <!-- <div class="setup-div card">
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
                  <li>
                    2. Enter
                    <span class="highlight-span">ls al ~/ .ssh</span> . This will search for any exsisting keys you may already have on your computer.
                  </li>
                </ul>
              </div>
            </div>
          </ul>
          <div class="ssh-image-div">
            <img
              src="static/images/Screenshot 2019-07-07 at 20.49.38 copy.png"
              alt="mac-terminal-image"
              class="ssh-image"
            />
          </div>

        </div>
          <div class="new-ssh">
            <ul class="ssh-ul">
              <h6>To generate a new SSH KEY</h6>
              <p>Paste the text below, substituting in your email address. the email address you use with GitHub</p>
              <li>
                3.
                <span class="highlight-span">ssh-keygen -t rsa -b 4096 -C "your_email@example.com"</span>
              </li>
            </ul>
          </div>
      </div> -->
           <div class="setup-div card">
        <div class="step-1">
          <h5>Step 2</h5>

          <ul>
                <img src="static/images/github-octocat.png" alt="git-bash-image" class="github-image"/>

            <li class="setup-li">

                  Next we will create a
                  <span class="step-1-span">GitHub</span> account. We use GitHub to keep track of our code and save it. We can share our code and collaberate with other dev's using GitHub. Find out more about GitHub and why we use it
                  <a
                    href="https://github.com"
                    target="blank"
                  >HERE</a>
                </li>
            <div class="git-bash-div">
          <h6>To generate a new SSH KEY</h6>
              <p>Paste the text below, substituting in your email address. the email address you use with GitHub</p>
              <li>
                3.
                <span class="highlight-span">ssh-keygen -t rsa -b 4096 -C "your_email@example.com"</span>
              </li>
              <div class="logo-image">
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
  flex-direction: column;
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

.ssh-image-div {
  width: auto;
  padding: 5px;
  max-width: -webkit-fill-available;

}

.ssh-image-div img {
  padding: 20px;
}

.step-1 {
  text-align: center;
}
</style>

