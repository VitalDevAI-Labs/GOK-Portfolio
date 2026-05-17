import { skills } from '@/data/skills'

export default function Skills() {
  return (
    <section
      id="skills"
      style={{
        padding: '96px 24px',
        borderTop: '1px solid var(--bg-border)',
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          style={{
            fontFamily: 'var(--font-mono), monospace',
            fontSize: '12px',
            color: 'var(--text-accent)',
            letterSpacing: '0.1em',
            marginBottom: '8px',
          }}
        >
          {'// tech-stack'}
        </p>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 700,
            color: 'var(--text-primary)',
            marginBottom: '48px',
          }}
        >
          Skills
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gap: '32px',
          }}
        >
          {skills.map((group) => (
            <div key={group.category}>
              <h3
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: '11px',
                  color: 'var(--text-accent)',
                  letterSpacing: '0.1em',
                  marginBottom: '16px',
                  textTransform: 'uppercase',
                }}
              >
                {group.category}
              </h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {group.items.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontFamily: 'var(--font-mono), monospace',
                      fontSize: '13px',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                    }}
                  >
                    <span style={{ color: 'var(--bg-border)', fontSize: '10px' }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
