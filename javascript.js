function disable() {
    document.removeEventListener('mousewheel', Go);
    document.removeEventListener('DOMMouseScroll', Go);
    }