<template>
  <div class="setup">
    <h2 class="setup-h2">Computer setup</h2>
    <div class="container-setup">
      <div class="setup-div card">
        <div class="step-1">
          <h4 class="step-h4">Step 1</h4>
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

      <div class="setup-div card">
        <div class="step-1">
          <h4 class="step-h4">Step 2</h4>
          <ul>
            <img
              src="static/images/github-octocat co.png"
              alt="git-bash-image"
              class="github-image"
            />
            <li class="setup-li">
              Next we will create a
              <span class="step-1-span"><a href="https://github.com/" target="blank">GitHub</a></span> account. We use GitHub to keep track of our code and save it. We can share our code and collaberate with other dev's using GitHub. Find out more about GitHub and why we use it
              <a
                href="https://careerfoundry.com/en/blog/web-development/what-do-developers-use-github-for-heres-why-its-vital/"
                target="blank"
              >HERE</a>
            </li>
            <div class="git-bash-div">
              <h5>To generate a new SSH KEY</h5>
              <p>Paste the text below, substituting in your email address. the email address you use with GitHub</p>
              <li>
                <span class="highlight-span">ssh-keygen -t rsa -b 4096 -C "your_email@example.com"</span>
              </li>
              <p>Then your are prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.</p>
              <li>
                <span
                  class="highlight-span"
                >Enter a file in which to save the key (/Users/you/.ssh/id_rsa): [Press enter]</span>
              </li>
              <p>Then at the prompt, enter a passphrase or press Enter twice to skip this step</p>
              <li>
                <span class="highlight-span">
                  Enter passphrase (empty for no passphrase): [Type a passphrase]
                  <br />Enter same passphrase again: [Type passphrase again]
                </span>
              </li>
              <p>Add your private SSH key to the agent.</p>
              <li>
                <span class="highlight-span">ssh-add -K ~/.ssh/id_rsa</span>
              </li>
              <div class="ssh-key-link">
                <a
                  href="https://help.github.com/en/articles/adding-a-new-ssh-key-to-your-github-account"
                >
                  <h6>Add the SSH key to your GitHub account</h6>
                </a>
              </div>
            </div>
          </ul>
        </div>
      </div>

      <div class="setup-div card">
        <div class="step-1">
          <h4 class="step-h4">Step 3</h4>
          <ul>
            <img src="static/images/vscode-icon.png" alt="vscode-image" class="vscode-image" />
            <li class="setup-li">
              Next we will download and install
              <span class="step-1-span">VSCode</span> to our computers.
              <span class="step-1-span">Visual Studio Code</span> is a program developed by Microsoft. It is also known as a Text-Editor. There are many of these programs/text-editors and most of them are completely free to download and start using. Throughout this course we will use VSCode over the other editors as we feel it has many addon's and plugins for certain computer languages that will help us write them. And also recognise the syntax used.
            </li>

            <li>
              <a href="https://code.visualstudio.com/" target="blank">GET STARTED WITH VISUAL STUDIO CODE</a>
            </li>
            <P class="vscode-p">Once installed. When ou run the software, it should look like this</P>
            <img src="static/images/Screenshot-vscode.png" alt="">
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
.setup {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.setup-h2 {
  text-align: center;
  font-family: "Montserrat", sans-serif;
  color: #00a1d6;
  font-size: 30px;
  font-weight: bold;
  margin-top: 40px;
}

.setup-div {
  padding: 10px;
  margin-top: 30px;
  background: #d9e7ec;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 15px;
}

.ssh-key-link {
  padding: 40px;
}

.step-h4 {
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
  margin-bottom: 20px;
}

.container-setup {
  width: 72%;
}

.vscode-p {
  padding: 10px;
  margin-top: 30px;
}
</style>

