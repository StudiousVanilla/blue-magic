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
    <div className="h-screen flex flex-col justify-evenly items-start">
      {scores !== undefined && (
        <div className="h-4/5 w-full flex flex-col justify-evenly items-center">
          {scores.map((score) => (
            <div
              key={score.id}
              className="w-3/4 flex justify-between items-center flex-wrap mb-8"
            >
              <span className="w-full mb-4 font-jersey text-5xl text-leinster-blue">
                {score.name}
              </span>

              <div className="w-full flex justify-center items-center">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-leinster-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 12H4"
                    />
                  </svg>
                </span>

                <span className="w-1/2 text-4xl font-body text-leinster-gold">
                  {score.points}
                </span>

                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-leinster-blue">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="h-16 w-full flex justify-center items-center -mt-10">
        <button className="h-14 w-32 text-2xl rounded-3xl font-body text-white bg-leinster-blue">Update</button>
      </div>
    </div>
  );
};

export default LeaderBoard;
