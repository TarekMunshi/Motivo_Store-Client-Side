import React from 'react';
import mobile1 from '../../../images/Google-Pixel-6a-300x300.jpg'
import mobile2 from '../../../images/Motorola-Edge-20-Pro-Blue-300x300.jpg'
import mobile3 from '../../../images/Vivo-Y55s-5G-Mirror-Lake-Blue-300x300.jpg'
import mobile4 from '../../../images/Realme-Q3-Silver-300x300.jpg'

const UpComing = () => {
    return (
        <div style={{ backgroundColor: '#F3F3F3', padding: '5px' }} id='upComing'>
            <div className="container">
                <h2 className='text-center mt-5'>Upcoming Mobiles</h2>
                <div className="row gy-4 mt-3 mb-5">
                    <div className="col-lg-3">
                        <div className="card custom-card border-0  h-100 p-2">
                            <img src={mobile1} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Google Pixel 6a</h5>
                                <p>128/8Gb</p>
                                <p class="card-text">4K@30/60fps, 1080p@30/60/120/240fps; gyro-EIS 1080p@30fps</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card  custom-card border-0  h-100 p-2">
                            <img src={mobile2} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Motorola Edge 30 Ultra</h5>
                                <p>12/256gb</p>
                                <p class="card-text">144Hz, HDR10+</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card custom-card border-0  h-100 p-2">
                            <img src={mobile3} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Vivo Y55s 5G</h5>
                                <p>128/8gb</p>
                                <p class="card-text">LED flash, HDR, panorama HDR</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="card  custom-card border-0  h-100 p-2">
                            <img src={mobile4} className="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Realme K9X</h5>
                                <p>128/6Gb</p>
                                <p class="card-text">LED flash, HDR, panorama</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpComing;