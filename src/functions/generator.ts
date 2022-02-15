export function generateUniqueId(): string {
  return '_' + String(Math.random().toString(36).slice(2, 11));
}
