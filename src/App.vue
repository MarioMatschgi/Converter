<template>
  <!-- HEADER -->
  <div class="header">
    <h1>Converter</h1>
  </div>
  
  <!-- CONTENT -->
  <div class="content">
    <TabHeader/>
  </div>
  
  <!-- FOOTER -->
  <div class="spacer"></div>
  <div class="footer">
    <Footer/>
  </div>
</template>

<script>
import TabHeader from "./components/TabHeader";
import Footer from "./components/Footer";

export default {
	name: "App",
	components: {
		TabHeader,
		Footer,
	},
	mounted() {
		let fa = document.createElement("script");
		fa.setAttribute("src", "https://kit.fontawesome.com/c073fc9ae6.js");
		document.head.appendChild(fa);
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

:root {
	--colors_red: #eb4d4b;
	--colors_blue: #3498db;

	--background_color: #202225;
	--foreground_color: #2f3136;
	--accent_color: #7188da;
	--highlight_color: #40444b;
	/* --hover_color: #7188da; */
	/*--selection_color: #ffffff17;*/ /* bright gray 37393e */
	--font_color: #d7d8da;
	--font_selection_color: var(--colors_red);

	--margin-h: 2rem;
	--margin-p: 0.5rem;

	--small_padding: 1rem;
	--padding: 2rem;

	--small_border_radius: 1rem;
	--border_radius: 2rem;
}

#app {
	font-family: "Roboto", sans-serif, Arial, Helvetica, sans-serif;
	font-size: 1.1rem;
	-webkit-font-smoothing: antialiased;

	color: var(--font_color);
	min-height: 100vh;

	display: flex;
	flex-direction: column;
}
</style>

<style src="@/Css/general.css"></style>
<style src="@/Css/font.css"></style>
<style src="@/Css/form.css"></style>
<style src="@/Css/animations.css"></style>