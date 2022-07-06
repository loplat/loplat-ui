export function generateUniqueId(): string {
  return '_' + String(Math.random().toString(36).slice(2, 11));
}

export function attachUniqueId(value: string, uniqueId: string): string {
  return value + uniqueId;
}

export function detachUniqueId(valueWithUniqueId: string, uniqueId: string): string {
  return valueWithUniqueId.split(uniqueId)[0];
}
