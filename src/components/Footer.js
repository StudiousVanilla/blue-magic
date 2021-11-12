import { Link } from 'react-router-dom';
import { UserGroupIcon, InformationCircleIcon, ClipboardIcon } from '@heroicons/react/solid'

const Footer = () => {

  // function to change colors of links when clikced (gold clicked, white not clicked)
    const changeIconColors = (id) =>{

        // remove all gold classes
       document.querySelectorAll('.footer-icon').forEach(function(icon) {
        icon.classList.remove("text-leinster-gold")
    });

        // make chosen icon gold
        const target = document.querySelector(`#${id}`)
        target.classList.add("text-leinster-gold")
    }

  return (
    <footer className="h-1/10 flex justify-center items-center bg-leinster-blue">
      <div className="w-full flex justify-evenly items-center">
          <div className="w-full flex flex-col justify-center items-center mt-1 mb-1">
            <Link to="/">
            {/* Icon color set to gold as it is the homepage */}
                <UserGroupIcon onClick={()=>changeIconColors('userIcon')} id="userIcon" className="footer-icon h-9 w-9 text-white text-leinster-gold"/>
            </Link>
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-1 mb-1">
            <Link to="/scoring">
                <InformationCircleIcon onClick={()=>changeIconColors('scoreIcon')} id="scoreIcon" className="footer-icon h-9 w-9 text-white"/>
            </Link>
          </div>
          <div className="w-full flex flex-col justify-center items-center mt-1 mb-1">
            <Link to="/leaderboard">
                <ClipboardIcon onClick={()=>changeIconColors('leaderIcon')} id="leaderIcon" className="footer-icon h-9 w-9 text-white"/>
            </Link>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
