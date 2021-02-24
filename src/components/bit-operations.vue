<template>
  <form class="flexbox column">
    <div>
      <label for="bitop-input">Enter the expression<i class="far">&#xf059;</i></label>
      <input type="text" id="bitop-input"  name="bitop-input"   @keydown="onInput($event)">
      <div id="bitop-errorlog" style="display: none">
        <p>Syntax error! Please enter a valid expression!</p>
      </div>
    </div>
    <div>
      <label for="bitop-result">Result<i class="far">&#xf059;</i></label>
      <div class="flexbox row">
        <input type="text" id="bitop-result-hex"  name="bitop-result" disabled>
        <input type="text" id="bitop-result-dec"  name="bitop-result" disabled>
        <input type="text" id="bitop-result-bin"  name="bitop-result" disabled>
      </div>
    </div>
  </form>
</template>

<script>
function radix_converter(input, from_base, to_base) {
	var output = "";
	if (input !== undefined) {
		if (to_base >= 2 && to_base <= 36) {
			output = parseInt(input, from_base).toString(to_base);
		}
	}
	return output;
}

function setResult(name, val) {
	document.getElementById("bitop-result-" + name.toLowerCase()).value =
		name + ": " + val;
}

export default {
	name: "BitOperations",
	created: function () {
		setTimeout(function () {
			setResult("Hex", "");
			setResult("Dec", "");
			setResult("Bin", "");
		}, 0);
	},
	methods: {
		onInput(event) {
			setTimeout(function () {
				let val = event.target.value.replace(" ", "");
				var err = undefined;
				let res = undefined;

				try {
					res = Function("return " + val)();
				} catch (error) {
					err = error;
					console.log(err);
				}

				var errorlog = document.getElementById("bitop-errorlog");
				if (err == undefined) {
					errorlog.style.display = "none";
				} else {
					errorlog.style.display = "block";
				}

				setResult("Hex", res == undefined ? "" : radix_converter(res, 10, 16));
				setResult("Dec", res == undefined ? "" : res);
				setResult("Bin", res == undefined ? "" : radix_converter(res, 10, 2));
			}, 0);
		},
	},
};
</script>

<style scoped>
#bitop-errorlog {
	color: var(--colors_red);
	margin-top: var(--small_padding);
	text-align: center;
}
</style>