export const textMixin = {
	data() {
		return {
			text2: "         Test2        tesssst2   w2 teeeeeeeesssst2          teeeeeest2 Test2 test2         "
		}
	},
	computed: {
		countAppendedText2() {    
	        var words = this.text2.trim().split(/\s+/);

	        for (var i = 0; i < words.length; i++) {
	            words[i] += " (" + words[i].length + ")"
	        }

	        return words.join(" ");
        }
	}
}