export const Project = (props) =>{
    return <div className="ProjectInfo" id="projectInfo">
    <h1>{props.title}</h1>
    
    <div className="projectLink" onclick={()=>{
            window.open("https://www.w3schools.com");

            }}>
        <input value={props.link} onFocus={()=>{
            window.open(props.link);

            }} />
    </div>
    <div className="ProjectImage">
        <img src={props.image} style={props.image==null?{display:"none"}:{display:"block"}}/>
    </div>
    <p>{props.description}</p>
    <span>Duration: {props.duration}</span>
</div>
}