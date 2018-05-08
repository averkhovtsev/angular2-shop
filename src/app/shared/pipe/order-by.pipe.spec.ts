import {OrderByPipe} from './order-by.pipe';

describe('OrderByPipe', () => {

  const pipe = new OrderByPipe();

  const objs = [
    {name: 'Kolya', age: 41},
    {name: 'Vasya', age: 30},
    {name: 'Ann', age: 12},
    {name: 'Petya', age: 12},
    {name: 'Joe', age: 13},
    {name: 'Jack', age: 10},
  ];

  it('orders by string asc', () => {
    expect(pipe.transform(objs, 'name', true).map(item => item.name)).toEqual([ 'Ann', 'Jack', 'Joe', 'Kolya', 'Petya', 'Vasya' ]);
  });

  it('orders by string desc', () => {
    expect(pipe.transform(objs, 'name', false).map(item => item.name)).toEqual([ 'Vasya', 'Petya', 'Kolya', 'Joe',  'Jack', 'Ann' ]);
  });

  it('orders by number asc', () => {
    expect(pipe.transform(objs, 'age', true).map(item => item.age)).toEqual([10, 12, 12, 13, 30, 41]);
  });

  it('orders by number desc', () => {
    expect(pipe.transform(objs, 'age', false).map(item => item.age)).toEqual([41, 30, 13, 12, 12, 10]);
  });
});
