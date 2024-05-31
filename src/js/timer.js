const pad = s => {
  s = `00${s}`.slice(-2);
  return `<span>${s[0]}</span><span>${s[1]}</span>`;
};

const update = () => {
  const now = new Date();
  let finish = new Date();
  finish.setHours(23, 59, 59, 999);

  if (now.getHours() === 23 && now.getMinutes() === 59 && now.getSeconds() === 59) {
      finish.setDate(finish.getDate() + 1);
  }

  let sec = Math.floor((finish.getTime() - now.getTime()) / 1000);
  const hrs = Math.floor(sec / 3600);
  sec -= hrs * 3600;
  const min = Math.floor(sec / 60);
  sec -= min * 60;

  document.querySelectorAll(".timer").forEach(timer => {
      timer.querySelector(".hours").innerHTML = pad(hrs);
      timer.querySelector(".minutes").innerHTML = pad(min);
      timer.querySelector(".seconds").innerHTML = pad(sec);
  });

  setTimeout(update, 200);
};

update();


export default update


