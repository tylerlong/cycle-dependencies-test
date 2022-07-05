import { ChildInterface } from './interfaces';

class Parent {
  child: ChildInterface;

  constructor(child: ChildInterface) {
    this.child = child;
  }
}

export default Parent;
