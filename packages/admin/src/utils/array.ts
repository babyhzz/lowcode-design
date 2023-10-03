export function treeToArray<
  T extends {
    id: string;
    children: T[] | undefined;
  } = any,
>(tree: T[] | undefined) {
  if (!tree) return [];

  const arr: T[] = [];
  for (let i = 0; i < tree.length; i++) {
    const node = tree[i];
    arr.push(node);

    if (node.children?.length) {
      const children = treeToArray(node.children) || [];
      arr.push(...children);
    }
  }
  return arr;
}
