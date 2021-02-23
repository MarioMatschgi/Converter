<template>
	<div id="tabs" class="container">
		<div class="tabs">
			<a @click="activetab = '1'" :class="[activetab === '1' ? 'active' : '']">Base converter</a>
			<a @click="activetab = '2'" :class="[activetab === '2' ? 'active' : '']">Bit operations</a>
			<a @click="activetab = '3'" :class="[activetab === '3' ? 'active' : '']">Currency</a>
      <a @click="activetab = '4'" :class="[activetab === '4' ? 'active' : '']">Metric-imperial</a>
      <div class="spacer"></div>
      <a @click="activetab = '?'" :class="[activetab === '?' ? 'active' : '']"><i class="fas">&#xf059;</i></a>
		</div>

		<div class="box tabcontents">
			<div v-if="activetab === '1'" class="tabcontent">
				<BaseConverter/>
			</div>
			<div v-if="activetab === '2'" class="tabcontent">
        <BitOperations/>
			</div>
			<div v-if="activetab === '3'" class="tabcontent">
        <CurrencyConversion/>
			</div>
      <div v-if="activetab === '4'" class="tabcontent">
        <MetricImperialConversion/>
			</div>
      <div v-if="activetab === '?'" class="tabcontent">
        <Information/>
			</div>
		</div>
	</div>
</template>

<script>
import BaseConverter from "./base-converter.vue";
import BitOperations from "./bit-operations.vue";
import CurrencyConversion from "./currency-conversion.vue";
import Information from "./information.vue";
import MetricImperialConversion from "./metric-imperial-conversion.vue";

export default {
	components: {
		BaseConverter,
		Information,
		BitOperations,
		CurrencyConversion,
		MetricImperialConversion,
	},
	name: "TabHeader",
	data: () => ({
		activetab: "2",
	}),
};
</script>

<style src="@/Css/tab-system.css"></style>
<style scoped>
</style>