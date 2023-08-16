export const avatarFileToBase64 = (filename, callback) => {
  let xhr = new XMLHttpRequest()
  xhr.onload = function () {
    let reader = new FileReader()
    reader.onloadend = function () {
      callback(reader.result)
    }
    reader.readAsDataURL(xhr.response)
  }
  xhr.open("GET", `/download?type=avatar&name=${filename}`)
  xhr.responseType = "blob"
  xhr.send()
}
