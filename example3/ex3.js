async function main() {
  let result = await WebAssembly.instantiateStreaming(
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

  function toUpper(txt) {
    // transfère txt dans le string_buffer, caractère par caractère
    for (let i=0; i<txt.length; i++) {
      string_buffer[i] = txt.charCodeAt(i);
    }

    // appelle la fonction WebAssembly pour passer string_buffer en majuscules
    upper(txt.length);

    // extrait et affiche les caractères du string_buffer
    let ret = "";
    for (let i=0; i<txt.length; i++) {
      ret += String.fromCharCode(string_buffer[i]);
    }
    return ret;
  }

  let i = document.querySelector("input");
  let c = document.getElementById("container");

  i.addEventListener('input', () => {
    c.innerText = toUpper(i.value);
  });
}

main();
