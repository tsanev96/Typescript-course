// class DataStorage<T extends string | number> {
class DataStorage<T> {
  private data: T[] = [];

  addItems(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    const index = this.data.indexOf(item);
    if (index < 0) {
      return null;
    }
    this.data.splice(index, 1);
  }

  getItems() {
    return this.data;
  }
}

const textStorage = new DataStorage<string>();

textStorage.addItems("text 1");
textStorage.addItems("text 2");
textStorage.removeItem("text 1");

const numberStorage = new DataStorage<number>();

const namesStorage = new DataStorage<{ name: string }>();

const objName = { name: "Ivan" };
namesStorage.addItems({ name: "Radoslav" });
namesStorage.addItems(objName);

// !!! this is not working because we pass a new ref object
namesStorage.removeItem({ name: "Radoslav" });

// this is correct since we pass the same ref object
namesStorage.removeItem(objName);

console.log(namesStorage.getItems());
