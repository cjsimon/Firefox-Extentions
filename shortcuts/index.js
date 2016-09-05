var self = require("sdk/self");
var tabs = require("sdk/tabs");
var { Hotkey } = require("sdk/hotkeys");

var nextTab = Hotkey({
	combo: "accel-shift-right",
	onPress: function() {
		var i = tabs.activeTab.index;
		if(--i < 0) i = tabs.length-1;
		tabs[i].activate();
	}
});

var previousTab = Hotkey({
	combo: "accel-alt-left",
	onPress: function() {
		var i = tabs.activeTab.index;
		if(++i > tabs.length-1) i = 0;
		tabs[i].activate();
	}
});

// a dummy function, to show how tests work.
// to see how to test this function, look at test/test-index.js
function dummy(text, callback) {
  callback(text);
}

exports.dummy = dummy;

