// data-source.ts
import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
  type: 'oracle',
  host: 'localhost',
  port: 1521,
  username: 'system',
  password: '28112000',
  serviceName: 'FREEPDB1', // atau serviceName: 'your_service_name'
  synchronize: true,
  entities: ['src/entity/**/*.ts'],
});
