import usersRouter from '../todo/usersRoutes';
import newsRouter from '../todo/newsRoutes';
import express from 'express';
import path from "path";
const root = path.join(path.dirname(require.main.filename), '/../assets');

export default function routes(app) {
    app.use('/', newsRouter);
    app.use('/users', usersRouter);
    app.use('/assets', express.static(root));
}