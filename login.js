const Lgform = document.querySelector("#loginform");
const LgIDinput = document.querySelector("#loginform #Id");
const LgPWinput = document.querySelector("#loginform #PW");
const showgre = document.querySelector("#showwelcome");
const inputbutton = document.querySelector("#lgbutton");
const USERNAME_KEY = "userid";
const PASSWORD_KEY = "password";
const HIDDEN = "hidden";

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  Lgform.classList.remove(HIDDEN);
  localStorage.setItem(USERNAME_KEY, "이선호");
  localStorage.setItem(PASSWORD_KEY, "980803");
}

function showtitle(username) {
  showgre.innerText = `${username}님 환영합니다.`;
  showgre.classList.remove(HIDDEN);
}
inputbutton.addEventListener("click", login);
function login(event) {
  event.preventDefault();

  const username = LgIDinput.value;
  const userpw = LgPWinput.value;
  if (username === "이선호") {
    if (userpw == "980803") {
      Lgform.classList.add(HIDDEN);
      alert("로그인 되었습니다.");
      showtitle(savedUsername);
    } else {
      alert("비밀번호를 체크해주세요");
    }
  } else alert("아이디가 확인되지 않습니다.");
}
