import React from 'react'
import "./intro.css"

const Introduction = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-intro">Hello there,</h2>
                    <h1 className="i-name">I'm Suz Topp</h1>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Associate Software Engineer</div>
                            <div className="i-title-item">Backend API Engineer</div>
                            <div className="i-title-item">Career Changer</div>
                            <div className="i-title-item">Determined</div>



                        </div>
                    </div>
                </div>
            </div>
            <div className="i-right">right</div>
        </div>
    )
}

export default Introduction;