import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyDhWmeAvdy1e_Il4lZ93o-zFsZXQ1Ix1U0',
  authDomain: 'blue-magic-15014.firebaseapp.com',
  projectId: 'blue-magic-15014',
  storageBucket: 'blue-magic-15014.appspot.com',
  messagingSenderId: '1037124132738',
  appId: '1:1037124132738:web:12159fd6b77c114de1399b',
  measurementId: '${config.measurementId}',
});

const firestore = firebase.firestore();

const LeaderBoard = () => {
  const scoresRef = firestore.collection('scores');
  const query = scoresRef.orderBy('points', 'desc');
  const [scores] = useCollectionData(query, { idField: 'id' });

  return (
    <div className="h-full flex flex-col justify-evenly items-center">
      {scores != undefined && (
        <div className="bg-gray-100 h-4/5 w-2/3 flex flex-col justify-evenly items-center">
          {scores.map((score) => (
            <div key={score.id} className="w-2/3 flex justify-evenly bg-gray-400">
                <span className="text-3xl text-leinster-blue">{score.name}</span>
                <span className="text-3xl text-leinster-blue">{score.points}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeaderBoard;
