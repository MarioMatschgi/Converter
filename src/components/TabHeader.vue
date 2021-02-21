<template>
	<div id="tabs" class="container">
		<div class="tabs">
			<a @click="activetab = '1'" :class="[activetab === '1' ? 'active' : '']">Base converter</a>
			<a @click="activetab = '2'" :class="[activetab === '2' ? 'active' : '']">Bit operations</a>
			<a @click="activetab = '3'" :class="[activetab === '3' ? 'active' : '']">Currency</a>
      <a @click="activetab = '4'" :class="[activetab === '4' ? 'active' : '']">Metric-imperial</a>
		</div>

		<div class="box tabcontents">
			<div v-if="activetab === '1'" class="tabcontent">
				<h2>Base converter</h2>
        <form @submit="onSubmit($event)">
          <div>
            <label for="binary"><span>Binary</span> <span>(base 2)</span></label>
            <input type="text" id="binary"  name="binary"   @keydown="onInput('01', $event)">
          </div>
          <div>
            <label for="octal"><span>Octal</span> <span>(base 8)</span></label>
            <input type="text" id="octal"   name="octal"    @keydown="onInput('01234567', $event)">
          </div>
          <div>
            <label for="decimal"><span>Decimal</span> <span>(base 10)</span></label>
            <input type="text" id="decimal" name="decimal"  @keydown="onInput('0123456789', $event)">
          </div>
          <div>
            <label for="hex"><span>Hexadecimal</span> <span>(base 16)</span></label>
            <input type="text" id="hex"  name="hex"         @keydown="onInput('0123456789ABCDEF', $event)">
          </div>
          <div class="break"></div>
          <div id="submit-div">
            <input type="submit">
          </div>
        </form>
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
	methods: {
		onInput(legal, event) {
			// Manage input
			let k = event.key.toLowerCase();

			if (!isModifyKeyPressed(event, false, true, true, false)) {
				if (k.length == 1 && legal.toLowerCase().includes(k)) {
					// Key pressed is single character and legal
					console.log("single character and legal");
					event.target.value = (event.target.value + event.key).toUpperCase();
					event.preventDefault();
				} else if (k.length == 1) {
					console.log("single character but illegal");
					event.preventDefault();
				} else {
					console.log("multi  character and illegal");
				}
			}
		},
		onSubmit(event) {
			console.log("submit: " + event.key);
		},
	},
	data: () => ({
		activetab: "1",
	}),
};
function isModifyKeyPressed(
	event,
	alt = true,
	ctrl = true,
	meta = true,
	shift = true
) {
	return (
		(alt && event.altKey) ||
		(ctrl && event.ctrlKey) ||
		(meta && event.metaKey) ||
		(shift && event.shiftKey)
	);
}
</script>

<style src="@/Css/tab-system.css"></style>
<style scoped>
</style>