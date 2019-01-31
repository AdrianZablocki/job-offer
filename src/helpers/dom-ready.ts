export function domReady(fn: any): void {
	if (typeof fn !== 'function') {
		return;
	}

	if (document.readyState === 'complete') {
		fn();
	} else {
		document.addEventListener('DOMContentLoaded', (fn as any), false);
	}
}
