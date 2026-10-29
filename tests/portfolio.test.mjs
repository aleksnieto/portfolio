import assert from "node:assert/strict";
import { test } from "node:test";
import { experience, profile, projects } from "../src/content.js";
import { waitForAssets, waitForIntro } from "../src/ready.js";

test("selection includes collaborations and studio work without unsupported detail", () => {
  assert.equal(profile.projectCount, "30+");
  assert.match(profile.bio.es, /más de 30 proyectos/);
  assert.match(profile.bio.en, /more than 30 projects/);
  assert.equal(projects.length, 8);
  assert.equal(projects.filter(({ featured }) => featured !== false).length, 6);
  assert.equal(new Set(projects.map(({ id }) => id)).size, projects.length);
  assert.deepEqual(projects.map(({ id }) => id), ["gouka-studio", "cleverpsico", "dna", "gouka", "gouka-os", "ezbarbers", "gouka-sky", "brumia"]);
  const studio = projects.find(({ id }) => id === "gouka-studio");
  assert.equal(studio.kind, "company");
  assert.ok(studio.focus.es.length && studio.focus.en.length);
  assert.ok(projects.some(({ id }) => id === "gouka"));
  const dna = projects.find(({ id }) => id === "dna");
  assert.ok(dna.focus.es.length && dna.focus.en.length);
  assert.equal(projects.find(({ id }) => id === "gouka-sky").href, "https://gouka-sky.vercel.app/");
  assert.equal(projects.find(({ id }) => id === "brumia").href, "https://brumia.vercel.app/");
  const metrica = experience.find(({ company }) => company === "METRICA");
  assert.doesNotMatch(`${metrica.summary.es} ${metrica.summary.en}`, /\b(?:AI|IA)\b/i);
  projects.forEach((entry) => {
    for (const language of ["es", "en"]) {
      assert.ok(entry.category[language] && entry.description[language]);
      assert.ok(entry.focus?.[language]?.length || entry.stack?.length);
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
