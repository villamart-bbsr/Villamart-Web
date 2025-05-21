import { useState, useEffect, useRef } from 'react';

export default function CircularSlider() {
  const [items, setItems] = useState([]);
  const [animating, setAnimating] = useState(true);
  const containerRef = useRef(null);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);

  const totalImages = 8;

  useEffect(() => {
    const imageUrls = [
      '/images/blinkit.png',
      '/images/Instamartlogo.webp',
      '/images/reliance-fresh.png',
      '/images/blinkit.png',
      '/images/blinkit.png',
      '/images/blinkit.png',
      '/images/blinkit.png',
      '/images/blinkit.png'
    ];

    const initialItems = Array.from({ length: totalImages }, (_, i) => ({
      id: i,
      imageUrl: imageUrls[i % imageUrls.length],
      position: i * 85,
      scale: 1,
      opacity: 1
    }));

    setItems(initialItems);
  }, []);

  const animate = time => {
    if (previousTimeRef.current !== undefined) {
      const viewportWidth = containerRef.current?.offsetWidth || 800;
      const spacing = 85;
      const speed = 0.5;

      setItems(prevItems => {
        const leftmost = [...prevItems].sort((a, b) => a.position - b.position)[0];

        return prevItems.map(item => {
          let newPosition = item.position + speed;

          if (newPosition > viewportWidth + 40) {
            newPosition = leftmost.position - spacing;
          }

          const ratio = Math.min(1, Math.max(0, newPosition / viewportWidth));
          const eased = ratio * ratio * (3 - 2 * ratio);

          const scale = 1 - (eased * 0.75); // Scale from 1 to 0.25
          let opacity = 1;
          if (ratio > 0.5) {
            const fade = (ratio - 0.5) * 2;
            opacity = 1 - (fade * fade * 0.95);
          }

          return {
            ...item,
            position: newPosition,
            scale,
            opacity
          };
        });
      });

      previousTimeRef.current = time;
    } else {
      previousTimeRef.current = time;
    }

    if (animating) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, [animating]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-32 overflow-hidden "
    >
      <div className="absolute top-0 left-0 h-full w-full ">
        {items.map(item => (
          <div
            key={item.id}
            className="absolute top-1/2 flex items-center justify-center"
            style={{
              left: `${item.position}px`,
              transform: `translateY(-50%) scale(${item.scale})`,
              opacity: item.opacity,
              willChange: 'transform, opacity'
            }}
          >
            <img
              src={item.imageUrl}
              alt={`Item ${item.id + 1}`}
              className="w-20 h-20 object-contain"
              draggable={false}
              style={{
                pointerEvents: 'none',
                userSelect: 'none'
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
