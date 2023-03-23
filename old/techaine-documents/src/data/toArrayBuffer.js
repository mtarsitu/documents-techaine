export const base64ToArrayBuffer=(data) =>{
    var input = data.substring(data.indexOf(',') + 1);
    var binaryString = window.atob(input);
    var binaryLen = binaryString.length;
    var bytes = new Uint8Array(binaryLen);
    for (var i = 0; i < binaryLen; i++) {
      var ascii = binaryString.charCodeAt(i);
      bytes[i] = ascii;
    }
    return bytes;
  };