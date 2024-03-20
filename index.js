async function loadWasm() {
    return await import('@load28/wasm-study');
}

loadWasm().then((wasmModule) => {
    // wasm은 모듈을 비동기로 로드 되어야 하기 때문에 동적 임포트를 해야한다.
    wasmModule.greet('WebAssembly');
});