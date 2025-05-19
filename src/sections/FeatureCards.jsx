import { abilities } from "../constants";

const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    <div className="mx-auto grid-3-cols">
      {abilities.map((ability, index) => (
  <div 
    key={index} 
    className="flex flex-col items-center p-4 bg-[#121212] rounded-2xl text-white w-64 h-64"
  >
    <img 
      src={ability.imgPath} 
      alt={ability.title} 
      className="w-20 h-20 object-cover rounded-lg mb-2"
    />
    <h3 className="text-lg font-bold mb-1 text-center">{ability.title}</h3>
    <p className="text-sm text-center">{ability.desc}</p>
  </div>
))}

    </div>
  </div>
);

export default FeatureCards;