

let scrollbarWidth = 0;

export default function getScrollbarWidth() {
    /* istanbul ignore else */
    if (typeof document !== 'undefined') {
        const div = document.createElement('div');
				div.style.width='100px';
				div.style.height='100px';
				div.style.top='-9999px';
				div.style.position='absolute';
				div.style.overflow='scroll';
				// div.style.msOverflowStyle='scrollbar';
        document.body.appendChild(div);
        scrollbarWidth = (div.offsetWidth - div.clientWidth);
        document.body.removeChild(div);
    } else {
        scrollbarWidth = 0;
    }
    return scrollbarWidth || 0;
}