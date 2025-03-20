import './Offers.css'
import exclusive_imgae from '../../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h2>Exclusive</h2>
        <h2>Offers For You</h2>
        <p>ONLY ON BEST SELLERS PRODUCTS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_imgae} alt="" />
      </div>
    </div>
  )
}

export default Offers
