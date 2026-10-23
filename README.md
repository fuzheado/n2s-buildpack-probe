# n2s-buildpack-probe

Throwaway probe, 2026-10-23. Not a project; delete it when the question is answered.

**Question:** Toolforge's legacy `webservice` runtime types stop at `node20` (= Node v20.19.2, an EOL line that
CVE-2026-111497 / "Node2Shell" lists as receiving **no fix**). The Build Service uses Cloud Native Buildpacks, whose
nodejs buildpack reads `engines.node` from `package.json`. Does that actually work on Toolforge today, and can the
*default* buildpack environment reach a **patched** Node (>= 22.23.4 / 24.22.1 / 26.12.1)?

**This repo** sets:

```json
{ "engines": { "node": "22.23.4" } }
```

`22.23.4` is the first patch fixed for CVE-2026-111497 on the 22.x LTS line, so resolving it is the minimum
demonstration of "patched Node is reachable from the Build Service".

**How to read the answer:** build it, then run `node --version` from the built image:

```sh
toolforge build start https://github.com/fuzheado/n2s-buildpack-probe -i n2sprobe
toolforge jobs run --image tool-wikipano-quiz/n2sprobe:latest --command "node --version" --wait
```

Built and tested in the `wikipano-quiz` tool (already down for an unrelated reason), image name `n2sprobe` so it never
collides with the tool's own image.
