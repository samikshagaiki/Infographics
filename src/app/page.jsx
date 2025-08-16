'use client'; // Client-side for animations

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="space-bg" style={{ perspective: '1000px' }}> {/* Enables 3D */}
      {/* Background stars */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="star" style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
        }} />
      ))}

      {/* 3D animated elements */}
      <motion.div
        initial={{ opacity: 0, rotateX: -90 }}
        animate={{ opacity: 1, rotateX: 0 }}
        transition={{ duration: 1.5 }}
        style={{ transformStyle: 'preserve-3d', textAlign: 'center', paddingTop: '40vh' }}
      >
        <h1 style={{ fontSize: '3rem' }}>Welcome to the Solar System</h1>
        <p>Discover planets in 3D space!</p>
        {/* Floating 3D "planet" */}
        <motion.div
          animate={{ rotateY: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          style={{ width: '100px', height: '100px', background: 'radial-gradient(circle, #ffcc00, #ff6600)', borderRadius: '50%', margin: '20px auto' }}
        />
        <Link href="/infographic">
          <motion.button
            whileHover={{ scale: 1.1, rotateX: 10 }}
            style={{ padding: '10px 20px', background: '#1a1a1a', color: '#fff', border: '1px solid #fff', cursor: 'pointer' }}
          >
            Let&apos;s Get Started
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}