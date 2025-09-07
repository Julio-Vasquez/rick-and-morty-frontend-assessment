import type { TypeStorage } from '../types/storage-type'
import type { StorageRepository } from '@domain/repositories/storage-repository'

export class StorageManagerRepository implements StorageRepository {
  private storage: Storage

  constructor(private type: TypeStorage = 'localStorage') {
    this.storage = type === 'sessionStorage' ? sessionStorage : localStorage
  }

  setItem<T = unknown>(key: string, newItem: T): void {
    this.storage.setItem(key, JSON.stringify(newItem))
  }

  getRawItem(key: string) {
    return this.storage.getItem(key)
  }

  deleteItem(key: string): void {
    this.storage.removeItem(key)
  }

  clearAll(): void {
    this.storage.clear()
  }
}
