import { ParentInterface } from './interfaces';

class Child {
  parent: ParentInterface;

  constructor(parent: ParentInterface) {
    this.parent = parent;
  }
}

export default Child;
