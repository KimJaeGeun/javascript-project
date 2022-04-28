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

const testArray = [
    {
        name: 'aaa',
        nick: 'a2',
        num: 98,
        total: 100
    },
    {
        name: 'aaa',
        nick: 'a3',
        num: 10,
        total: 100
    },
    {
        name: 'bbb',
        nick: 'b1',
        num: 680,
        total: 200
    },
    {
        name: 'ccc',
        nick: 'c3',
        num: 40,
        total: 300
    },
    {
        name: 'ccc',
        nick: 'c2',
        num: 56345,
        total: 300
    },
    {
        name: 'ccc',
        nick: 'c1',
        num: 123,
        total: 300
    },
    {
        name: 'aaa',
        nick: 'a1',
        num: 107,
        total: 100
    },
    {
        name: 'ddd',
        nick: 'd1',
        num: 10,
        total: 400
    },
    {
        name: 'bbb',
        nick: 'b3',
        num: 120,
        total: 200
    },
    {
        name: 'bbb',
        nick: 'b2',
        num: 1,
        total: 200
    },

]

// 객체 배열 복합 정렬 예시
function objArraySort2() {
    const sortList = testArray.sort(
        (a, b) =>
            a['total'] < b['total'] ? -1
            : a['total'] > b['total'] ? 1
            : a['num'] < b['num'] ? -1
            : a['num'] > b['num'] ? 1 : 0
    ).reverse();
    console.log(sortList)
}

export { objArraySort, objArraySort2 }