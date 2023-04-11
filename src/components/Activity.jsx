import React from 'react'

function Activity() {
  return (
    <>
      <div className="activity">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                   <div className="card">
                   <div className="job-post">
                        <div className="img">
                        <i class="fa-sharp fa-solid fa-clock"></i>
                        </div>
                        <div className="content">
                            <p className='fs-3'><b>17000</b></p>
                            <p>JOB POST</p>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                   <div className="card">
                   <div className="total-users">
                    <div className="img"><i class="fa-solid fa-users"></i></div>
                        <div className="content">
                        <p  className='fs-3'><b>17000</b></p>
                            <p>TOTAL USER</p>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                   <div className="card">
                   <div className="task-done">
                    <div className="img"><i class="fa-sharp fa-solid fa-circle-check"></i></div>
                        <div className="content">
                        <p  className='fs-3'><b>17000</b></p>
                            <p>COMPLEATE TASK</p>
                        </div>
                    </div>
                   </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                   <div className="card">
                   <div className="paid">
                    <div className="img"><i class="fa-solid fa-wallet"></i></div>
                        <div className="content">
                        <p  className='fs-3'><b>17000</b></p>
                            <p>TOTAL PAID</p>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Activity
