import { useState } from 'react'

// Mosaic constants
const CONTAINER_H = 500
const GAP = 4
const TOP_H = 294                          // height of the top spanning card
const BOTTOM_H = CONTAINER_H - TOP_H - GAP // remaining height for bottom row

// Default positions for each of the 3 slots
const DEFAULTS = [
  // Slot 0 — full-width top banner
  { top: 0, left: 0, width: '100%', height: TOP_H },
  // Slot 1 — bottom left (~40%)
  { top: TOP_H + GAP, left: 0, width: `calc(40% - ${GAP / 2}px)`, height: BOTTOM_H },
  // Slot 2 — bottom right (~60%)
  { top: TOP_H + GAP, right: 0, width: `calc(60% - ${GAP / 2}px)`, height: BOTTOM_H },
]

// Expanded positions on hover (fully fills the container)
const EXPANDED = [
  { top: 0, left: 0, width: '100%', height: CONTAINER_H },
  { top: 0, left: 0, width: '100%', height: CONTAINER_H },
  { top: 0, right: 0, width: '100%', height: CONTAINER_H },
]

export default function DestinationMosaic({ destinations: dests }) {
  const [hovered, setHovered] = useState(null)

  return (
    <>
      {/* Mobile: simple vertical stack */}
      <div className="flex flex-col gap-3 md:hidden">
        {dests.map((dest) => (
          <div
            key={dest.name}
            className="relative overflow-hidden rounded-2xl"
            style={{
              height: 220,
              contentVisibility: 'auto',
              containIntrinsicSize: '220px',
            }}
          >
            <img
              src={dest.image}
              alt={dest.name}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 p-4"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}
            >
              <p className="text-[10px] uppercase tracking-widest text-white/55">{dest.region}</p>
              <p className="mt-0.5 font-semibold text-white">{dest.name}</p>
              <p className="mt-1 text-xs text-slate-300">{dest.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: mosaic */}
      <div
        className="relative hidden w-full overflow-hidden rounded-2xl md:block"
        style={{ height: CONTAINER_H }}
      >
        {dests.map((dest, i) => {
          const isHovered = hovered === i
          const pos = isHovered ? EXPANDED[i] : DEFAULTS[i]

          return (
            <div
              key={dest.name}
              className="absolute overflow-hidden"
              style={{
                ...pos,
                backgroundImage: `url(${dest.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 12,
                cursor: 'pointer',
                zIndex: isHovered ? 10 : 1,
                transition: 'top 0.5s ease, width 0.5s ease, height 0.5s ease',
              }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              {/* Gradient content overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: isHovered ? '1.5rem 1.5rem 2rem' : '1rem',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)',
                  transition: 'padding 0.3s ease',
                }}
              >
                <p
                  style={{
                    fontSize: 10,
                    letterSpacing: '0.13em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.55)',
                    marginBottom: 3,
                  }}
                >
                  {dest.region}
                </p>
                <p style={{ fontWeight: 600, color: 'white', fontSize: '1.05rem', lineHeight: 1.3 }}>
                  {dest.name}
                </p>

                {/* Revealed on hover */}
                <p
                  style={{
                    fontSize: '0.8rem',
                    color: 'rgba(226,232,240,0.9)',
                    marginTop: 6,
                    lineHeight: 1.5,
                    overflow: 'hidden',
                    maxHeight: isHovered ? 80 : 0,
                    opacity: isHovered ? 1 : 0,
                    transition: 'max-height 0.35s ease 0.12s, opacity 0.35s ease 0.12s',
                  }}
                >
                  {dest.description}
                </p>

                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 5,
                    marginTop: 8,
                    overflow: 'hidden',
                    maxHeight: isHovered ? 60 : 0,
                    opacity: isHovered ? 1 : 0,
                    transition: 'max-height 0.35s ease 0.22s, opacity 0.35s ease 0.22s',
                  }}
                >
                  {dest.highlights.map((h) => (
                    <span
                      key={h}
                      style={{
                        padding: '3px 10px',
                        borderRadius: 999,
                        background: 'rgba(255,255,255,0.2)',
                        backdropFilter: 'blur(4px)',
                        fontSize: 11,
                        color: 'white',
                      }}
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}
