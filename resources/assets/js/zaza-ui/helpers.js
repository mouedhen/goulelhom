export const hasClass = (el, className) => {
    if (el.classList) {
        el.classList.contains(className);
    } else {
        new RegExp(`(^| )${className}( |$)`, 'gi').test(el.className);
    }
};

export const addClass = (el, className) => {
    if (el.classList) {
        el.classList.add(className);
    } else {
        el.className += ` ${className}`;
    }
};

export const removeClass = (el, className) => {
    if (el.classList) {
        el.classList.remove(className);
    } else {
        el.className = el.className.replace(new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'), ' ');
    }
};

export const toggleClass = (el, className) => {
    if (el.classList) {
        el.classList.toggle(className);
    } else {
        const classes = el.className.split(' ');
        const existingIndex = classes.indexOf(className);

        if (existingIndex >= 0) {
            classes.splice(existingIndex, 1);
        } else {
            classes.push(className);
        }

        el.className = classes.join(' ');
    }
};
