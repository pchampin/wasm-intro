#define WASM_EXPORT __attribute__((visibility("default")))

WASM_EXPORT
int answer(void) {
  return 42;
}
