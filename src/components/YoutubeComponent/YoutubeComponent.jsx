import React from 'react';
import './YoutubeComponent.css';

const YoutubeComponent = (props) => {
        // console.log(props.time);
        return (
    
            <div className="youtube-wrapper">
                <div className="img-thumb">
                    <img src="https://i.ytimg.com/vi/vouCld8_udI/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLCN5PAvO-0gQ9w3oph2hP0YmCYgEQ" alt="Ariel NOAH"/>
                <p className="time">{ props.time }</p>
                </div>
                <p className="title">{ props.desc }</p>
                <p className="desc"> { props.title } </p>
            </div>
        )
    
}

YoutubeComponent.defaultProps = {
    time:  'yea boi',
    desc: 'NULL',
    title: 'Null'
}

export default YoutubeComponent;
