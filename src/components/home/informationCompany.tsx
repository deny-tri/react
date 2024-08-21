import '@/utilities/style.css';
import cake from '@/assets/cake.png';

const InformationCompany = () => {
  return (
    <div className="container-xxl information-card bg-success py-4 info-company">
      <div className="row g-4">
        {/* First Grid Item */}
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="grid-item p-4 bg-white text-dark rounded shadow-sm text-center">
            <h3>Grid 1</h3>
            <p>Content for the first grid. Add your details here.</p>
            <img src={cake} alt="Cake" className="img-fluid resized-image" />
          </div>
        </div>

        {/* Second Grid Item with Carousel */}
        <div className="col-md-4 d-flex align-items-center justify-content-center card-info">
          <div id="carouselExampleControls" className="carousel slide">
            <div className="carousel-inner">
              {/* Carousel Item 1 */}
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                    <div className="card custom-card">
                      <img src={cake} alt="Cake" className="card-img-top custom-card-img" />
                      <div className="card-body">
                        <p className="card-text">Card 1 content.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                    <div className="card custom-card">
                      <img src={cake} alt="Cake" className="card-img-top custom-card-img" />
                      <div className="card-body">
                        <p className="card-text">Card 2 content.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Carousel Item 2 */}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                    <div className="card custom-card">
                      <img src={cake} alt="Cake" className="card-img-top custom-card-img" />
                      <div className="card-body">
                        <p className="card-text">Card 3 content.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mb-4 d-flex justify-content-center">
                    <div className="card custom-card">
                      <img src={cake} alt="Cake" className="card-img-top custom-card-img" />
                      <div className="card-body">
                        <p className="card-text">Card 4 content.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InformationCompany;
