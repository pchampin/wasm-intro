#define WASM_EXPORT __attribute__((visibility("default")))

#define SIZE 256
char BUFFER[SIZE];

WASM_EXPORT
char* get_sb_address(void) {
  return &BUFFER[0];
  // NB: les pointeurs sont vus par WASM/Javascript comme des entiers
}

WASM_EXPORT
int get_sb_size(void) {
  return sizeof(BUFFER);
}

// met le contenu de BUFFER en majuscules
WASM_EXPORT
void upper(int len) {
  for (int i=0; i<len; i++) {
    if ('a' <= BUFFER[i] && BUFFER[i] <= 'z') {
      BUFFER[i] -= 32;
    }
  }
}
