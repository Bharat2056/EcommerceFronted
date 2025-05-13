import '../bannerBOXV2/styles.css';

const BannerBoxV2 = (props) => {
  return (
    <div className='bannerBoxV2 w-full overflow-hidden rounded-md group relative'>
   <img src={props.image} className="w-full transition-all duration-500 group-hover:scale-105" />
   <div className='info'>
    <h2>Samsung Gear
VR Camera</h2>
</div>
    </div>
  )
}

export default BannerBoxV2