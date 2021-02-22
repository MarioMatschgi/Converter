<template>
  <div class="box copyright">
    <p class="author">
      Made with <i class="fas heart" aria-hidden="true" @click="onHeartClicked()"></i> by me, Mario Elsnig <i class="far copyrightsign" aria-hidden="true"></i> 2021 
    </p>
    <p class="contributors">Tested with skepticism <i class="fas search">&#xf002;</i> by Björn Barow</p>
  </div>
</template>

<script>
export default {
	name: "Footer",
	methods: {
		onHeartClicked() {
			window.ipcRenderer.send("open_url", "https://www.programario.at");
		},
	},
};
</script>

<style>
</style>

<style scoped src="@/Css/footer.css"></style>