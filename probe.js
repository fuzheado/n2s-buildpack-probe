// Prints the runtime it actually got. Nothing else.
console.log(JSON.stringify({
  probe: "n2s-buildpack-probe",
  node: process.version,
  modules: process.versions.modules,
  brotli: typeof process.versions.brotli === "string" ? process.versions.brotli : "bundled?",
  execPath: process.execPath,
}));
