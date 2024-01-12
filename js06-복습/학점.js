let num = parseInt(prompt("중간고사 점수를 입력하세요."))

if(num >= 90){

    const p = document.createElement("p")
        p.textContent = `나의 점수는 ${num}, 학점은 A! 아주 잘했어요.`
        container.append(p)

}else if(num >=80){
    const p = document.createElement("p")
        p.textContent = `나의 점수는 ${num}, 학점은 B! 노력했군요.`
        container.append(p)

}else if(num >= 70){
    const p = document.createElement("p")
        p.textContent = `나의 점수는 ${num}, 학점은 C! 잘했어요.`
        container.append(p)

}else if(num >= 60){
    const p = document.createElement("p")
    p.textContent = `나의 점수는 ${num}, 학점은 D! 조금 더 열심히 헤볼까요.`
    container.append(p)
}
else if(num < 60){
    const p = document.createElement("p")
    p.textContent = `나의 점수는 ${num}, 학점은 F! 분발하세요.`
    container.append(p)
}
else{
    alert("잘못 입력하셨습니다.")
}