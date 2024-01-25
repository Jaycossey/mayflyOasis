const ParaContainer = (props) => {
    // console.log(props);
    return (
        <p className="mb-4 
                    text-lg
                    text-slate-500
                    h-full
                    altBg
                    m-auto
                    w-10/12
                    rounded-md
                    p-6
                    shadow-xl
                    shadow-black">
                {props.text}
        </p>

    );
}

export default ParaContainer;