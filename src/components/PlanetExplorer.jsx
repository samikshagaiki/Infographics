'use client';

import { motion } from 'framer-motion';
import {Tooltip} from 'react-tooltip';

export default function PlanetExplorer({ planets }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      {planets.map(planet => (
        <motion.div
          key={planet.id}
          whileHover={{ scale: 1.1 }}
          style={{ background: '#1a1a1a', padding: '20px', borderRadius: '10px', width: '200px', textAlign: 'center' }}
          data-tooltip-id={planet.id}
          data-tooltip-content={`Mass: ${planet.mass?.massValue} x 10^${planet.mass?.massExponent} kg`}
        >
          <h3>{planet.englishName}</h3>
          <p>Gravity: {planet.gravity} m/s²</p>
          <Tooltip id={planet.id} />
        </motion.div>
      ))}
    </div>
  );
}