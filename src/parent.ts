import Child from './child';

class Parent {
  child: Child;

  constructor(child: Child) {
    this.child = child;
  }
}

export default Parent;
