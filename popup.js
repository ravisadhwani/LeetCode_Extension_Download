const init = function(){
  console.log("init");
  document.getElementById("submit").addEventListener("click", submit);
}

document.addEventListener('DOMContentLoaded', init);

var tab;
chrome.tabs.query({active: true, currentWindow: true},function(tabs){   
  tab = tabs[0];
});

function submit(){
  var code = document.getElementById('code').value;
  console.log(code);

  //fetch the name of file from the problem url

  var n = tab.url.split("/");
  let name=n[4];
  console.log(name);

  //download code pasted in that file
  download(code, name+'.cpp', 'text/plain');
}


function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob)
        window.navigator.msSaveOrOpenBlob(file, filename);
    else {
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}
