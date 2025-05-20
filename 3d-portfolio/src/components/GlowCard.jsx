import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  // Refs for all the cards
  const cardRefs = useRef([]);

  // Mouse move event to create glow effect
  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  // Render the card component
  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      className="card card-border timeline-card rounded-xl p-5 flex items-center gap-4 bg-gray-800 hover:shadow-2xl transition duration-300 w-full h-full"
      style={{ height: "300px" }} // Ensuring it is square
    >
      {/* Card Image */}
      {card.imgPath && (
        <img
          src={card.imgPath}
          alt={card.title}
          className="w-32 h-32 object-cover rounded-lg"
        />
      )}

      {/* Card Content */}
      <div className="flex flex-col justify-center">
        <div className="text-xl font-bold text-white mb-1">{card.title}</div>
        <div className="text-gray-400 text-sm">{card.description}</div>
      </div>
      {children}
    </div>
  );
};

export default GlowCard;
