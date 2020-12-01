import React,{Fragment} from 'react'

function Tomiframe({Link}) {
    const code = Link;
    return (
        <Fragment>
            <div className="container">
              <iframe src={`https://play.tomi.digital/auth?code=${code}`}></iframe>
            </div>           
        </Fragment>
    )
}

export default Tomiframe

