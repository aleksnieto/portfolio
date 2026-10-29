import assert from "node:assert/strict";
import { test } from "node:test";
import { experience, profile, projects } from "../src/content.js";
import { waitForAssets, waitForIntro } from "../src/ready.js";

test("selection includes only the public work requested", () => {
  assert.equal(profile.projectCount, "30+");
  assert.match(profile.bio.es, /más de 30 proyectos/);
  assert.match(profile.bio.en, /more than 30 projects/);
  assert.equal(projects.length, 3);
  assert.equal(new Set(projects.map(({ id }) => id)).size, projects.length);
  assert.deepEqual(projects.map(({ id }) => id), ["cleverpsico", "ezbarbers", "brumia"]);
  assert.equal(projects.find(({ id }) => id === "brumia").href, "https://brumia.vercel.app/");
  assert.ok(experience.some(({ company, role }) => company === "Gouka Studio" && role === "CEO"));
  const metrica = experience.find(({ company }) => company === "METRICA");
  assert.doesNotMatch(`${metrica.summary.es} ${metrica.summary.en}`, /\b(?:AI|IA)\b/i);
  projects.forEach((entry) => {
    for (const language of ["es", "en"]) {
      assert.ok(entry.category[language] && entry.description[language]);
      assert.ok(entry.stack?.length);
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
