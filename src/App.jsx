import './assets/styles/App.css'
import { unitData } from './data/unit';

function App() {

  const handleWhatsApp = (unit) => {
    const phoneNumber = "+919344752401"; // Your WhatsApp number
    const message = `Hi, I'm interested in ${unit}. Please share more details.`;
    const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsAppUrl, "_blank");
  };

  return (
    <>
      <div className='p-8'>
        <h1 class="text-2xl font-bold mb-3 text-white">Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-3">
          {unitData && unitData?.map((item, index) => (
            <div className='border-1 border-white rounded-lg px-3 pt-3 pb-4'>
              <label className='text-white'>{item?.unit && item?.unit}</label>
              <button onClick={() => handleWhatsApp(item?.unit)} type="button" className="mt-2 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 cursor-pointer">
                Chat on WhatsApp
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App