import React, { useEffect, useState} from 'react'
import './ProgressBar.css';


const ProgressBar = (props) => {
    const [offset, setOffset] = useState(0); 
    const {
        size,
        progress,
        strokeWidth,
        circleOneStroke,
        circleTwoStroke
    } = props;

    const center = size / 2;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        const progressOffset = ((100 - progress) / 100) * circumference;
        setOffset(progressOffset);
    }, [setOffset, progress, circumference, offset]);
    
    return (
        <div>
            <svg className="circular-chart" width={size} height={size}>
                <circle 
                    className="circle-bg" 
                    stroke={circleOneStroke} 
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                />
                <circle
                    className="circle"
                    stroke={circleTwoStroke}
                    cx={center}
                    cy={center}
                    radius={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
                <text
                    x={center}
                    y={center}
                    className="percentage">
                    {progress}%
                </text>
            </svg>
        </div>
    )
}

export default ProgressBar
