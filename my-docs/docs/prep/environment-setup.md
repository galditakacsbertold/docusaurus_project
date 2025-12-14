---
title: Fejlesztői környezet telepítése
sidebar_position: 1
description: Eszközök telepítése és ellenőrzése (VSCode, Node.js, Git, GitHub) a Docusaurus projekthez.
---

# Előkészületek: Fejlesztői környezet telepítése

A feladatok elvégzéséhez szükséged lesz egy megfelelően beállított fejlesztői környezetre. Ezen az oldalon végigvesszük a szükséges eszközöket, a telepítés fő lépéseit, és azt is, hogyan ellenőrizd gyorsan, hogy minden működik.

:::tip
A példák **npm**-mel vannak. Ha Yarn-t használsz, a parancsok Yarn-os megfelelőit futtasd.
:::

## Szükséges eszközök

- **Visual Studio Code (VSCode)** – kódszerkesztő
- **Terminál (CLI)** – parancsok futtatásához
- **Node.js és npm** – Docusaurus futtatásához
- **Yarn** *(opcionális)* – alternatív csomagkezelő
- **Git** *(és opcionálisan GitHub CLI)* – verziókezeléshez
- **GitHub fiók** – repository + GitHub Pages használatához

---

## 1. Visual Studio Code telepítése

A VSCode egy népszerű, ingyenes kódszerkesztő webes projektekhez.

### Letöltés és telepítés
- Windows / macOS / Linux: a VSCode hivatalos oldaláról telepíthető.

### Ajánlott kiegészítők (Extensions)

- **Markdown All in One** – Markdown előnézet és kényelmi funkciók
- **Prettier** – automatikus formázás (egységes stílus)
- **ESLint** – JavaScript/TypeScript minőségellenőrzés
- **GitLens** *(opcionális)* – Git history / blame információk

:::note
Ezek nem kötelezők, de kényelmesebbé teszik a munkát.
:::

---

## 2. Node.js és npm telepítése

Ez a lépés kritikus a Docusaurus futtatásához. Javasolt **LTS** verziót használni.

:::caution
Ha később furcsa build hibákba futsz, a leggyakoribb megoldás az **LTS Node.js** verzióra váltás.
:::

### Windows (gyors út)

1. Töltsd le az **LTS** verziót a Node.js weboldaláról.
2. Futtasd a telepítőt.
3. A telepítés során ellenőrizd, hogy az **“Add to PATH”** opció be van pipálva.
4. Indíts új terminált (vagy indítsd újra a gépet), hogy a PATH frissüljön.

### Ellenőrzés

Nyiss egy új terminált, majd futtasd:

```bash
node -v
npm -v
```

A kimenet verziószám lesz (pl. `v18.x` / `v20.x` / `v22.x`).

### Hibaelhárítás (Windows: „not recognized”)

Ha a `node -v` parancsra „not recognized” hibát kapsz, valószínűleg PATH probléma.

**GUI lépések:**
1. Windows kereső: **“Környezeti változók szerkesztése”** (Edit the system environment variables)
2. **Környezeti változók…** (Environment Variables)
3. Rendszerváltozók (System variables) → **Path** → **Szerkesztés**
4. Ellenőrizd, hogy benne van-e a Node elérési útja (pl. `C:\Program Files\nodejs\`)
5. Indíts új terminált, és futtasd újra az ellenőrző parancsokat.

---

## 3. Yarn telepítése (opcionális)

A Docusaurus projektekben gyakran használják, de **nem kötelező**.

### Telepítés (npm-mel)

```bash
npm install --global yarn
```

### Ellenőrzés

```bash
yarn --version
```

### NPM vs Yarn – gyors összehasonlítás

| Szempont | npm | Yarn |
|---|---|---|
| Sebesség | Gyors | Gyakran még gyorsabb |
| Determinizmus | Jó | Kiváló (lock file) |
| Használat | Alapértelmezett | Külön telepítés |

:::note
A feladat során elég, ha **egy** csomagkezelőt választasz, és következetesen azt használod.
:::

---

## 4. Git (és opcionálisan GitHub CLI)

A verziókezeléshez és a beadáshoz szükség lesz a Git-re.

- Git telepítő: `git-scm.com/downloads`
- GitHub CLI: `cli.github.com` *(opcionális)*

### Git konfigurálása (ajánlott)

```bash
git config --global user.name "A Te Neved"
git config --global user.email "email@cim.ed"
```

**Miért fontos?**
- azonosítható, ki készítette a commitot
- GitHub a commit email alapján tudja a profilhoz kötni a commitokat
- csapatmunkában alap elvárás

### GitHub CLI bejelentkezés (opcionális)

```bash
gh auth login
```

Válaszd a böngészős (browser) bejelentkezést.

---

## 5. GitHub fiók és repository

Ha még nincs fiókod, regisztrálj a GitHubon. A feladat során szükséged lesz egy repository-ra a projektedhez.

---

## ✅ Végső ellenőrző lista

Mielőtt elkezdenéd az 1. feladatot, ellenőrizd, hogy minden megvan.

### Eszközök

- [ ] Node.js telepítve (`node -v`)
- [ ] npm telepítve (`npm -v`)
- [ ] Git telepítve (`git --version`)
- [ ] GitHub CLI telepítve *(opcionális)* (`gh --version`)
- [ ] VSCode (vagy más szerkesztő) használható
- [ ] Yarn *(opcionális)* (`yarn --version`)

### Git konfiguráció

- [ ] `git config user.name` visszaad egy nevet
- [ ] `git config user.email` visszaad egy email címet
- [ ] GitHub CLI bejelentkezés *(opcionális)*: `gh auth status` „Logged in” üzenetet mutat

### Hozzáférések

- [ ] Be tudsz jelentkezni a github.com-ra
- [ ] Tudsz új repository-t létrehozni (Settings → Repositories)

:::tip
Ha minden pipálva van: **készen állsz** az 1. feladat (Projekt alapok) elkezdésére.
:::
