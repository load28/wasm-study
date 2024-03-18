async function loadWasm() {
    return await import('@load28/wasm-study');
}

loadWasm().then((wasmModule) => {
    wasmModule.greet('WebAssembly');
});