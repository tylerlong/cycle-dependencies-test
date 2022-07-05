export interface ParentInterface {
  child: ChildInterface
}

export interface ChildInterface {
  parent: ParentInterface
}
