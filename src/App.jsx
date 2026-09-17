import './assets/styles/App.css'

function App() {

  const handleWhatsApp = () => {
    const phoneNumber = "+919344752401"; // Your WhatsApp number
    const message = `Hi, I'm interested in Unit. Please share more details.`;
    const whatsAppUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsAppUrl, "_blank");
  };

  return (
    <>
      <div className='p-8'>
        <h1 class="text-2xl font-bold">Products</h1>
        <div className='p-8'>
          <button onClick={() => handleWhatsApp()} type="button" className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-4 py-2.5 text-center leading-5 cursor-pointer">
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </>
  )
}

export default App