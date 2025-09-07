import type { StorageRepository } from '@domain/repositories/storage-repository'

export class StorageUseCase {
  constructor(
    private repository: StorageRepository,
    private readonly keyStorage: string
  ) {}

  getRawItem() {
    return this.repository.getRawItem(this.keyStorage)
  }

  setItem<T>(payload: T) {
    return this.repository.setItem(this.keyStorage, payload)
  }

  deleteItem() {
    return this.repository.deleteItem(this.keyStorage)
  }

  clearAll() {
    return this.repository.clearAll()
  }
}
