export const useId = (() => {
  let id = 0;
  // non-secure but unique
  return () => Math.random().toString(16) + id++;
})();
