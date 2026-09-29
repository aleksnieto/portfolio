import assert from "node:assert/strict";
import { test } from "node:test";
import { profile, projects } from "../src/content.js";
import { waitForAssets, waitForIntro } from "../src/ready.js";

test("selection contains four own works, with Gouka Studio as a company", () => {
  assert.equal(profile.projectCount, "30+");
  assert.match(profile.bio.es, /más de 30 proyectos/);
  assert.match(profile.bio.en, /more than 30 projects/);
  assert.equal(projects.length, 4);
  assert.equal(new Set(projects.map(({ id }) => id)).size, projects.length);
  assert.deepEqual(projects.map(({ id }) => id), ["gouka-studio", "cleverpsico", "gouka", "ezbarbers"]);
  const studio = projects.find(({ id }) => id === "gouka-studio");
  assert.equal(studio.kind, "company");
  assert.ok(studio.focus.es.length && studio.focus.en.length);
  assert.ok(projects.some(({ id }) => id === "gouka"));
  projects.forEach((entry) => {
    for (const language of ["es", "en"]) {
      assert.ok(entry.category[language] && entry.description[language]);
      assert.ok(entry.kind === "company" ? entry.focus[language] : entry.stack);
    }
  });
});

test("intro waits for real assets and tolerates image failure", async () => {
  let finishFonts;
  let ready = false;
  const pending = waitForAssets({
    fonts: {
      ready: new Promise((resolve) => {
        finishFonts = resolve;
      }),
    },
    images: [{ decode: () => Promise.reject(new Error("unavailable image")) }],
  }).then(() => {
    ready = true;
  });
  await Promise.resolve();
  assert.equal(ready, false);
  finishFonts();
  await pending;
  assert.equal(ready, true);
});

test("intro releases on timeout or with unsupported asset APIs", async () => {
  await waitForAssets(
    { fonts: { ready: new Promise(() => {}) }, images: [] },
    5,
  );
  await waitForAssets({ images: [{}] }, 5);
});

test("intro keeps the name visible for a minimum interval", async () => {
  const start = performance.now();
  await waitForIntro({ fonts: { ready: Promise.resolve() }, images: [] }, 30);
  assert.ok(performance.now() - start >= 25);
});
