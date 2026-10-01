const NICKNAME_KEY = 'site_nickname'
const ROLE_KEY = 'site_role'
const ADMIN_NAME = '思切喵'

function getNickname() {
  return localStorage.getItem(NICKNAME_KEY) || ''
}

function getRole() {
  return localStorage.getItem(ROLE_KEY) || ''
}

function isAdmin() {
  return getRole() === 'admin'
}

function setNickname(name) {
  localStorage.setItem(NICKNAME_KEY, name)
  localStorage.setItem(ROLE_KEY, name === ADMIN_NAME ? 'admin' : 'guest')
}

function clearNickname() {
  localStorage.removeItem(NICKNAME_KEY)
  localStorage.removeItem(ROLE_KEY)
}

window.Nick = {
  getNickname,
  setNickname,
  clearNickname,
  getRole,
  isAdmin,
  ADMIN_NAME
}
