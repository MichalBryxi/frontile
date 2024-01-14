<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 942 208"
    ...attributes
  >
    <path
      fill={{if @color @color "currentColor"}}
      d="M146.024 203.904V62.496h27.36l2.304 25.056h1.152c4.992-9.216 11.04-16.224 18.144-21.024 7.104-4.992 14.4-7.488 21.888-7.488 6.72 0 12.096.96 16.128 2.88l-5.76 28.8c-2.496-.768-4.8-1.344-6.912-1.728-2.112-.384-4.704-.576-7.776-.576-5.568 0-11.424 2.208-17.568 6.624-6.144 4.224-11.424 11.712-15.84 22.464v86.4h-33.12zM308.537 207.36c-8.832 0-17.28-1.632-25.344-4.896-8.064-3.264-15.264-8.064-21.6-14.4-6.144-6.336-11.04-14.112-14.688-23.328-3.648-9.216-5.472-19.68-5.472-31.392s1.824-22.176 5.472-31.392c3.648-9.216 8.544-16.992 14.688-23.328 6.336-6.336 13.536-11.136 21.6-14.4 8.064-3.456 16.512-5.184 25.344-5.184s17.28 1.728 25.344 5.184c8.256 3.264 15.456 8.064 21.6 14.4 6.144 6.336 11.04 14.112 14.688 23.328 3.84 9.216 5.76 19.68 5.76 31.392s-1.92 22.176-5.76 31.392c-3.648 9.216-8.544 16.992-14.688 23.328-6.144 6.336-13.344 11.136-21.6 14.4-8.064 3.264-16.512 4.896-25.344 4.896zm0-27.072c10.368 0 18.528-4.224 24.48-12.672 5.952-8.64 8.928-20.064 8.928-34.272 0-14.4-2.976-25.824-8.928-34.272-5.952-8.64-14.112-12.96-24.48-12.96s-18.528 4.32-24.48 12.96c-5.76 8.448-8.64 19.872-8.64 34.272 0 14.208 2.88 25.632 8.64 34.272 5.952 8.448 14.112 12.672 24.48 12.672zM408.711 203.904V62.496h27.36l2.304 19.008h1.152c6.336-6.144 13.152-11.424 20.448-15.84 7.488-4.416 16.128-6.624 25.92-6.624 15.168 0 26.208 4.896 33.12 14.688 6.912 9.6 10.368 23.424 10.368 41.472v88.704h-33.12V119.52c0-11.712-1.728-19.968-5.184-24.768-3.456-4.8-9.12-7.2-16.992-7.2-6.144 0-11.616 1.536-16.416 4.608-4.608 2.88-9.888 7.2-15.84 12.96v98.784h-33.12zM619.692 207.36c-8.256 0-15.264-1.248-21.024-3.744-5.568-2.496-10.176-5.952-13.824-10.368-3.456-4.608-6.048-9.984-7.776-16.128-1.536-6.336-2.304-13.344-2.304-21.024V88.704h-20.16V63.936l21.888-1.44 4.032-38.592h27.648v38.592h36v26.208h-36v67.392c0 16.512 6.624 24.768 19.872 24.768 2.496 0 4.992-.288 7.488-.864 2.688-.576 5.088-1.344 7.2-2.304l5.76 24.48c-3.84 1.344-8.256 2.496-13.248 3.456-4.8 1.152-9.984 1.728-15.552 1.728zM673.93 203.904V62.496h33.12v141.408h-33.12zm16.704-166.176c-5.952 0-10.848-1.728-14.688-5.184-3.84-3.456-5.76-7.968-5.76-13.536s1.92-10.08 5.76-13.536C679.786 1.824 684.682 0 690.634 0s10.848 1.824 14.688 5.472c3.84 3.456 5.76 7.968 5.76 13.536s-1.92 10.08-5.76 13.536c-3.84 3.456-8.736 5.184-14.688 5.184zM781.561 207.36c-11.904 0-20.256-3.552-25.056-10.656-4.8-7.104-7.2-16.8-7.2-29.088V.576h33.12v168.768c0 4.032.768 6.912 2.304 8.64 1.536 1.536 3.168 2.304 4.896 2.304h2.016c.768 0 1.824-.192 3.168-.576l4.32 24.768c-4.416 1.92-10.272 2.88-17.568 2.88zM887.973 207.36c-9.792 0-18.912-1.632-27.36-4.896-8.448-3.456-15.84-8.352-22.176-14.688-6.336-6.336-11.328-14.016-14.976-23.04-3.456-9.216-5.184-19.68-5.184-31.392 0-11.52 1.824-21.888 5.472-31.104 3.648-9.216 8.448-16.992 14.4-23.328 6.144-6.336 13.152-11.232 21.024-14.688 7.872-3.456 15.936-5.184 24.192-5.184 9.6 0 18.048 1.632 25.344 4.896 7.296 3.264 13.344 7.872 18.144 13.824 4.992 5.952 8.736 13.056 11.232 21.312 2.496 8.256 3.744 17.28 3.744 27.072 0 3.264-.192 6.336-.576 9.216-.192 2.88-.48 5.184-.864 6.912h-89.856c1.536 12.672 5.952 22.464 13.248 29.376 7.488 6.72 16.992 10.08 28.512 10.08 6.144 0 11.808-.864 16.992-2.592 5.376-1.92 10.656-4.512 15.84-7.776l11.232 20.736c-6.72 4.416-14.208 8.064-22.464 10.944-8.256 2.88-16.896 4.32-25.92 4.32zm-37.728-87.552h62.784c0-10.944-2.4-19.488-7.2-25.632-4.608-6.336-11.808-9.504-21.6-9.504-8.448 0-15.84 2.976-22.176 8.928-6.336 5.952-10.272 14.688-11.808 26.208zM0 32.904c0-9.389 7.611-17 17-17h90c9.389 0 17 7.611 17 17s-7.611 17-17 17H17c-9.389 0-17-7.611-17-17zM50 116.904c0-9.389 7.611-17 17-17h10c9.389 0 17 7.611 17 17s-7.611 17-17 17H67c-9.389 0-17-7.611-17-17zM17 69.904c9.389 0 17 7.611 17 17v46c0 9.389-7.611 17-17 17s-17-7.611-17-17v-46c0-9.389 7.611-17 17-17zM17 203.904c9.389 0 17-7.611 17-17s-7.611-17-17-17-17 7.611-17 17 7.611 17 17 17z"
    ></path>
  </svg>
</template>
