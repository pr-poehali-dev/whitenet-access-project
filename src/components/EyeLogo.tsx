import { useEffect, useRef, useState } from 'react';

const EyeLogo = ({ size = 40 }: { size?: number }) => {
  const eyeRef = useRef<HTMLDivElement>(null);
  const [pupilPosition, setPupilPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!eyeRef.current) return;

      const eye = eyeRef.current.getBoundingClientRect();
      const eyeCenterX = eye.left + eye.width / 2;
      const eyeCenterY = eye.top + eye.height / 2;

      const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
      const distance = Math.min(size * 0.15, Math.hypot(e.clientX - eyeCenterX, e.clientY - eyeCenterY) * 0.05);

      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      setPupilPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [size]);

  return (
    <div 
      ref={eyeRef}
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 100 100" 
        className="absolute"
      >
        <ellipse 
          cx="50" 
          cy="50" 
          rx="28" 
          ry="38" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="3"
          className="text-foreground"
        />
        
        <path 
          d="M 50,12 L 54,2 L 50,8 L 46,2 Z" 
          fill="currentColor"
          className="text-foreground"
        />
        <path 
          d="M 50,88 L 54,98 L 50,92 L 46,98 Z" 
          fill="currentColor"
          className="text-foreground"
        />
        
        <path 
          d="M 72,20 L 82,14 L 75,22 L 80,28 Z" 
          fill="currentColor"
          className="text-foreground"
        />
        <path 
          d="M 28,80 L 18,86 L 25,78 L 20,72 Z" 
          fill="currentColor"
          className="text-foreground"
        />
        
        <path 
          d="M 72,80 L 82,86 L 75,78 L 80,72 Z" 
          fill="currentColor"
          className="text-foreground"
        />
        <path 
          d="M 28,20 L 18,14 L 25,22 L 20,28 Z" 
          fill="currentColor"
          className="text-foreground"
        />
      </svg>

      <div 
        className="absolute bg-foreground rounded-full transition-transform duration-100 ease-out"
        style={{ 
          width: size * 0.35, 
          height: size * 0.35,
          transform: `translate(${pupilPosition.x}px, ${pupilPosition.y}px)`
        }}
      >
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background rounded-full"
          style={{ width: size * 0.15, height: size * 0.15 }}
        />
      </div>
    </div>
  );
};

export default EyeLogo;
