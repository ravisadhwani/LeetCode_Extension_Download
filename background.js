

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
	console.log("backgroud file");
	let url = tab.url;
	var n = url.split("/");
	let q=n[4];
	var globalVariable={
       x:q
    };
    console.log(globalVariable.x);
}

