import { useNavigate } from "react-router-dom";

const CtaSection = () => {
       const navigate = useNavigate();

  return (
    <div>
       <section className="text-center py-16 px-6 dark:text-white">
        <h2 className="text-3xl font-bold mb-4">
          Start Shopping with Genzhub Today!
        </h2>
        <p className="text-lg mb-6">
          All your favorite products. All in one place. Just a click away.
        </p>
        <button onClick={()=>navigate('/product')} className="border border-red-400 text-black dark:text-white font-semibold px-6 py-3 rounded-full hover:bg-red-500 transition">
          Shop Now
        </button>
      </section>
    </div>
  )
}

export default CtaSection