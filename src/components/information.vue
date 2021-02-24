<template>
  <div id="about" class="box">
    <img src="../../icon.png">
    <h1>{{getVersion()}}</h1>
    <p><strong>Converter</strong> lets you covert numbers between different radix (bases), perform bit-operatons and more!</p>
    <p>BJÖRN SCHREIBT NOCH</p>
    
    <div class="div_spacer"/>
    
    <h1>Contact me!</h1>
    <div class="flexbox">
      <!-- GITHUB -->
      <div class="column">
        <a class="github" @click="openURL('https://github.com/MarioMatschgi')"><i class="fab" aria-hidden="true"></i></a>
      </div>
      <!-- DISCORD -->
      <div class="column">
        <a class="discord" @click="openURL('https://discordapp.com/users/294161179130068992')"><i class=" fab" aria-hidden="true"></i></a>
      </div>
      <!-- STACKOVERFLOW -->
      <div class="column">
        <a class="stackoverflow" @click="openURL('https://stackoverflow.com/users/14065298/mario-elsnig?tab=profile')"><i class="fab" aria-hidden="true"></i></a>
      </div>
      <!-- EMAIL -->
      <div class="column">
        <a class="email" href="mailto:mario.elsnig@gmail.com"><i class="fas" aria-hidden="true"></i></a>
      </div>
      <!-- REDDIT -->
      <div class="column">
        <a class="reddit" @click="openURL('https://www.reddit.com/r/Programario')"><i class="fab" aria-hidden="true"></i></a>
      </div>
      <!-- TWITTER -->
      <div class="column">
        <a class="twitter" @click="openURL('https://twitter.com/Mario_Matschgi')" target="_blank"><i class="fab" aria-hidden="true"></i></a>
      </div>
    </div>
    
    <div class="div_spacer"/>
    
    <p>Converter {{getVersion()}} was developed, designed and published by me, Mario Elsnig. <br>Björn Barow beta-tested and helped with suggestions and wrote dev-logs.</p>
  </div>
</template>

<script>
import { version } from "../../package.json";

export default {
	name: "Information",
	methods: {
		openURL(url) {
			window.ipcRenderer.send("open_url", url);
		},
		getVersion() {
			return version;
		},
	},
};
</script>

<style>
:root {
	--colors-github: #7e47a5;
	--colors-discord: #7289da;
	--colors-stackoverflow: #ed7c22;
	--colors-email: #2b99b1;
	--colors-reddit: #ff4501;
	--colors-twitter: #1ca1f2;
	--colors-instagram: #e96c35;
}

#about {
	text-align: center;
	max-width: 40em;
	margin-left: auto;
	margin-right: auto;
	margin-top: var(--padding);
	margin-bottom: var(--padding);
}
#about img {
	max-width: 5em;
	display: block;
	margin-left: auto;
	margin-right: auto;
}
#about h1 {
	font-size: 1.25em;
}
#about .flexbox {
	font-size: 2em;
	justify-content: center !important;
	margin: 0 !important;
}
#about .flexbox > * {
	margin: var(--small_padding) !important;
	flex-grow: 0 !important;
}
#about .flexbox a {
	cursor: pointer;
}
/* COLORS FOR ICONS */
.github {
	color: var(--colors-github);
}
.discord {
	color: var(--colors-discord);
}
.stackoverflow {
	color: var(--colors-stackoverflow);
}
.email {
	color: var(--colors-email);
}
.reddit {
	color: var(--colors-reddit);
}
.twitter {
	color: var(--colors-twitter);
}
</style>