function objArraySort(obj, pro1, pro2, pro3) {
    const pro1SortArray = [...obj.sort(
        (a, b) => a[pro1] > b[pro1] ? -1 : a[pro1] < b[pro1] ? 1 : a[pro2] - b[pro2]
    ).reverse()];
    const pro2SortArray = [...obj.sort((a, b) => a[pro2] - b[pro2]).reverse()];
    console.log(obj);
    console.log(pro1SortArray);
    console.log(pro2SortArray);
    return pro2SortArray;
}

export default objArraySort