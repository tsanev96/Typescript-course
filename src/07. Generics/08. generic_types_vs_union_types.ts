class DataStorageWithUnionTypes {
  // this means we can have mixed types in the array
  private data: (string | number | boolean)[] = [];

  addItems(item: string | number | boolean) {
    this.data.push(item);
  }
}

// This ensure we will have only one of this types
class DataStorageWithGenericAndUnionTypes<T extends string | number | boolean> {
  private data: T[] = [];

  addItems(item: T) {
    this.data.push(item);
  }
}
