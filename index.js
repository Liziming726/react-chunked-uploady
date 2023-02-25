const express = require('express')
const app = express()
const fs = require('fs')
const pathLib = require('path')
// 引入body-parser中间件，用来处理post请求体body中的数据
const bodyParser = require('body-parser')
// 引入multer中间件，用于处理上传的文件数据
const multer = require('multer')
const cors = require('cors');
app.use(cors({ origin: 'http://localhost:5173' }));

const server = app.listen(3000, function(){
  console.log('running on port 3000')
})

// 读取静态资源
app.use(express.static('public'))
// 通过配置multer的dest属性， 将文件储存在项目下的tmp文件中
app.use(multer({ dest: './tmp/' }).any())

// app.get('http://localhost:5173', function(req, res){
//   // 将public下的index.html文件返回去
//   res.sendFile(__dirname + 'http://localhost:5173')
// })

// 文件上传接口
app.post('/fileUpload', function(req, res){
  // 上传的文件在req.files中
  const filename = req.files[0].path + pathLib.parse(req.files[0].originalname).ext
  fs.rename(req.files[0].path, filename, function(err){
    if(err){
      res.send(err)
    }else{
      res.send('upload successfully')
    }
  })
})
