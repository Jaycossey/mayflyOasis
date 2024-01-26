import { Link } from 'react-router-dom';

const ProfileCard = (props) => {
    const artist = props.artist;

    let link;
    if (props.artist) {
        link = `/artist/${artist.id}`;
    } 
    // if(props.team) {
    //     link = team.link;
    // }

    return (
        <div className='artist-card bg-white border bg-opacity-5 backdrop-filter backdrop-blur-md border-gray-300 rounded-lg overflow-hidden shadow-lg'
            key={artist.id}
            >
            <img
                src={artist.image}
                alt={artist.name}
                className='artist-image'
                />
            <div className='description p-4'>
                <h2 className='text-sm font-semibold'>{artist.name}</h2>
                <p className='text-xs text-gray-600'>{artist.occupation}</p>
                <Link to={link} className='ViewProfileButton'>
                    View Profile
                </Link>
            </div>
        </div>
    );
}

export default ProfileCard;