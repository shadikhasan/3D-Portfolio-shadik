import React, { useEffect, useRef } from "react";

const MouseTracingCanvas = () => {
  const canvasRef = useRef(null);
  const particlesArray = [];

  const mouse = {
    x: null,
    y: null,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
      for (let i = 0; i < 5; i++) {
        particlesArray.push(new Particle());
      }
    };

    class Particle {
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 5 + 2; // Increase initial size
        this.speedX = (Math.random() - 0.5) * 2; // Reduced speed variation
        this.speedY = (Math.random() - 0.5) * 2; // Reduced speed variation
        this.color = this.getRandomColor(); // Random color for each particle
      }

      // Function to generate a random color
      getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.98; // Gradually shrink the particle slower
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); // Draw circular particle
        ctx.fill();
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();

        // Remove particles that have shrunk below a certain size
        if (particlesArray[i].size <= 0.5) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    animate(); // Start the animation

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 z-0 pointer-events-none" // Use pointer-events-none for better user experience
    />
  );
};

export default MouseTracingCanvas;
