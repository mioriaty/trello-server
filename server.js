import app from './src/app';

const PORT = 1234;

const server = app.listen(PORT, () => {
  console.log('WSV started on port:', PORT);
});

// eslint-disable-next-line no-undef
process.on('SIGINT', () => {
  server.close(() => console.log('Exit Server Express'));
});
