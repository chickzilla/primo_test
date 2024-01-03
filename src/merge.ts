export default function merge(
  collection1: number[],
  collection2: number[]
): number[] {
  let index1 = 0;
  let index2 = 0;
  let ans = new Array<number>();

  while (index1 < collection1.length || index2 < collection2.length) {
    if (index1 >= collection1.length) {
      ans.push(collection2[index2]);
      index2++;
    } else if (index2 >= collection2.length) {
      ans.push(collection1[index1]);
      index1++;
    } else if (collection1[index1] < collection2[index2]) {
      ans.push(collection1[index1]);
      index1++;
    } else {
      ans.push(collection2[index2]);
      index2++;
    }
  }

  return ans;
}
