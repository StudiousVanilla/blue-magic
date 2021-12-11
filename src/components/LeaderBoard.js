import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { useState } from 'react';

import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyDhWmeAvdy1e_Il4lZ93o-zFsZXQ1Ix1U0',
  authDomain: 'blue-magic-15014.firebaseapp.com',
  projectId: 'blue-magic-15014',
  storageBucket: 'blue-magic-15014.appspot.com',
  messagingSenderId: '1037124132738',
  appId: '1:1037124132738:web:12159fd6b77c114de1399b',
  // eslint-disable-next-line
  measurementId: '${config.measurementId}',
});

const firestore = firebase.firestore();

const LeaderBoard = () => {

  const scoresRef = firestore.collection('scores');
  const query = scoresRef.orderBy('points', 'desc');
  const [scores] = useCollectionData(query, { idField: 'id' });

  const [pointsUpdate, setPointsUpdate] = useState({
    positive: { Alan: null, Aji: null, Andrew: null, Oisín: null },
    negative: { Alan: null, Aji: null, Andrew: null, Oisín: null },
  });

  const removePoints = (name) => {
    setPointsUpdate((prevState) => ({
      ...prevState,
      negative: {
        ...prevState.negative,
        [name]: prevState.negative[name] - 1,
      },
    }));
  };

  const addPoints = (name) => {
    setPointsUpdate((prevState) => ({
      ...prevState,
      positive: {
        ...prevState.positive,
        [name]: prevState.positive[name] + 1,
      },
    }));
  };

  const updateScores = () =>{

    const ajiObject = scores.filter(obj => {
      return obj.name === 'Aji'
    })
    const alanObject = scores.filter(obj => {
      return obj.name === 'Alan'
    })
    const andrewObject = scores.filter(obj => {
      return obj.name === 'Andrew'
    })
    const oisinObject = scores.filter(obj => {
      return obj.name === 'Oisín'
    })


    const newAjiScore = ajiObject[0].points+ pointsUpdate.positive.Aji + pointsUpdate.negative.Aji

    const newAlanScore = alanObject[0].points+ pointsUpdate.positive.Alan + pointsUpdate.negative.Alan

    const newAndrewScore = andrewObject[0].points+ pointsUpdate.positive.Andrew + pointsUpdate.negative.Andrew

    const newOisínScore = oisinObject[0].points+ pointsUpdate.positive.Oisín + pointsUpdate.negative.Oisín


    console.log(newAjiScore)
    console.log(newAlanScore)
    console.log(newAndrewScore)
    console.log(newOisínScore)

    // update database

    // scoresRef.doc(id).update({
    //   title: 'zkoder new Tut#1'
    // });


    


    setPointsUpdate({
      positive: { Alan: null, Aji: null, Andrew: null, Oisín: null },
      negative: { Alan: null, Aji: null, Andrew: null, Oisín: null },
    })


  }

  

  return (
    <div className="h-screen flex flex-col justify-evenly items-start">
      {scores !== undefined && (
        <div className="h-4/5 w-full flex flex-col justify-evenly items-center">
          {scores.map((score) => (
            <div
              key={score.id}
              className="w-4/5 flex justify-between items-center flex-wrap mb-8"
            >
              <span className="w-full mb-4 font-jersey text-5xl text-leinster-blue">
                {score.name}
              </span>

              <div className="w-full flex justify-center items-center">
                <span className="w-1/6 flex justify-start items-center text-2xl font-body text-red-400">
                  {pointsUpdate.negative[score.name]}
                </span>

                <span
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-leinster-blue"
                  onClick={() => removePoints(score.name)}
                >
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
                      d="M20 12H4"
                    />
                  </svg>
                </span>

                <span className="w-1/2 text-4xl font-body text-leinster-gold">
                  {score.points}
                </span>

                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-leinster-blue"
                onClick={()=>addPoints(score.name)}>
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

                <span className="w-1/6 flex justify-end items-center text-2xl font-body text-green-400">
                  {pointsUpdate.positive[score.name]}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="h-16 w-full flex justify-center items-center -mt-10">
        <button className="h-14 w-32 text-2xl rounded-3xl font-body text-white bg-leinster-blue"
        onClick={updateScores}>
          Update
        </button>
      </div>
    </div>
  );
};

export default LeaderBoard;
