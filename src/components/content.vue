<template>
	<div id="tabs" class="container">
		<div class="tabs">
			<a @click="activetab = 'base'" :class="[activetab === 'base' ? 'active' : '']">Base converter</a>
			<a @click="activetab = 'bit-op'" :class="[activetab === 'bit-op' ? 'active' : '']">Bit operations</a>
      <a @click="activetab = 'met-imp'" :class="[activetab === 'met-imp' ? 'active' : '']">Metric-imperial</a>
      <div class="spacer"></div>
      <a @click="activetab = '?'" :class="[activetab === '?' ? 'active' : '']"><i class="fas">&#xf059;</i></a>
		</div>

		<div class="box tabcontents">
			<div v-if="activetab === 'base'" class="tabcontent">
        <h2>Base converter</h2>
				<BaseConverter/>
			</div>
			<div v-else-if="activetab === 'bit-op'" class="tabcontent">
        <h2>Bit operations</h2>
        <BitOperations/>
			</div>
      <div v-else-if="activetab === 'met-imp'" class="tabcontent">
        <h2>Metric-imperial conversion</h2>
        <MetricImperialConversion/>
			</div>
      <div v-else-if="activetab === '?'" class="tabcontent">
        <Information/>
			</div>
		</div>
	</div>
</template>

<script>
import BaseConverter from "./base-converter.vue";
import BitOperations from "./bit-operations.vue";
import Information from "./information.vue";
import MetricImperialConversion from "./metric-imperial-conversion.vue";

export default {
	components: {
		BaseConverter,
		BitOperations,
		MetricImperialConversion,
		Information,
	},
	name: "Content",
	data: () => ({
		activetab: "base",
	}),
};
</script>

<style src="@/Css/tab-system.css"></style>
<style scoped>
</style>