# Arab → római szám konverter (TDD)

Egyszerű **konzolos JavaScript** program. Az **1–3999 közötti egész számokat** római számmá alakítja.

## Futtatás

A projekt mappájában:

```bash
node index.js
```

Például:

```text
Adj meg egy egész számot (1–3999): 1994
Római szám: MCMXCIV
```

Érvénytelen bemenetre (pl. `0`, `-1`, `4000`, `1.5`) hibaüzenetet ír.

## QUnit-tesztek

```bash
npm install
npm test
```

A tesztek ellenőrzik az alapértékeket, a kivonásos írásmódokat (`IV`, `IX`, `XL`, `CM`), a határértékeket és a hibás bemeneteket. A konzolos bemenet/kimenet is tesztelve van.


