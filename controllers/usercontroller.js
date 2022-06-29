
const fileSystem = require('../utils/fileSystem');

function readAll() {
  let items = [];
  items = fileSystem.readData();
  if (items.length==0) {
    return 'No Data Found';
  }
  return items;
}

function createItem(item) {
  // if (readItem(item.id)) {
  //   throw new Error(`item with id: ${item.id} already exists`);
  // }
    let items = [];

   items = fileSystem.readData();
item.id = items.length+1;
  items.push(item);
  fileSystem.writeData(items);
}


function readItem(id) {
    let items = [];

  items = fileSystem.readData();
  return items.find((item) => item.id === parseInt(id));
}

function updateItem(id, newItem) {
    let items = [];

  items = fileSystem.readData();
  const index = items.findIndex((item) => item.id === parseInt(id));

  if (index === -1) {
    throw new Error(`Customer with id: ${id} doesn't exists`);
  }

  newItem.id = id;
  items[index] = newItem;
  fileSystem.writeData(items);
  return newItem;
}

function deleteItem(id) {
    let items = [];

  items = fileSystem.readData();
  const index = items.findIndex((item) => item.id === parseInt(id));

  if (index === -1) {
    throw new Error(`Customer with id: ${item.id} doesn't exists`);
  }

  items.splice(index, 1);
  items = fileSystem.writeData(items);
}

module.exports = {
  readAll,
  createItem,
  readItem,
  updateItem,
  deleteItem,
};