'use strict';

/*
 * messages[0] = Show
 * messages[1] = Hide
 */
const sliderFactory = messages => el => {
    const link = el.querySelector('a.handle') || document.createElement('a')
    if (!!link.dataset.listener) return
    // configuration of the observer:
    const config = { attributes: true, attributeFilter: ['class'] },
    isOpen = _ => el.classList.contains('open') ? 1 : 0,
    toggle = _ => el.classList.toggle('open'),
    height = _ => {
      const sizes = window.getComputedStyle(el)
      return ['borderTop', 'borderBottom', 'marginTop', 'marginBottom', 'paddingTop', 'paddingBottom'
      ].reduce( (prev, curr) => prev - parseInt(sizes[curr]), el.scrollHeight)
    },
    update = _ => {
      link.textContent = messages[isOpen()]
      el.style.height = isOpen() ? height() + "px" : 0
    }

    new MutationObserver(m => m.forEach(update))
    .observe(el, config) // pass in the target node, as well as the observer options

    link.textContent = messages[isOpen()]
    link.classList.add('handle')

    link.addEventListener('click', toggle)
    link.dataset.listener = true

    el.appendChild(link)

    update()
}

const slider = sliderFactory(['Visa', 'Göm'])

Array.from(document.querySelectorAll('.slider')).map(slider)

Array.from(document.querySelectorAll('.slider')).map(slider)