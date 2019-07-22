export function infoCtr(): Promise<{ok: boolean}> {
  return new Promise(resolve => resolve({ok: true}));
}
