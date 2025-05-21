import { useState, useEffect, useRef } from 'react';

export default function ln3() {
  const [items, setItems] = useState([]);
  const [animating, setAnimating] = useState(true);
  const containerRef = useRef(null);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(0);
  
  // Number of images in the slider
  const totalImages = 8;
  
  // Generate initial images with different colors
  useEffect(() => {
    const colors = ['red', 'blue', 'green', 'purple', 'orange', 'teal', 'pink', 'gold'];
    
    const initialItems = Array.from({ length: totalImages }, (_, i) => ({
      id: i,
      url: `/api/placeholder/150/150`,
      color: colors[i % colors.length],
      position: i * 180, // Initial positions evenly spaced (180px apart)
      size: 200,
      opacity: 1
    }));
    
    setItems(initialItems);
  }, []);
  
  // Animation loop using requestAnimationFrame for smoother animation
  const animate = time => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      
      // Only update every 16ms (roughly 60fps)
      if (deltaTime > 16) {
        setItems(prevItems => {
          const viewportWidth = containerRef.current ? containerRef.current.offsetWidth : 800;
          const itemWidth = 200; // Maximum item width
          const spacing = 180; // Space between items
          const speed = 2; // Speed of animation (px per frame)
          
          // Calculate new positions for all items
          return prevItems.map(item => {
            // Move item to the right (instead of left)
            let newPosition = item.position + speed;
            
            // If item has moved completely off the right edge, move it to the left
            if (newPosition > viewportWidth + 40) { // 40px buffer for animation smoothness
              // Find the leftmost item
              const leftmostItem = [...prevItems].sort((a, b) => a.position - b.position)[0];
              // Place this item to the left of the leftmost item
              newPosition = leftmostItem.position - spacing;
            }
            
            // Calculate the reduction zone - now on the right side
            const reductionZoneStart = viewportWidth * 0.7; // Start reducing at 70% from the left
            
            // Default size and opacity
            let size = 200;
            let opacity = 1;
            
            // If item is in the reduction zone (right side)
            if (newPosition > reductionZoneStart) {
              // Calculate how far into the reduction zone (0 = just entered, 1 = all the way through)
              const reductionProgress = Math.min(1, (newPosition - reductionZoneStart) / (viewportWidth - reductionZoneStart));
              // Reduce size from 200px to 100px
              size = 200 - (reductionProgress * 100);
              // Reduce opacity from 1 to 0.1
              opacity = 1 - (reductionProgress * 0.9);
            }
            
            return {
              ...item,
              position: newPosition,
              size,
              opacity
            };
          });
        });
        
        previousTimeRef.current = time;
      }
    } else {
      previousTimeRef.current = time;
    }
    
    if (animating) {
      requestRef.current = requestAnimationFrame(animate);
    }
  };
  
  // Set up and clean up the animation loop
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animating]);
  
  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-64 overflow-hidden bg-gray-100 rounded-lg"
    >
      {/* Slider items */}
      <div className="absolute top-0 left-0 h-full w-full">
        {items.map(item => (
          <div
            key={item.id}
            className="absolute top-1/2 rounded-full shadow-lg overflow-hidden flex items-center justify-center"
            style={{
              left: `${item.position}px`,
              width: `${item.size}px`,
              height: `${item.size}px`,
              opacity: item.opacity,
              transform: 'translateY(-50%)',
              transition: 'width 0.3s, height 0.3s, opacity 0.3s'
            }}
          >
            <div
              className="w-full h-full flex items-center justify-center"
              style={{ backgroundColor: item.color }}
            >
              <span className="text-white font-bold text-lg">{item.id + 1}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Auto-animation description */}
      <div className="absolute bottom-2 left-0 right-0 text-center text-sm text-gray-600">
        Infinite circular slider (left to right)
      </div>
    </div>
  );
}