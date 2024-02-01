async function main() {

  // charge le module WASM
  let result = await WebAssembly.instantiateStreaming(
    fetch('./ex4.wasm'),
    {},
  );
  let {
      memory,
      get_image_address,
      get_image_height,
      get_image_size,
      get_image_width,
      fill,
  } = result.instance.exports;

  // récupère le buffer image pour Javascript
  let width = get_image_width();
  let height = get_image_height();
  let linear = new Uint8ClampedArray(
    memory.buffer,
    get_image_address(),
    get_image_size(),
  );
  let imageData = new ImageData(linear, width, height);

  // adapte la taille du canvas
  let c = document.querySelector("canvas");
  c.width = width;
  c.height = height;

  // génère le contenu de l'image
  fill();

  // affiche le contenu du buffer image dans le canvas
  let ctx = c.getContext('2d');
  ctx.putImageData(imageData, 0, 0);
}

main();
