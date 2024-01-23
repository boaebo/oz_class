let arr = [
    {name: '짱구', result: '45'},
    {name: '맹구', result: '75'},
    {name: '철수', result: '95'},
    {name: '훈이', result: '50'},
    {name: '유리', result: '68'},
    {name: '수지', result: '86'},

]


arr.filter(function bestScore(arr){
    if(arr.result >= 75){
       document.write(`${arr.name} `)
    }
});

