import mongoose from 'mongoose';
const _SECOND = 5;

// Kiểm tra có bao nhiêu connect trong hệ thống
export const countConnect = () => {
  const numOfConnections = mongoose.connections.length;
  console.log(`Number of connections: ${numOfConnections}`);
};