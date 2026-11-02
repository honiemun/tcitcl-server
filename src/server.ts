import express, { type Express, type Request, type Response } from 'express';
import { setupDatabase } from './db';
import cors from 'cors';
import 'dotenv/config';

import routes from './routes';

const app: Express = express();
app.use(cors()); // Admit all origins

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);
app.use('/uploads', express.static(process.env.UPLOAD_DIR || '/data/files'));

app.get('/', (req: Request, res: Response) => {
  res.send('TCIT Take-home project API');
});

async function start() {
  await setupDatabase();

  app.listen(PORT, () => {
    console.log(
      (`
  TCIT Take-home project API
  Server running on http://localhost:${PORT}
      `)
    );
  });
}

start().catch((err) => {
  console.log('Failed to start API: ', err);
  process.exit(1);
})
