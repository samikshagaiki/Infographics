import ChartComponent from '../../components/ChartComponent.jsx';
import PlanetExplorer from '../../components/PlanetExplorer.jsx';

async function getPlanetData() {
  try {
    const res = await fetch('https://api.le-systeme-solaire.net/rest/bodies/', {
      next: { revalidate: 3600 }, // Re-fetch every hour
    });
    if (!res.ok) throw new Error('Failed to fetch');
    const data = await res.json();
    // Filter for planets only
    return data.bodies.filter(body => body.isPlanet);
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Infographic() {
  const planets = await getPlanetData();

  return (
    <div className="space-bg">
      {/* Background stars */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div key={i} className="star" style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
        }} />
      ))}

      <div className="container">
        {/* Hero Section */}
        <section style={{ textAlign: 'center', padding: '50px 0' }}>
          <h1>Explore the Solar System Planets</h1>
          <p>Interactive data on {planets.length} planets, fetched from real API.</p>
        </section>

        {/* About Section */}
        <section>
          <h2>About the Solar System</h2>
          <p>Our solar system consists of the Sun and eight planets orbiting it. Data sourced from The Solar System OpenData API.</p>
        </section>

        {/* Data Visualizations */}
        <section>
          <h2>Planet Comparisons</h2>
          <ChartComponent planets={planets} />
        </section>

        {/* Interactive Explorer */}
        <section>
          <h2>Planet Explorer</h2>
          <PlanetExplorer planets={planets} />
        </section>

        {/* Fun Facts */}
        <section>
          <h2>Fun Facts</h2>
          <ul>
            {planets.map(planet => (
              <li key={planet.id}>{planet.englishName} has gravity of {planet.gravity} m/s².</li>
            ))}
          </ul>
        </section>

        {/* Footer */}
        <footer style={{ textAlign: 'center', padding: '20px' }}>
          <p>Data from <a href="https://api.le-systeme-solaire.net/en/" style={{ color: '#fff' }}>Solar System API</a> | Back to <a href="/" style={{ color: '#fff' }}>Home</a></p>
        </footer>
      </div>
    </div>
  );
}