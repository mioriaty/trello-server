import compression from 'compression';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

// init middleware
app.use(morgan('dev')); // logger
app.use(helmet()); // bảo vệ những thông tin riêng tư, ngăn chặn những trang thứ 3 vào đọc cookie...
app.use(compression());

// init db
// require('./database/init.mongo');

// init routes
app.get('/', (req, res) => {
  return res.status(500).json({
    message: 'hello world'
  });
});

// handling error

export default app;
