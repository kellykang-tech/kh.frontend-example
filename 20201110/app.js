const express = require('express')  //import 같은 것
const app = express()   //new 안해도 됨
const port = 6600   //포트 번호

//현재 디렉토리에 있는 파일(static file)을 서빙
app.use(express.static('.'))    //이건 뭔지 모름

const bp = require('body-parser')
app.use(bp.json())
app.use(bp.urlencoded({extended: true}))

//login으로 post 요청 시 값 그대로 출력
// post메소드로 받겠다
app.post('/login',(req, res) => {
    console.log('Connection has been established.');
    console.log(req.body)
})

//서버 실행
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})

//서버를 열고 닫고

