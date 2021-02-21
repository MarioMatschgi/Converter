<template>
	<div id="tabs" class="container">
		<div class="tabs">
			<a @click="activetab = '1'" :class="[activetab === '1' ? 'active' : '']">Base converter</a>
			<a @click="activetab = '2'" :class="[activetab === '2' ? 'active' : '']">Bit operations</a>
			<a @click="activetab = '3'" :class="[activetab === '3' ? 'active' : '']">Currency</a>
      <a @click="activetab = '4'" :class="[activetab === '4' ? 'active' : '']">Metric-imperial</a>
		</div>

		<div class="tabcontents">
			<div v-if="activetab === '1'" class="tabcontent">
				<p>BASE CONVERTER STUFF</p>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
			</div>
			<div v-if="activetab === '2'" class="tabcontent">
				<p>BIT OPERATION</p>
			</div>
			<div v-if="activetab === '3'" class="tabcontent">
				<p>CURRENCY</p>
			</div>
      <div v-if="activetab === '4'" class="tabcontent">
				<p>METRIC-IMPERIAL</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "TabHeader",
	methods: {},
	data: () => ({
		activetab: "1",
	}),
};
</script>

<style src="@/Css/tab-system.css"></style>
<style scoped>
</style>