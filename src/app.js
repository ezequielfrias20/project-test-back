import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';

import { config } from './config/config.js';
import './libs/database.cjs';

import authRouter from './api/auth/infraestructure/routes/auth.routes.js';
import billsRouter from './api/bills/infraestructure/routes/bills.routes.js';

const app = express();


app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// Variables
app.set('port', config.PORT);
app.set('json spaces', 2);

// Routes
app.use('/login', authRouter);
app.use('/bills', billsRouter);


export default app;
