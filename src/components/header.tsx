import '../utilities/style.css';
import bgheader from "@/assets/header.png";
import banner from "@/assets/banner.png";
import SDM from "@/assets/SDM.png";
import dev from "@/assets/pengembangan.png";
import pen from "@/assets/Pendidikan.png";
import pkk from "@/assets/PKK.png";
import keu from "@/assets/keuangan.png";
import roh from "@/assets/rohani.png";
import sarpas from "@/assets/Sarpras.png";
import sekor from "@/assets/Sekkor.png";
import sim from "@/assets/SIM.png";

const Header = () => {
  const categories = [
    { src: SDM, name: 'SDM' },
    { src: dev, name: 'Pengembangan' },
    { src: pen, name: 'Pendidikan' },
    { src: pkk, name: 'PKK' },
    { src: keu, name: 'Keuangan' },
    { src: roh, name: 'Rohani' },
    { src: sarpas, name: 'Sarpras' },
    { src: sekor, name: 'Sekkor' },
    { src: sim, name: 'SIM' }
  ];

  return (
    <div className="container-xxxl">
      <img src={bgheader} className='img-fluid w-100' alt="Background Header" />

      <div className='container-sm bg-slate-800 py-3'>
        <div className='row align-items-center'>
          <div className='col-12 col-md-2 mb-3 mb-md-0'>
            <img 
              className='img-profile img-fluid rounded-circle' 
              src="https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png" 
              alt="Profile" 
            />
          </div>

          <div className='col-12 col-md-4 mb-3 mb-md-0'>
            <div className='bio'>
              <div className='fw-bold'>JON Thor</div>
              <div>NIK.12345668689</div>
              <div>Penempatan: Seksi Sibuk</div>
            </div>
          </div>

          <div className='col-12 col-md-6'>
            <div className='menuHome d-flex flex-column flex-md-row justify-content-center'>
              <a href="#" className="mb-2 mb-md-0"><i className="fa fa-info-circle"></i> Bantuan</a>
              <a href="#" className="mb-2 mb-md-0"><i className="fa fa-bell-o"></i> Notifikasi</a>
              <a className="active mb-2 mb-md-0" href="#"><i className="fa fa-fw fa-home"></i> Home</a>
            </div>
          </div>
        </div>
      </div>

      <div className='container banner my-3'>
        <img className='img-fluid w-100' src={banner} alt="Banner" />
      </div>

      <div className='container-sm menuKategori'>
        <div className='row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3 justify-content-center'>
          {categories.map((category, index) => (
            <div key={index} className='col d-flex flex-column align-items-center text-center'>
              <img src={category.src} className='imgStyle' alt={`Category ${index + 1}`} />
              <div className='mt-2'>{category.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
