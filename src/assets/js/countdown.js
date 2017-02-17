function countdown(y, m, d, h, min, s) {
	let nowDate = new Date();
    let endDate = new Date(y, m - 1, d, h, min, s);
    let leftTime = endDate.getTime() - nowDate.getTime();
    let leftsecond = parseInt(leftTime / 1000);
    let day = Math.floor(leftsecond / (60 * 60 * 24));
    let hour = Math.floor((leftsecond - day * 24 * 60 * 60) / 3600);
    let minute = Math.floor((leftsecond - day * 24 * 60 * 60 - hour * 3600) / 60);
    let second = Math.floor(leftsecond - day * 24 * 60 * 60 - hour * 3600 - minute * 60);
    return {
        day: day,
        hour: hour,
        minute: minute,
        second: second
    }
}

export {
	countdown
} 