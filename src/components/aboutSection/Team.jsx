// Dev Team card
const Team = (props) => {
    return (
        <div className="flex 
                        flex-col
                        rounded-xl
                        shadow-slate-200
                        shadow-xl
                        w-60
                        h-80
                        text-center
                        bg-slate-600
                        bg-opacity-50
                        p-6 
                        text-xs">

            <img src={props.image} 
                className="w-40
                        h-40 
                        rounded-full 
                        border-4
                        border-red-300 
                        m-auto" />

            <p>{props.name}</p>
            <p>"{props.quote}"</p>
            <p>{props.job}</p>

        </div>
    );
}

export default Team;