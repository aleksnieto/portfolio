// Asset failures and slow connections must never leave the intro blocking the site.
export async function waitForAssets(document, timeoutMs = 1800) {
  let timeout;
  const assets = [
    document.fonts?.ready,
    ...Array.from(document.images, (image) =>
      image.decode ? Promise.resolve().then(() => image.decode()) : undefined,
    ),
  ];
  try {
    await Promise.race([
      Promise.allSettled(assets),
      new Promise((resolve) => {
        timeout = setTimeout(resolve, timeoutMs);
      }),
    ]);
  } finally {
    clearTimeout(timeout);
  }
}

export function waitForIntro(document, minimumMs = 1500) {
  return Promise.all([
    waitForAssets(document),
    new Promise((resolve) => setTimeout(resolve, minimumMs)),
  ]);
}
