// Button component to iterate through artist spotlight
const Button = (props) => {

    return (
        <button type="button" 
            id={props.direction}
            onClick={props.onClick}
            className="w-14 
                    h-14
                    border-4
                    border-slate-300
                    border-double
                    rounded-full
                    cursor-pointer
                    bg-slate-400
                    text-lg
                    text-center
                    row-start-4
                    m-auto
                    shadow-lg
                    shadow-slate-200
                    hover:scale-105 
                    transition" >
            {/* Inner text content for button */}
            {props.direction}
        </button>
    );
}

export default Button;