export const materialFixtures = [
  {id: 1, name: 'Coal', author: 'Bob', lastUpdate: '12 dec. 2015'},
  {id: 2, name: 'Iron', author: 'Bob', lastUpdate: '12 dec. 2015'},
  {id: 3, name: 'Steel', author: 'Bob', lastUpdate: '12 dec. 2015'},
];
export const projectsFixtures = [
  {
    id: 0,
    name: 'Test A',
    author: 'Bob',
    lastUpdate: '12 dec. 2015',
    inputs: [{material: materialFixtures[0], needed: 3}, {material: materialFixtures[1], needed: 3}],
    outputs: [{material: materialFixtures[2], number: 3, time: 10}]
  },
  {
    id: 1,
    name: 'Mon projet B',
    author: 'Bob',
    lastUpdate: '13 dec. 2015',
    inputs: [{material: materialFixtures[0], needed: 3}],
    outputs: [{material: materialFixtures[0], number: 3, time: 0}]
  },
  {
    id: 2,
    name: 'Test C',
    author: 'Bob',
    lastUpdate: '13 dec. 2015',
    inputs: [{material: materialFixtures[1], needed: 10}],
    outputs: [{material: materialFixtures[2], number: 5, time: 120}]
  },
];
export const engineFixtures = [
  {
    id: 1,
    name: 'Furnace',
    author: 'Bob',
    lastUpdate: '26 jui. 2017',
    inputs: [{material: materialFixtures[1], needed: 10}],
    outputs: [{material: materialFixtures[2], number: 5, time: 120}]
  },
  {
    id: 2,
    name: 'Furnace',
    author: 'Bob',
    lastUpdate: '26 jui. 2017',
    inputs: [{material: materialFixtures[1], needed: 10}],
    outputs: [{material: materialFixtures[2], number: 5, time: 120}]
  },
  {
    id: 3,
    name: 'Furnace',
    author: 'Bob',
    lastUpdate: '26 jui. 2017',
    inputs: [{material: materialFixtures[1], needed: 10}],
    outputs: [{material: materialFixtures[2], number: 5, time: 120}]
  },
];
