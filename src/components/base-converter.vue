<template>
  <form class="flexbox">
    <div>
      <label for="binary"><span>Binary</span> <span>(base 2)&nbsp;&nbsp;&nbsp;<i class="far">&#xf059;</i></span></label>
      <input type="text" @keydown="onInput($event)" data-base="2" id="binary"  name="binary"   data-legal="'01'">
    </div>
    <div>
      <label for="octal"><span>Octal</span> <span>(base 8)&nbsp;&nbsp;&nbsp;<i class="far">&#xf059;</i></span></label>
      <input type="text" @keydown="onInput($event)" data-base="8" id="octal"   name="octal"    data-legal="'01234567'">
    </div>
    <div>
      <label for="decimal"><span>Decimal</span> <span>(base 10)&nbsp;&nbsp;&nbsp;<i class="far">&#xf059;</i></span></label>
      <input type="text" @keydown="onInput($event)" data-base="10" id="decimal" name="decimal"  data-legal="'0123456789'">
    </div>
    <div>
      <label for="hex"><span>Hexadecimal</span> <span>(base 16)&nbsp;&nbsp;&nbsp;<i class="far">&#xf059;</i></span></label>
      <input type="text" @keydown="onInput($event)" data-base="16" id="hex"  name="hex"         data-legal="'0123456789ABCDEF'">
    </div>
  </form>
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

function getLegalStr(inputs, base) {
	for (let i = 0; i < inputs.length; i++) {
		const input = inputs[i];
		if (input.getAttribute("data-base") == base) {
			console.log("I:" + input.id);
			return input.getAttribute("data-legal");
		}
	}
}

export default {
	name: "BaseConverter",
	methods: {
		onInput(event) {
			// Manage input
			let k = event.key.toLowerCase();
			let inputs = document
				.getElementsByTagName("form")[0]
				.getElementsByTagName("input");
			let legal = getLegalStr(inputs, event.target.getAttribute("data-base"));

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
							values[key] = formatValue(
								radix_converter(val, base, key),
								getLegalStr(inputs, key)
							);
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
};
</script>

<style>
</style>