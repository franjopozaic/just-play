import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as R from 'ramda';
// import {QuerySnapshot} from '@google-cloud/firestore'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
admin.initializeApp({ credential: admin.credential.applicationDefault() });

export const randomSong = functions.https.onRequest((request, response) => {
  admin
    .firestore()
    .collection('journal')
    .get()
    .then((items) => {
      const allDocs = items.docs.map((d) => d.data());
      console.log('Docs', allDocs);

      const song = getRandomSong(allDocs);
      console.log('Random', song);
      response.send(song);
    })
    .catch((_) => response.send([0]));
});



const getRandomSong = R.pipe(
  R.map((item: any) => item.songs || []),
  R.flatten,
  R.map(R.pick(['artist', 'title', 'videoUrl'])),
  R.pick([`${Math.floor(Math.random() * 2)}`])
)