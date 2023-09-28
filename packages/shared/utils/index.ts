export function arrayToTree<
  T extends {
    id: string;
    parentId: string | null | undefined;
    children?: T[];
  },
>(arr: T[], parentId: T['parentId'] = null) {
  const tree: T[] = [];
  for (let i = 0; i < arr.length; i++) {
    const node = arr[i];
    if (node.parentId === parentId) {
      const children = arrayToTree(arr, node.id);
      if (children.length) {
        node.children = children;
      }
      tree.push(node);
    }
  }
  return tree;
}
