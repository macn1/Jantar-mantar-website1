import React from 'react'

import './preserv.css'

import img1 from '../../folder/100.jpg'

function Preserving() {
    return (
        <div>
            <div className='heri'>

                <div className='container hell'>

                    <div className='row'>

                        <div className='col-12  text-center' >
                            <h1 className='text-white' >Preserving the Legacy of Jantar Mantar</h1>

                        </div>
                        <div className='video col-12 mt-5'>
                            <h5 className='text-white text-center'>Heritage Video</h5>
                            <div className="video-container d-flex flex-coloumn align-items-center" >

                                <video controls style={{ width: '70%', marginLeft: '15%' }}>
                                    <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                        <div className="exp1 col-12 col-md-4 mt-5 mb-3" style={{ position: 'relative', textAlign: 'center' }}>
                            <img src={img1} alt="Sample" style={{ width: '80%' }} />

                            {/* h2 Tag for "Expert 1" */}
                            <h2 style={{
                                position: 'absolute',
                                top: '10%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background to make the text stand out
                                padding: '5px 10px',
                                borderRadius: '5px',
                                zIndex: 1,
                            }}>
                                Expert 1
                            </h2>

                            {/* Paragraph with description */}
                            <p style={{
                                position: 'absolute',
                                top: '60%', // Adjusted to leave space for h2
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '75%', // Adjusted width for readability
                                color: 'white',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background for readability
                                padding: '10px',
                                borderRadius: '5px',
                                zIndex: 1,
                                wordWrap: 'break-word',
                                maxWidth: '100%',
                            }}>
                                As a UNESCO World Heritage site, Jantar Mantar is not only an architectural wonder but also a priceless repository of scientific knowledge. The conservation of this monument involves a multi-faceted approach, combining modern restoration techniques with traditional craftsmanship. The preservation efforts are crucial to maintaining the structural integrity of the instruments while ensuring they remain functional for future generations of scholars and astronomers.
                            </p>
                        </div>


                        <div className="exp1 col-12 col-md-4 mt-5 mb-3" style={{ position: 'relative', textAlign: 'center' }}>
                            <img src={img1} alt="Sample" style={{ width: '80%' }} />

                            {/* h2 Tag for "Expert 1" */}
                            <h2 style={{
                                position: 'absolute',
                                top: '10%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background to make the text stand out
                                padding: '5px 10px',
                                borderRadius: '5px',
                                zIndex: 1,
                            }}>
                                Expert 2
                            </h2>

                            {/* Paragraph with description */}
                            <p style={{
                                position: 'absolute',
                                top: '60%', // Adjusted to leave space for h2
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '75%', // Adjusted width for readability
                                color: 'white',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background for readability
                                padding: '10px',
                                borderRadius: '5px',
                                zIndex: 1,
                                wordWrap: 'break-word',
                                maxWidth: '100%',
                            }}>
                                Various initiatives by the Archaeological Survey of India (ASI) and local authorities have been put in place to protect Jantar Mantar from environmental damage and urban encroachment. Restoration projects focus on the wear and tear caused by time and weather, using authentic materials that retain the original look and feel of the monumen
                            </p>
                        </div>
                        <div className="exp1 col-12 col-md-4 mt-5 mb-3" style={{ position: 'relative', textAlign: 'center' }}>
                            <img src={img1} alt="Sample" style={{ width: '80%' }} />

                          
                            <h2 style={{
                                position: 'absolute',
                                top: '10%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                color: 'white',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                                padding: '5px 10px',
                                borderRadius: '5px',
                                zIndex: 1,
                            }}>
                                Expert 3
                            </h2>

                         
                            <p style={{
                                position: 'absolute',
                                top: '60%', // Adjusted to leave space for h2
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                                width: '75%', // Adjusted width for readability
                                color: 'white',
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Background for readability
                                padding: '10px',
                                borderRadius: '5px',
                                zIndex: 1,
                                wordWrap: 'break-word',
                                maxWidth: '100%',
                            }}>

                                Educational programs and heritage walks are also regularly conducted to raise awareness about the significance of Jantar Mantar and promote cultural tourism, ensuring that this astronomical marvel continues to inspire curiosity and reverence among visitors

                            </p>
                        </div>





                    </div>

                </div>

            </div>

        </div>
    )
}

export default Preserving
