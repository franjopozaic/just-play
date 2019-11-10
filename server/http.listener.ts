import { httpListener } from '@marblejs/core';
import { logger$ } from '@marblejs/middleware-logger';
import { bodyParser$ } from '@marblejs/middleware-body';
import { api$, notFound$, postPiece$, getPiece$ } from './api.effects';

const middlewares = [
  logger$(),
  bodyParser$(),
];

const effects = [
  api$,
  postPiece$,
  getPiece$,
  notFound$
];

export default httpListener({ middlewares, effects });