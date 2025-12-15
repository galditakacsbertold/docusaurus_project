---
title: API integration
sidebar_position: 1
---

# API integration

Később ide kerül az OpenAPI alapú API dokumentáció integrálása.

## Current state

Az OpenAPI alapú API dokumentáció már generálva van a `docs/petstore` alatt, és elérhető a navigációból (Petstore API).

## Workflow

A projekt CI/CD folyamata automatikusan:
- lefuttatja az OpenAPI doksi generálást (`npx docusaurus gen-api-docs petstore`)
- buildeli a Docusaurus oldalt
- main branch esetén deployolja GitHub Pages-re

## Notes for reviewers

Ha a generált API docs mappa (`docs/petstore`) `.gitignore` alatt van, akkor PR-ben elvárt, hogy a build workflow generálja le futás közben, és a build ennek ellenére sikeres legyen.
