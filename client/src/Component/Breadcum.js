import React from 'react'

function Breadcum(props) {
    const {title,breadcumList} = props;
    return (
        <div className='breadcum'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-12">
                        <h1 className="breadcum-title">
                            {title}
                        </h1>
                    </div>
                    <div className="col-lg-6 col-12">
                        <ul className="breadcum-list">
                                {breadcumList ? breadcumList.map((item,stt)=><li key={stt} className='breadcum-item'>{item}<i className="fas fa-chevron-right"></i></li>) : ''}
                                <p className="breadcum-current">
                                    {title}
                                </p>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Breadcum;
