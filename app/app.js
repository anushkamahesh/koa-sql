import Koa from 'koa'
import logger  from 'koa-logger';

const app = new Koa()

const env = process.env.NODE_ENV || 'development';

if ('production' != env) app.use(logger());

// response
app.use(async (ctx, next) => {
	ctx.body = 'Hello World'
})
let port = process.env.PORT || 3000;

app.listen(port, () => console.log('Server started ' + port));

export default app