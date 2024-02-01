// jshint module:true

let result = await // jshint ignore: line
             WebAssembly.instantiateStreaming(
                 fetch('./ex3.wasm'),
                 {},
             );
let {
  get_sb_address,
  get_sb_size,
  upper,
  memory, // exporté implicitement
} = result.instance.exports;

let string_buffer = new Uint8Array(
  memory.buffer,
  get_sb_address(),
  get_sb_size(),
);

export function toUpper(txt) {
  // transfère txt dans le buffer, caractère par caractère
  for (let j=0; j<txt.length; j++) {
    string_buffer[j] = txt.charCodeAt(j);
  }

  // appelle la fonction WebAssembly pour passer buffer en majuscules
  upper(txt.length);

  // extrait et affiche les caractères du buffer
  let ret = "";
  for (let j=0; j<txt.length; j++) {
    ret += String.fromCharCode(string_buffer[j]);
  }
  return ret;
}
