import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box } from '@react-three/drei';
import { theme } from '../../theme';

export default function About3D() {
  const outerRef = useRef<any>(null);
  const innerRef = useRef<any>(null);
  const [hovered, setHover] = useState(false);

  useFrame((state, delta) => {
    if (!outerRef.current || !innerRef.current) return;
    
    const speed = hovered ? 2 : 1;
    
    outerRef.current.rotation.x += delta * 0.5 * speed;
    outerRef.current.rotation.y += delta * 0.3 * speed;
    
    innerRef.current.rotation.x -= delta * 0.4 * speed;
    innerRef.current.rotation.y -= delta * 0.6 * speed;
    
    // Float effect
    outerRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    innerRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
  });

  return (
    <group 
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <Box ref={outerRef} args={[2, 2, 2]}>
        <meshBasicMaterial color={theme.secondary} wireframe transparent opacity={0.3} />
      </Box>
      <Box ref={innerRef} args={[1.2, 1.2, 1.2]}>
        <meshBasicMaterial color={theme.primary} wireframe />
      </Box>
    </group>
  );
}
