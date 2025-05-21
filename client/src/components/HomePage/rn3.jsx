import { useState, useEffect, useRef } from 'react';

export default function GrowingSlider() {
  const [items, setItems] = useState([]);
  const containerRef = useRef(null);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);

  const totalImages = 8;
  const spacing = 85;
  const speed = 0.5; // Smooth speed

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
      position: i * spacing,
      scale: 0.25,
      opacity: 0.1,
      hasGrown: false
    }));

    setItems(initialItems);
  }, []);

  const animate = time => {
    if (previousTimeRef.current !== undefined) {
      const viewportWidth = containerRef.current?.offsetWidth || 800;

      setItems(prevItems => {
        const leftmost = [...prevItems].sort((a, b) => a.position - b.position)[0];

        return prevItems.map(item => {
          let newPosition = item.position + speed;

          // Recycle item when it moves off the screen
          if (newPosition > viewportWidth + 100) {
            newPosition = leftmost.position - spacing;
            return {
              ...item,
              position: newPosition,
              scale: 0.25,
              opacity: 0.1,
              hasGrown: false
            };
          }

          // If not grown, compute new scale & opacity
          if (!item.hasGrown) {
            const growthEnd = viewportWidth * 0.6;
            const ratio = Math.min(1, newPosition / growthEnd);
            const eased = ratio * ratio * (3 - 2 * ratio);

            const scale = 0.25 + eased * 0.75;
            const opacity = 0.1 + eased * 0.9;

            const hasGrown = ratio >= 1;

            return {
              ...item,
              position: newPosition,
              scale,
              opacity,
              hasGrown
            };
          }

          // After growing, only update position
          return {
            ...item,
            position: newPosition
          };
        });
      });

      previousTimeRef.current = time;
    } else {
      previousTimeRef.current = time;
    }

    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-32 overflow-hidden">
      <div className="absolute top-0 left-0 h-full w-full">
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
