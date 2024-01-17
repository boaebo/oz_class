
// 남은 시간

function displayremainTime(targetDate){
    const now = new Date();
    const endDate = new Date(targetDate);
    const timeRemain = endDate - now;

    const days = Math.floor(timeRemain / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemain % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemain % (1000 * 60)) / 1000);

    document.getElementById('countdown').textContent
    = `올 해는 ${days}일 ${hours}시간 ${minutes}분 ${seconds}초 남았어요!` ;
}

const targetDate =  new Date('2024-12-31T23:59:59').getTime();

setInterval(() => {
    displayremainTime(targetDate);
},1000);

// 현재시간

function todayTime(){
    const today = new Date();
    document.getElementById('time').textContent
    = `현재 시간 ${today}`;

}

setInterval(() => {
    todayTime();
},1000);