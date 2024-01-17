// Button component to iterate through artist spotlight
const Button = (props) => {
    return (
        <button type="button" 
            className="w-10 
                    h-20
                    border-2
                    border-black
                    border-dashed
                    rounded-xl
                    cursor-pointer
                    bg-slate-400
                    font-xl
                    row-start-4
                    m-auto" >
            {/* Inner text content for button */}
            {props.direction}
        </button>
    );
}

export default Button;