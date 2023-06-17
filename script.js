document.addEventListener('DOMContentLoaded', function () {
    var arrowContainer = document.getElementById('arrows');
    for (var i = 0; i < 100; i++) {
        var arrow = document.createElement('div');
        arrow.className = 'arrow';
        arrow.style.left = Math.random() * window.innerWidth + 'px';
        arrow.style.top = Math.random() * window.innerHeight + 'px';
        arrowContainer.appendChild(arrow);
    }

    arrowContainer.addEventListener('mousemove', function (e) {
        var x = e.clientX, y = e.clientY;
        document.querySelectorAll('.arrow').forEach(function (arrow) {
            var dx = arrow.offsetLeft - x, dy = arrow.offsetTop - y;
            var angle = Math.atan2(dy, dx);
            arrow.style.transform = 'rotate(' + angle + 'rad)';
        });
    });

    var modeSwitcher = document.getElementById('mode-switcher');
    if (modeSwitcher) {
        modeSwitcher.addEventListener('change', switchMode);
    }

    function switchMode() {
        if (this.checked) {
            document.documentElement.style.setProperty('--light-background', 'var(--dark-background)');
            document.documentElement.style.setProperty('--light-color', 'var(--dark-color)');
        } else {
            document.documentElement.style.setProperty('--light-background', 'white');
            document.documentElement.style.setProperty('--light-color', 'skyblue');
        }
    }
});