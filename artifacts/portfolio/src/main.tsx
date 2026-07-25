import { createRoot } from 'react-dom/client';

import App from './App';
import { applyThemeVariables } from './theme-linkage';

import './index.css';

applyThemeVariables();

if (import.meta.hot) {
	import.meta.hot.accept(['./theme', './theme-linkage'], async () => {
		const { applyThemeVariables: reapplyThemeVariables } = await import('./theme-linkage');
		reapplyThemeVariables();
	});
}

createRoot(document.getElementById('root')!).render(<App />);
