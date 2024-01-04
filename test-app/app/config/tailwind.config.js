/* eslint-disable node/no-extraneous-require */
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    './app/**/*.{html,js,ts,hbs}',
    './node_modules/@frontile/buttons/dist/**/*.{js,ts}'
  ],

  theme: {
    extend: {
      colors: {
        teal: colors.teal
      }
    }
  },
  plugins: [
    require('@frontile/core/tailwind'),
    require('@frontile/forms/tailwind'),
    require('@frontile/buttons/tailwind'),
    require('@frontile/notifications/tailwind'),
    require('@frontile/overlays/tailwind')
  ],
  safelist: [
    { pattern: /^close-button/ },
    { pattern: /^js-focus-visible/ },
    { pattern: /^sr-only/ },

    // Frontile Forms
    { pattern: /^form-field-checkbox/ },
    { pattern: /^form-field-feedback/ },
    { pattern: /^form-field-hint/ },
    { pattern: /^form-field-input/ },
    { pattern: /^form-field-label/ },
    { pattern: /^form-field-radio/ },
    { pattern: /^form-field-textarea/ },
    { pattern: /^form-input/ },
    { pattern: /^form-textarea/ },
    { pattern: /^form-select/ },
    { pattern: /^form-checkbox/ },
    { pattern: /^form-radio/ },
    { pattern: /^form-checkbox-group/ },
    { pattern: /^form-radio-group/ },

    // Frontile Notifications
    { pattern: /^notifications-container/ },
    { pattern: /^notification-card/ },
    { pattern: /^notification-transition/ },

    // Frontile Overlays
    { pattern: /^overlay/ },
    { pattern: /^modal/ },
    { pattern: /^drawer/ },

    // Frontile Buttons
    { pattern: /^btn/ },

    // Power Select
    { pattern: /^ember-power-select/ }
  ]
};
