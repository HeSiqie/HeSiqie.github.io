const NICKNAME_KEY = 'site_nickname'

function getNickname() {
  return localStorage.getItem(NICKNAME_KEY) || ''
}

function setNickname(name) {
  localStorage.setItem(NICKNAME_KEY, name)
}

function clearNickname() {
  localStorage.removeItem(NICKNAME_KEY)
}

window.Nick = { getNickname, setNickname, clearNickname }
