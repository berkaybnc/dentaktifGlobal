import React, { useEffect, useRef, useState } from 'react';
import dentalVideo from '../agız diş.mov';

export default function Hero3D() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1.0);
  const [bgRemovalMode, setBgRemovalMode] = useState('none'); // Default to 'none' for 100% crisp HD video!
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Real-Time Canvas Frame Processor for Background Removal
  useEffect(() => {
    let animId;
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) return;

    const ctx = canvas.getContext('2d', { willReadFrequently: true });

    const renderFrame = () => {
      if (video && !video.paused && !video.ended && canvas) {
        if (canvas.width !== video.videoWidth && video.videoWidth > 0) {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
        }

        if (canvas.width > 0 && canvas.height > 0) {
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

          // Apply Chroma-Key / Alpha Keying based on selected bgRemovalMode
          if (bgRemovalMode !== 'none') {
            const frameData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = frameData.data;
            const len = data.length;

            for (let i = 0; i < len; i += 4) {
              const r = data[i];
              const g = data[i + 1];
              const b = data[i + 2];

              if (bgRemovalMode === 'black') {
                // Key out dark/black background pixels
                const luminance = (r * 0.299 + g * 0.587 + b * 0.114);
                if (luminance < 45) {
                  data[i + 3] = 0; // Transparent
                } else if (luminance < 85) {
                  data[i + 3] = Math.floor(((luminance - 45) / 40) * 255); // Smooth edge alpha gradient
                }
              } else if (bgRemovalMode === 'green') {
                // Key out Green screen pixels
                if (g > 90 && g > r * 1.25 && g > b * 1.25) {
                  data[i + 3] = 0;
                }
              } else if (bgRemovalMode === 'white') {
                // Key out bright white background pixels
                if (r > 215 && g > 215 && b > 215) {
                  data[i + 3] = 0;
                }
              }
            }
            ctx.putImageData(frameData, 0, 0);
          }
        }
      }
      animId = requestAnimationFrame(renderFrame);
    };

    renderFrame();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [bgRemovalMode]);

  // Handle Playback Speed change
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = playbackSpeed;
    }
  }, [playbackSpeed]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <section id="hero" className="hero-section">
      <div className="container hero-grid">
        {/* Left Column: Typography & CTAs */}
        <div className="hero-content">
          <div className="hero-tagline" style={{ marginBottom: '1.2rem' }}>
            <span>✨ World-Class Dental Tourism in Istanbul</span>
          </div>

          <h1 className="hero-title" style={{ marginTop: '0.4rem', lineHeight: '1.2' }}>
            Where Bright Smiles Begin &{' '}
            <span className="text-gradient">Confidence Lasts</span>
          </h1>

          <p className="hero-description">
            Dent Aktif Clinic combines digital smile design, Swiss Straumann® implants, and ultra-translucent E-Max® porcelain crowns to transform your smile in just 5 days in Istanbul.
          </p>

          <div className="hero-ctas">
            <a href="#consultation" className="btn-primary">
              🚀 Schedule Free Consultation
            </a>
            <a href="#before-after" className="btn-secondary">
              👁️ Explore 500+ Smile Results
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <h4>50,000+</h4>
              <p>Successful Procedures</p>
            </div>
            <div className="stat-item">
              <h4>20+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h4>Lifetime</h4>
              <p>Official Warranty</p>
            </div>
          </div>
        </div>

        {/* Right Column: Original Dental MOV Video Showcase */}
        <div className="hero-visual">
          <div className="hero-showcase-card glass-card">
            {/* Header with Video Controls */}
            <div className="showcase-card-header" style={{ flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="badge-luxury">🎥 CLINICAL 3D SMILE MOTION</span>

              {/* View & Filter Mode Buttons */}
              <div className="camera-presets" style={{ display: 'flex', gap: '0.3rem' }}>
                <button
                  onClick={() => setBgRemovalMode('none')}
                  className={`btn-secondary ${bgRemovalMode === 'none' ? 'active' : ''}`}
                  title="Crisp HD Video"
                  style={{ padding: '0.2rem 0.55rem', fontSize: '0.7rem', borderRadius: '6px' }}
                >
                  🎬 HD Video
                </button>
                <button
                  onClick={() => setBgRemovalMode('black')}
                  className={`btn-secondary ${bgRemovalMode === 'black' ? 'active' : ''}`}
                  title="Remove Dark Background"
                  style={{ padding: '0.2rem 0.55rem', fontSize: '0.7rem', borderRadius: '6px' }}
                >
                  ⬛ Transparent
                </button>
                <button
                  onClick={() => setBgRemovalMode('white')}
                  className={`btn-secondary ${bgRemovalMode === 'white' ? 'active' : ''}`}
                  title="Remove White Background"
                  style={{ padding: '0.2rem 0.55rem', fontSize: '0.7rem', borderRadius: '6px' }}
                >
                  ⬜ White Blend
                </button>
              </div>
            </div>

            {/* Video Container Box */}
            <div className="showcase-3d-box" style={{ position: 'relative', minHeight: '320px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: '16px', background: '#ffffff' }}>
              {/* Direct HD Video Element when mode is 'none' for maximum quality */}
              {bgRemovalMode === 'none' ? (
                <video
                  ref={videoRef}
                  src={dentalVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: '340px',
                    objectFit: 'contain',
                    borderRadius: '16px'
                  }}
                />
              ) : (
                <>
                  {/* Hidden Video Source for Canvas processing */}
                  <video
                    ref={videoRef}
                    src={dentalVideo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ position: 'absolute', opacity: 0, pointerEvents: 'none', width: '1px', height: '1px' }}
                  />

                  {/* Transparent Canvas Rendering Video Frames */}
                  <canvas
                    ref={canvasRef}
                    className="hero-interactive-canvas"
                    style={{
                      width: '100%',
                      height: '100%',
                      maxHeight: '340px',
                      objectFit: 'contain',
                      mixBlendMode: bgRemovalMode === 'white' ? 'multiply' : 'normal',
                      filter: 'drop-shadow(0 15px 25px rgba(2, 132, 199, 0.25))'
                    }}
                  />
                </>
              )}

              {/* Badges Overlay */}
              <div className="media-tag tag-top-left">
                <span>🦷 HD Anatomical Motion</span>
              </div>
              <div className="media-tag tag-bottom-right">
                <span>⚙️ Dent Aktif Clinic Original</span>
              </div>

              {/* Playback Controls Overlay */}
              <div style={{ position: 'absolute', bottom: '0.8rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.5rem', background: 'rgba(15, 23, 42, 0.65)', backdropFilter: 'blur(8px)', padding: '0.3rem 0.8rem', borderRadius: '99px', zIndex: 10 }}>
                <button
                  onClick={togglePlay}
                  style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.85rem' }}
                >
                  {isPlaying ? '⏸️ Pause' : '▶️ Play'}
                </button>
                <span style={{ color: 'rgba(255,255,255,0.3)' }}>|</span>
                <button
                  onClick={() => setPlaybackSpeed(playbackSpeed === 1.0 ? 0.75 : playbackSpeed === 0.75 ? 0.5 : 1.0)}
                  style={{ background: 'none', border: 'none', color: '#38bdf8', cursor: 'pointer', fontWeight: 600, fontSize: '0.8rem' }}
                >
                  ⚡ Speed: {playbackSpeed}x
                </button>
              </div>
            </div>

            {/* Card Footer with Doctor Info */}
            <div className="showcase-card-footer" style={{ marginTop: '0.8rem' }}>
              <div className="doctor-badge" style={{ width: '100%', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div className="doctor-avatar">👨‍⚕️</div>
                  <div className="doctor-info">
                    <h5>Dr. Mehmet Yılmaz</h5>
                    <p>Head Surgeon • Digital Dental Animation</p>
                  </div>
                </div>
                <span className="guarantee-badge">LIFETIME WARRANTY</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


