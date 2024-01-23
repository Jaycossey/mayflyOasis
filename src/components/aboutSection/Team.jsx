const Team = (props) => {
    return (
        <div className="flex 
                        flex-col
                        border-2
                        w-60
                        h-80
                        text-center">
            <img src={props.image} className="w-40 h-40 rounded-full border-2 m-auto" />
            <p>{props.name}</p>
            <p>"{props.quote}"</p>
            <p>{props.job}</p>
        </div>
    );
}

export default Team;