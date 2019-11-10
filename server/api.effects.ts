import { r, HttpEffect, HttpError, HttpStatus } from "@marblejs/core";
import { mapTo, map, tap, mergeMap } from "rxjs/operators";
import { throwError } from "rxjs";
import { DummyDB } from "./db";
import { Piece } from './models'

const db = new DummyDB();

const helloEffects$: HttpEffect = req$ =>
  req$.pipe(mapTo({ body: "Hello world!" }));

export const api$ = r.pipe(
  r.matchPath("/"),
  r.matchType("GET"),
  r.useEffect(helloEffects$)
);

export const postPiece$ = r.pipe(
  r.matchPath("/pieces"),
  r.matchType("POST"),
  r.useEffect(req$ =>
    req$.pipe(
      tap(req => db.savePiece(req.body as Piece)),
      map(_ => ({ status: 200 }))
    )
  )
);

export const getPiece$ = r.pipe(
   r.matchPath("/pieces"),
   r.matchType("GET"),
   r.useEffect(req$ =>
     req$.pipe(
       map(_ => ({ status: 200, body: db.getAll() }))
     )
   )
 );

export const notFound$ = r.pipe(
  r.matchPath("*"),
  r.matchType("*"),
  r.useEffect(req$ =>
    req$.pipe(
      mergeMap(() =>
        throwError(new HttpError("Route not found bre", HttpStatus.NOT_FOUND))
      )
    )
  )
);
