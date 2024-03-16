import React from 'react'

function Breadcrumb(props) {
  return (
    <div>
        <div className="container-fluid page-header mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container">
            <h1 className="display-3 mb-3 animated slideInDown">{props.title}</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a className="text-body" href="#">Anasayfa</a></li>
                    {/*<li className="breadcrumb-item"><a className="text-body" href="#">Pages</a></li>*/}
                    <li className="breadcrumb-item text-dark active" aria-current="page">{props.page}</li>
                </ol>
            </nav>
        </div>
    </div>
    </div>
  )
}

export default Breadcrumb