var xhr,
  form_data = new FormData();

xhr = new XMLHttpRequest();
xhr.open("POST", "http://barfoo.com/upload");
xhr.setRequestHeader("Content-Type", "multipart/form-data");
xhr.setRequestHeader("File-Name", file.name);
xhr.setRequestHeader("File-Size", file.size || file.fileSize);
xhr.setRequestHeader("File-Type", file.type);
xhr.setRequestHeader("Session-ID", 12345);

xhr.onreadystatechange = function __xhr_onreadystatechange__() {
  if (xhr.readyState == 4) {
    xhr.onreadystatechange = null;
    if (xhr.status != 200 || xhr.responseText != "OK") {
      alert("Sorry, upload failed for: " + (file.name || "[unknown file]"));
    }
    xhr = null;
  }
};
form_data.append(file.name, file);
xhr.send(form_data);
