class StorageWrapper {
  private storage?: Storage;

  constructor(type: 'local' | 'session') {
    try {
      this.storage =
        type === 'local' ? window.localStorage : window.sessionStorage;
    } catch (error) {
      console.error(error);
    }
  }

  public get length(): number | false {
    if (!this.storage) return false;

    return this.storage.length;
  }

  public get<T>(key: string): T | false | void {
    if (!this.storage) return false;

    try {
      const value = this.storage.getItem(key);

      if (!value) {
        return false;
      }

      return JSON.parse(value) as T;
    } catch (error) {
      console.error(error);
    }
  }

  public set(key: string, value: unknown): false | void {
    if (!this.storage) return false;

    try {
      const stringValue = JSON.stringify(value);

      this.storage.setItem(key, stringValue);
    } catch (error) {
      console.error(error);
    }
  }

  public remove(key: string): false | void {
    if (!this.storage) return false;

    this.storage.removeItem(key);
  }

  public clear(): false | void {
    if (!this.storage) return false;

    this.storage.clear();
  }
}

export const localStorageService = new StorageWrapper('local');
export const sessionStorageService = new StorageWrapper('session');
