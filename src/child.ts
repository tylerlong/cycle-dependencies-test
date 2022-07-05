import Parent from './parent';

class Child {
  parent: Parent;

  constructor(parent: Parent) {
    this.parent = parent;
  }
}

export default Child;
