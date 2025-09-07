export interface StorageRepository {
  setItem<T = unknown>(key: string, payload: T): void
  getRawItem(key: string): string | null
  deleteItem(key: string): void
  clearAll(): void
}
