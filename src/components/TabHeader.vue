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
				<h2>Base converter</h2>
        <form>
          <div>
            <label for="binary"><span>Binary</span> <span>(base 2)&nbsp;&nbsp;&nbsp;<i class="far">&#xf059;</i></span></label>
            <input type="text" data-base="2" id="binary"  name="binary"   @keydown="onInput('01', $event)">
          </div>
          <div>
            <label for="octal"><span>Octal</span> <span>(base 8)&nbsp;&nbsp;&nbsp;<i class="far">&#xf059;</i></span></label>
            <input type="text" data-base="8" id="octal"   name="octal"    @keydown="onInput('01234567', $event)">
          </div>
          <div>
            <label for="decimal"><span>Decimal</span> <span>(base 10)&nbsp;&nbsp;&nbsp;<i class="far">&#xf059;</i></span></label>
            <input type="text" data-base="10" id="decimal" name="decimal"  @keydown="onInput('0123456789', $event)">
          </div>
          <div>
            <label for="hex"><span>Hexadecimal</span> <span>(base 16)&nbsp;&nbsp;&nbsp;<i class="far">&#xf059;</i></span></label>
            <input type="text" data-base="16" id="hex"  name="hex"         @keydown="onInput('0123456789ABCDEF', $event)">
          </div>
        </form>
			</div>
			<div v-if="activetab === '2'" class="tabcontent">
        <h2>Bit operations</h2>
				<p>comming soon...</p>
			</div>
			<div v-if="activetab === '3'" class="tabcontent">
        <h2>Currency conversion</h2>
				<p>comming soon...</p>
			</div>
      <div v-if="activetab === '4'" class="tabcontent">
        <h2>Metric-imperial conversion</h2>
				<p>comming soon...</p>
			</div>
      <div v-if="activetab === '?'" class="tabcontent">
        <h2>About</h2>
				<p>comming soon...</p>
			</div>
		</div>
	</div>
</template>

<script>
// VARS FOR PREVIOUS VALUES AS STRINGS
var values = {};

function radix_converter(input, from_base, to_base) {
	var output = "";
	if (input !== undefined) {
		if (to_base >= 2 && to_base <= 36) {
			output = parseInt(input, from_base).toString(to_base);
		}
	}
	return output;
}

function formatValue(val, valid) {
	return val.toUpperCase().replace(new RegExp("[^" + valid + "]"), "");
}

export default {
	name: "TabHeader",
	methods: {
		onInput(legal, event) {
			// Manage input
			let k = event.key.toLowerCase();

			if (!isModifyKeyPressed(event, false, true, true, false)) {
				if (k.length == 1 && legal.toLowerCase().includes(k)) {
					// Key pressed is single character and legal
					// event.target.value = (event.target.value + event.key).toUpperCase();
					// event.preventDefault();
				} else if (k.length == 1) {
					event.preventDefault();
				}
			}

			setTimeout(function () {
				// CHECK WHICH TEXTFIELD CHANGED, THIS IS VALUE TO CONVERT
				let form = document.getElementsByTagName("form")[0];
				let inputs = form.getElementsByTagName("input");

				let changedInput = event.target;
				for (let i = 0; i < inputs.length; i++) {
					let base = inputs[i].getAttribute("data-base");
					// Check if key doesnt exist in values dict
					if (!(base in values)) {
						values[base] = "";
					}
				}

				// UPDATE VARS
				let base = parseInt(changedInput.getAttribute("data-base"));
				let val = changedInput.value;
				for (let key in values) {
					if (val == "") {
						values[key] = "";
					} else {
						if (key != base) {
							values[key] = formatValue(radix_converter(val, base, key), legal);
						} else {
							values[key] = formatValue(val, legal);
						}
					}
				}

				// SET TEXFIELD CONTENTS TO VARS
				for (let i = 0; i < inputs.length; i++) {
					let input = inputs[i];
					let base = input.getAttribute("data-base");

					input.value = values[base];
				}
			}, 0);
		},
	},
	data: () => ({
		activetab: "1",
		msg: "ASD",
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