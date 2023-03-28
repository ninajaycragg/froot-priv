import React from 'react'

const Progress_bar = ({bgcolor,progress,height}) => {

    const Parentdiv = {
        position: 'fixed',
        right: 0,
        bottom: 0,
        left: 0,
        height: height,
        width: '100%',
        backgroundColor: '#FAF8F1',
        borderRadius: 10,
        margin: 0
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
        borderRadius:12,
        textAlign: 'right',
        opacity: 0.2
    }

    const progresstext = {
        padding: 10,
        color: 'white',
        'font-family': 'Inter',
        fontWeight: 90
    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={progresstext}>{`${progress}%`}</span>
            </div>
        </div>
    )
}

export default Progress_bar;