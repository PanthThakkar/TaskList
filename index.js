$(document).ready(function(){
    $('form').on('submit', function(){
        
        var item = $('form input');
        var todo = {item: item.val()};

        $.ajax({
            type: 'POST',
            url: '/todo',
            data: todo,
            success: function(data){
                location.reload();
            }
        });
        return false;
    })
var textFile = new Blob([taskDefToSave, taskIDToSave], {type: 'text/plain'})
    $('li').on('click', function(){
        var item = $(this).text().replace(/ /g, "-");
        $.ajax({
            type: 'DELETE',
            url: '/todo/' + item,
            success: function(data){
                location.reload();
            }
        })
    })
})
function saveTexttoFile() {
    var taskDefToSave = document.getElementById('TaskDefID');
    var taskIDToSave = document.getElementById('myTaskID');
    var taskCompleteness = document.getElementById('myCompleteness');
    var textFile = new Blob([taskDefToSave, taskIDToSave], {type: 'text/plain'});
    var fileNameToSaveAs = "ecc.plist";

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null) {
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else{
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }
    downloadLink.click();

}
function showFile(fileNameToSaveAs){
    fileNameToSaveAs.display;
}

var button = document.getElementById('save');
button.addEventListener('click', saveTextAsFile);

function destroyClickedElement(event){
    document.body.removeChild(event.target);
}
function addElement(){
    
}