const colArr = ['blue']
colArr.splice(0,0,'red')
colArr.push('green')
console.log(colArr)
for(let i=0; i<colArr.length;i++){
    console.log((colArr[i]).charAt(0).toUpperCase() + colArr[i].slice(1))
}