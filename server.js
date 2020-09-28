let Koa = require('koa')
let KoaRouter = require('koa-router');


const app = new Koa();
const router = new KoaRouter();

let yuan = {
  name:"yuan",
  age:18
}
router.get('/', (ctx, next) =>{
  ctx.body={
    code:200,
    data: yuan
  }
})
router.get('/login', (ctx, next) =>{
  ctx.body={
    code:200,
    data: '123'
  }
})

app
  .use(router.routes())
  .use(router.allowedMethods())

app.listen('3002', () => {
  console.log('服务器地址: http://localhost:3002');
})