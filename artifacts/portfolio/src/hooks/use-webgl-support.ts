/**
 * Synchronously checks if WebGL is available in the current browser/environment.
 * Returns false if WebGL context creation fails, so we can skip rendering Canvas entirely.
 */
function checkWebGLSupport(): boolean {
  try {
    const canvas = document.createElement('canvas');
    const gl =
      canvas.getContext('webgl2') ||
      canvas.getContext('webgl') ||
      canvas.getContext('experimental-webgl');
    if (!gl) return false;
    // Clean up
    const ext = (gl as WebGLRenderingContext).getExtension('WEBGL_lose_context');
    ext?.loseContext();
    return true;
  } catch {
    return false;
  }
}

// Evaluated once at module load time — no hook overhead
export const webGLSupported: boolean =
  typeof document !== 'undefined' ? checkWebGLSupport() : false;
