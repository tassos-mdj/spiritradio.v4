document.querySelectorAll('.show-banner').forEach(item => {
    item.addEventListener('click', event => {
        let content = item.id + '-content';
        if (document.getElementById(content).classList.contains('hidden')) {
        document.getElementById(content).classList.remove('hidden');
        } else {
            document.getElementById(content).classList.add('hidden');
        }
    });
});