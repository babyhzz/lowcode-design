type Tree<T> = (T & { children?: T[] })[];

// 厉害！！！
export function arrayToTree(arr, parentId = null) {
  const tree = [];
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
