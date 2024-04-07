export default defineNuxtRouteMiddleware(() => {
    if (process.client) {
        document.addEventListener('touchmove', function(e) {
            if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();
            }
        }, { passive: false });
    }
});