document.addEventListener('DOMContentLoaded', () => {
    const cube = document.querySelector('.cube');
    let isDragging = false;
    let startX, startY;
    let rotationX = -30, rotationY = -30;

    function rotateCube() {
        rotationY += 0.5;
        cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
        requestAnimationFrame(rotateCube);
    }

    rotateCube();

    cube.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        cube.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
        if (isDragging) {
            const dx = e.clientX - startX;
            const dy = e.clientY - startY;
            rotationY += dx * 0.5;
            rotationX -= dy * 0.5;
            cube.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
            startX = e.clientX;
            startY = e.clientY;
        }
    });

    document.addEventListener('mouseup', () => {
        isDragging = false;
        cube.style.cursor = 'grab';
    });

    document.addEventListener('mouseleave', () => {
        isDragging = false;
        cube.style.cursor = 'grab';
    });

    cube.addEventListener('mouseover', () => {
        cube.style.cursor = 'grab';
    });
});
