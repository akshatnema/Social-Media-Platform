import React from 'react';
import "./profile-main.scss";

const mid = () => {
    const data = [{
        image: "",
        like: "",
        comments: ""
    },
    {
        image: "",
        like: "",
        comments: ""
    },
    {
        image: "",
        like: "",
        comments: ""
    },
    {
        image: "",
        like: "",
        comments: ""
    }]
    return (
        <>

            <div className="pleft-box" id="scroll">

                <div className="pposts">

                    <div className="section">

                        <div className="ppost">

                            post 1
                            {/* style = {{ backgroundImage: `url("abc")` }} */}

                        </div>

                        <div className="ppost">

                            post 2

                        </div>


                        <div className="ppost">

                            post 3

                        </div>


                    </div>



                    <div className="section">

                        <div className="ppost">

                            post 1
                            {/* style = {{ backgroundImage: `url("abc")` }} */}

                        </div>

                        <div className="ppost">

                            post 2

                        </div>


                        <div className="ppost">

                            post 3

                        </div>


                    </div>



                    <div className="section">

                        <div className="ppost">

                            post 1
                            {/* style = {{ backgroundImage: `url("abc")` }} */}

                        </div>

                        <div className="ppost">

                            post 2

                        </div>


                        <div className="ppost">

                            post 3

                        </div>


                    </div>


                </div>

            </div>

        </>
    )
}

export default mid;
