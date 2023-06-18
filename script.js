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

    const addPostButton = document.getElementById('add-post-button');
    if (addPostButton) {
        addPostButton.addEventListener('click', addPost);
    }

    function addPost() {
        const postTitle = prompt('글 제목을 입력해주세요');
        const postContent = prompt('글 내용을 입력해주세요');

        if (postTitle && postContent) {
            const postList = document.getElementById('post-list');
            const newPost = document.createElement('div');
            newPost.innerHTML = `<h2>${postTitle}</h2><p>${postContent}</p>`;
            postList.appendChild(newPost);
        }
    }
});
