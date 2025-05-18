import { useRef, useEffect } from 'react';
import Home from '../sections/Home';

const Matter = () => {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const nodes = useRef([]);

  // Initialize nodes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const nodeCount = Math.floor(window.innerWidth / 20);
    nodes.current = Array.from({ length: nodeCount }).map(() => ({
      x: Math.random() * container.clientWidth,
      y: Math.random() * container.clientHeight,
      size: Math.random() * 7 + 1,
      speed: Math.random() * 0.2 + 0.1,
      connections: []
    }));

    // Connect nearby nodes
    nodes.current.forEach((node, i) => {
      node.connections = nodes.current
        .slice(i + 1)
        .filter(n => Math.hypot(n.x - node.x, n.y - node.y) < 150);
    });
  }, []);

  // Canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId;

    const resizeCanvas = () => {
      canvas.width = containerRef.current.clientWidth;
      canvas.height = containerRef.current.clientHeight;
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.1)';
      ctx.lineWidth = 2;
      nodes.current.forEach(node => {
        node.connections.forEach(conn => {
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(conn.x, conn.y);
          ctx.stroke();
        });
      });

      // Draw nodes
      ctx.fillStyle = 'rgba(0, 255, 255, 0.8)';
      nodes.current.forEach(node => {
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  // Mouse interaction
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      nodes.current.forEach(node => {
        const distance = Math.hypot(mouseX - node.x, mouseY - node.y);
        if (distance < 100) {
          const angle = Math.atan2(mouseY - node.y, mouseX - node.x);
          node.x -= Math.cos(angle) * 2;
          node.y -= Math.sin(angle) * 2;
        }
      });
    };

    containerRef.current?.addEventListener('mousemove', handleMouseMove);
    return () => {
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* Main canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-0"
      />

      {/* Floating text elements */}
      <div className="absolute inset-0 overflow-hidden z-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute text-xs font-mono text-cyan-400/30 pointer-events-none"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatText ${Math.random() * 20 + 10}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            {['Frontend', 'React', 'Frontend developer', 'JavaScript', 'Web developer'][i % 5]}
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className='w-full max-h-screen h-screen relative z-10'>
        <Home />
      </div>

      {/* Standard React <style> tag (not jsx/global) */}
      <style>{`
        @keyframes floatText {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.3; }
          90% { opacity: 0.3; }
          100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Matter;
