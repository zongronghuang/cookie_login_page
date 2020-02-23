// 導入套件、外部 JS 及基本設定
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const checkLogin = require('./check_login')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }), cookieParser())

// 建立 GET 路由
// 如果已經有 cookie，就直接抓 cookie 資料，進入到 success 頁面
// 如果沒有 cookie，前往一般的 index 頁面，讓使用者輸入電郵和密碼來登入
app.get('/', (req, res) => {
  if (req.cookies.name) {
    res.render('success', { name: req.cookies.name })
  } else {
    res.render('index')
  }
})

// 建立 POST 路由
app.post('/', (req, res) => {
  const login = req.body
  const result = checkLogin(login.email, login.password)

  // 如果找得到登記的使用者帳密，渲染 success 頁面，並且幫他建立 cookie
  // 如果找不到使用者帳密，渲染 index 頁面
  if (result) {
    res.render('success', { name: result.firstName })
    res.cookie('name', result.firstName)
  } else {
    res.render('index', {
      email: login.email,
      password: login.password,
      warning: true
    })
  }
})

app.listen(port, () => {
  console.log(`Server up and running at http://localhost:${port}`)
})

