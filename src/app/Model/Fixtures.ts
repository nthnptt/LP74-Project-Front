export const materialFixtures = [
  {name: 'Coal', author: 'Bob', lastUpdate: '12 dec. 2015'},
  {name: 'Iron', author: 'Bob', lastUpdate: '12 dec. 2015'},
  {name: 'Steel', author: 'Bob', lastUpdate: '12 dec. 2015'},
];
export const projectsFixtures = [
  {
    name: 'Test A',
    author: 'Bob',
    lastUpdate: '12 dec. 2015',
    inputs: [{material: materialFixtures[0], needed: 3}, {material: materialFixtures[1], needed: 3}],
    outputs: [{material: materialFixtures[2], number: 3, time: 10}]
  },
  {
    name: 'Test B',
    author: 'Bob',
    lastUpdate: '13 dec. 2015',
    inputs: [{material: materialFixtures[0], needed: 3}],
    outputs: [{material: materialFixtures[0], number: 3, time: 0}]
  },
  {
    name: 'Test C',
    author: 'Bob',
    lastUpdate: '13 dec. 2015',
    inputs: [{material: materialFixtures[1], needed: 10}],
    outputs: [{material: materialFixtures[2], number: 5, time: 120}]
  },
];
