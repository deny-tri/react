import '../utilities/style.css';
import bgheader from "@/assets/header.png"
import banner from "@/assets/banner.png"

const Components = () => {
    return (
    <div className='col-2'>
        <img className='img-profile' src="https://png.pngtree.com/png-vector/20220901/ourmid/pngtree-company-employee-avatar-icon-wearing-a-suit-png-image_6133899.png" alt="" />
        <img src={bgheader} className='img-fluid' alt="" />
    </div>
    );
};

export default Components;