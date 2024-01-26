import { Link } from 'react-router-dom';

const ProfileCard = (props) => {
    const artist = props.artist;

    let blank;
    let referrer;
    let link;
    let quote;
    if (artist.id) {
        link = `/artist/${artist.id}`;
    } else {
        link = artist.link;
        blank = "_blank";
        referrer = "noopener noreferrer";
        quote = `'${artist.quote}'`;
    }

    return (
        <div className='artist-card bg-white border bg-opacity-15 backdrop-filter backdrop-blur-md border-gray-300 rounded-lg overflow-hidden shadow-lg max-w-96'
            key={artist.id}
            >
            <img
                src={artist.image}
                alt={artist.name}
                className='artist-image'
                />
            <div className='description p-4 bg-white w-full bg-opacity-50'>
                <h2 className='text-sm font-semibold'>{artist.name}</h2>
                <p className='text-xs text-gray-600'>{artist.occupation}</p>
                {quote}
                <Link to={link} 
                    target={blank}
                    referrer={referrer}
                    className='ViewProfileButton'>
                    View Profile
                </Link>
            </div>
        </div>
    );
}

export default ProfileCard;