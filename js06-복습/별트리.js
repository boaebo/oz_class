// 1번 별
for(let star = 0; star < 5; star++ ){
  console.log('*'.repeat(star + 1))  
  }

// 2번 별
for(let star = 0; star < 5; star++){
  console.log('*'.repeat(star + 1))
}
for(let star = 5; star >= 1; star--){
  console.log('*'.repeat(star))
}

// 3번 별
for(let star = 1; star <= 9; star +=2){
  console.log(' '.repeat((9 - star) / 2) + '*'.repeat(star))
}
for(let star = 9; star >= 1; star -=2){
  console.log(' '.repeat((9 - star) / 2) + '*'.repeat(star))
}
