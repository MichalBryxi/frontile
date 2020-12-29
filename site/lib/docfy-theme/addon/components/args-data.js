export default [{"name":"Button","fileName":"packages/buttons/addon/components/button.ts","args":[{"name":"appearance","type":{"name":"enum","raw":"\"default\" | \"outlined\" | \"minimal\"","options":["'default'","'outlined'","'minimal'"]},"isRequired":false,"description":"The button appearance","tags":{"defaultValue":{"name":"defaultValue","value":"'default'"}},"defaultValue":"'default'"},{"name":"intent","type":{"name":"enum","raw":"\"primary\" | \"success\" | \"warning\" | \"danger\"","options":["'primary'","'success'","'warning'","'danger'"]},"isRequired":false,"description":"The intent of the button","tags":{}},{"name":"isLarge","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"isRenderless","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"isSmall","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"isXLarge","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"isXSmall","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"type","type":{"name":"enum","raw":"\"button\" | \"submit\" | \"reset\"","options":["'button'","'submit'","'reset'"]},"isRequired":false,"description":"The HTML type of the button","tags":{"defaultValue":{"name":"defaultValue","value":"'button'"}},"defaultValue":"'button'"}],"description":"","tags":{}},{"name":"CloseButton","fileName":"packages/core/addon/components/close-button.ts","args":[{"name":"onClick","type":{"name":"(event: Event) => void"},"isRequired":false,"description":"","tags":{}},{"name":"size","type":{"name":"enum","raw":"\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\"","options":["'xs'","'sm'","'md'","'lg'","'xl'"]},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"VisuallyHidden","fileName":"packages/core/addon/components/visually-hidden.ts","args":[],"description":"","tags":{}},{"name":"FormCheckboxGroup","fileName":"packages/forms/addon/components/form-checkbox-group.ts","args":[{"name":"containerClass","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"errors","type":{"name":"enum","raw":"string | string[]","options":["string","string[]"]},"isRequired":false,"description":"","tags":{}},{"name":"hasError","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"hasSubmitted","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"hint","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"isInline","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"label","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"onChange","type":{"name":"(value: unknown, event: Event) => void"},"isRequired":false,"description":"","tags":{}},{"name":"size","type":{"name":"enum","raw":"\"sm\" | \"lg\"","options":["'sm'","'lg'"]},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"FormCheckbox","fileName":"packages/forms/addon/components/form-checkbox.ts","args":[{"name":"checked","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"containerClass","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"hint","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"label","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"name","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"onChange","type":{"name":"(value: boolean, event: Event) => void"},"isRequired":false,"description":"","tags":{}},{"name":"size","type":{"name":"enum","raw":"\"sm\" | \"lg\"","options":["'sm'","'lg'"]},"isRequired":false,"description":"","tags":{}},{"name":"_parentOnChange","type":{"name":"(value: boolean, event: Event) => void"},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"FormInputBase","fileName":"packages/forms/addon/components/form-input.ts","args":[{"name":"containerClass","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"errors","type":{"name":"enum","raw":"string | string[]","options":["string","string[]"]},"isRequired":false,"description":"","tags":{}},{"name":"hasError","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"hasSubmitted","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"hint","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"label","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"onChange","type":{"name":"(value: string, event: InputEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onFocusIn","type":{"name":"(event: FocusEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onFocusOut","type":{"name":"(event: FocusEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onInput","type":{"name":"(value: string, event: InputEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"size","type":{"name":"enum","raw":"\"sm\" | \"lg\"","options":["'sm'","'lg'"]},"isRequired":false,"description":"","tags":{}},{"name":"type","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"value","type":{"name":"unknown"},"isRequired":true,"description":"","tags":{}}],"description":"","tags":{}},{"name":"FormInput","fileName":"packages/forms/addon/components/form-input.ts","args":[{"name":"containerClass","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"errors","type":{"name":"enum","raw":"string | string[]","options":["string","string[]"]},"isRequired":false,"description":"","tags":{}},{"name":"hasError","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"hasSubmitted","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"hint","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"label","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"onChange","type":{"name":"(value: string, event: InputEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onFocusIn","type":{"name":"(event: FocusEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onFocusOut","type":{"name":"(event: FocusEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onInput","type":{"name":"(value: string, event: InputEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"size","type":{"name":"enum","raw":"\"sm\" | \"lg\"","options":["'sm'","'lg'"]},"isRequired":false,"description":"","tags":{}},{"name":"type","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"value","type":{"name":"unknown"},"isRequired":true,"description":"","tags":{}}],"description":"","tags":{}},{"name":"FormRadioGroup","fileName":"packages/forms/addon/components/form-radio-group.ts","args":[{"name":"containerClass","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"errors","type":{"name":"enum","raw":"string | string[]","options":["string","string[]"]},"isRequired":false,"description":"","tags":{}},{"name":"hasError","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"hasSubmitted","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"hint","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"isInline","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"label","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"onChange","type":{"name":"(value: unknown, event: Event) => void"},"isRequired":false,"description":"","tags":{}},{"name":"size","type":{"name":"enum","raw":"\"sm\" | \"lg\"","options":["'sm'","'lg'"]},"isRequired":false,"description":"","tags":{}},{"name":"value","type":{"name":"unknown"},"isRequired":true,"description":"","tags":{}}],"description":"","tags":{}},{"name":"FormRadio","fileName":"packages/forms/addon/components/form-radio.ts","args":[{"name":"checked","type":{"name":"unknown"},"isRequired":false,"description":"","tags":{}},{"name":"containerClass","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"hint","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"label","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"name","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"onChange","type":{"name":"(value: unknown, event: Event) => void"},"isRequired":false,"description":"","tags":{}},{"name":"size","type":{"name":"enum","raw":"\"sm\" | \"lg\"","options":["'sm'","'lg'"]},"isRequired":false,"description":"","tags":{}},{"name":"value","type":{"name":"unknown"},"isRequired":false,"description":"","tags":{}},{"name":"_parentOnChange","type":{"name":"(value: unknown, event: Event) => void"},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"FormSelect","fileName":"packages/forms/addon/components/form-select.ts","args":[{"name":"buildSelection","type":{"name":"(selected: any, select: Select) => any"},"isRequired":false,"description":"","tags":{}},{"name":"closeOnSelect","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"containerClass","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"defaultHighlighted","type":{"name":"any"},"isRequired":false,"description":"","tags":{}},{"name":"errors","type":{"name":"enum","raw":"string | string[]","options":["string","string[]"]},"isRequired":false,"description":"","tags":{}},{"name":"hasError","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"hasSubmitted","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"highlightOnHover","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"initiallyOpened","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"label","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"matcher","type":{"name":"MatcherFn"},"isRequired":false,"description":"","tags":{}},{"name":"matchTriggerWidth","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"noMatchesMessage","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"onBlur","type":{"name":"(select: Select, event: FocusEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onChange","type":{"name":"(selection: any, select: Select, event?: Event) => void"},"isRequired":true,"description":"","tags":{}},{"name":"onClose","type":{"name":"(select: Select, e: Event) => boolean"},"isRequired":false,"description":"","tags":{}},{"name":"onFocus","type":{"name":"(select: Select, event: FocusEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onFocusIn","type":{"name":"(select: Select, event: FocusEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onFocusOut","type":{"name":"(select: Select, event: FocusEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onInput","type":{"name":"(term: string, select: Select, e: Event) => string | false | void"},"isRequired":false,"description":"","tags":{}},{"name":"onKeydown","type":{"name":"(select: Select, e: KeyboardEvent) => boolean"},"isRequired":false,"description":"","tags":{}},{"name":"onOpen","type":{"name":"(select: Select, e: Event) => boolean"},"isRequired":false,"description":"","tags":{}},{"name":"options","type":{"name":"enum","raw":"any[] | PromiseProxy<any[]>","options":["any[]","PromiseProxy<any[]>"]},"isRequired":true,"description":"","tags":{}},{"name":"placeholderComponent","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"registerAPI","type":{"name":"(select: Select) => void"},"isRequired":false,"description":"","tags":{}},{"name":"scrollTo","type":{"name":"(option: any, select: Select) => void"},"isRequired":false,"description":"","tags":{}},{"name":"search","type":{"name":"(term: string, select: Select) => any[] | PromiseProxy<any[]>"},"isRequired":false,"description":"","tags":{}},{"name":"searchEnabled","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"searchField","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"searchMessage","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"selected","type":{"name":"any"},"isRequired":true,"description":"","tags":{}},{"name":"size","type":{"name":"enum","raw":"\"sm\" | \"lg\"","options":["'sm'","'lg'"]},"isRequired":false,"description":"","tags":{}},{"name":"tabindex","type":{"name":"enum","raw":"string | number","options":["string","number"]},"isRequired":false,"description":"","tags":{}},{"name":"triggerComponent","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"typeAheadOptionMatcher","type":{"name":"MatcherFn"},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"FormTextarea","fileName":"packages/forms/addon/components/form-textarea.ts","args":[{"name":"containerClass","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"errors","type":{"name":"enum","raw":"string | string[]","options":["string","string[]"]},"isRequired":false,"description":"","tags":{}},{"name":"hasError","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"hasSubmitted","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"hint","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"label","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"onChange","type":{"name":"(value: string, event: InputEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onFocusIn","type":{"name":"(event: FocusEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onFocusOut","type":{"name":"(event: FocusEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onInput","type":{"name":"(value: string, event: InputEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"size","type":{"name":"enum","raw":"\"sm\" | \"lg\"","options":["'sm'","'lg'"]},"isRequired":false,"description":"","tags":{}},{"name":"type","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"value","type":{"name":"unknown"},"isRequired":true,"description":"","tags":{}}],"description":"","tags":{}},{"name":"NotificationCard","fileName":"packages/notifications/addon/components/notification-card.ts","args":[{"name":"notification","type":{"name":"Notification"},"isRequired":true,"description":"","tags":{}},{"name":"placement","type":{"name":"enum","raw":"\"top-left\" | \"top-center\" | \"top-right\" | \"bottom-left\" | \"bottom-center\" | \"bottom-right\"","options":["'top-left'","'top-center'","'top-right'","'bottom-left'","'bottom-center'","'bottom-right'"]},"isRequired":true,"description":"","tags":{}},{"name":"spacing","type":{"name":"number"},"isRequired":false,"description":"Spacing for each notification, in px.","tags":{"defaultValue":{"name":"defaultValue","value":"16"}},"defaultValue":"16"}],"description":"","tags":{}},{"name":"NotificationsContainer","fileName":"packages/notifications/addon/components/notifications-container.ts","args":[{"name":"placement","type":{"name":"enum","raw":"\"top-left\" | \"top-center\" | \"top-right\" | \"bottom-left\" | \"bottom-center\" | \"bottom-right\"","options":["'top-left'","'top-center'","'top-right'","'bottom-left'","'bottom-center'","'bottom-right'"]},"isRequired":false,"description":"The placement of the notifications","tags":{"defaultValue":{"name":"defaultValue","value":"'bottom-right'"}},"defaultValue":"'bottom-right'"},{"name":"spacing","type":{"name":"number"},"isRequired":false,"description":"Spacing for each notification, in px.","tags":{"defaultValue":{"name":"defaultValue","value":"16"}},"defaultValue":"16"}],"description":"","tags":{}},{"name":"Overlay","fileName":"packages/overlays/addon/components/overlay.ts","args":[{"name":"backdropTransitionName","type":{"name":"string"},"isRequired":false,"description":"The name of the transition to be used in the backdrop.","tags":{"defaultValue":{"name":"defaultValue","value":"`overlay-transition--fade`"}},"defaultValue":"`overlay-transition--fade`"},{"name":"closeOnEscapeKey","type":{"name":"boolean"},"isRequired":false,"description":"Whether to close when the escape key is pressed","tags":{"defaultValue":{"name":"defaultValue","value":"true"}},"defaultValue":"true"},{"name":"closeOnOutsideClick","type":{"name":"boolean"},"isRequired":false,"description":"Whether to close when the area outside (the backdrop) is clicked","tags":{"defaultValue":{"name":"defaultValue","value":"true"}},"defaultValue":"true"},{"name":"contentTransitionName","type":{"name":"string"},"isRequired":false,"description":"The name of the transition to be used in the content.","tags":{"defaultValue":{"name":"defaultValue","value":"'overlay-transition--fade'"}},"defaultValue":"'overlay-transition--fade'"},{"name":"destinationElementId","type":{"name":"string"},"isRequired":false,"description":"The destination where the overlay will be inserted, defaults to\n`document.body`","tags":{"defaultValue":{"name":"defaultValue","value":"undefined"}},"defaultValue":"undefined"},{"name":"didClose","type":{"name":"() => void"},"isRequired":false,"description":"A function that will be called when closing is finished executing, this\nincludes waiting for animations/transitions to finish.","tags":{}},{"name":"disableBackdrop","type":{"name":"boolean"},"isRequired":false,"description":"Whether to hide the backdrop or not","tags":{"defaultValue":{"name":"defaultValue","value":"false"}},"defaultValue":"false"},{"name":"disableFocusTrap","type":{"name":"boolean"},"isRequired":false,"description":"Whether the focus trap is disabled or not","tags":{"defaultValue":{"name":"defaultValue","value":"false"}},"defaultValue":"false"},{"name":"disableTransitions","type":{"name":"boolean"},"isRequired":false,"description":"Disable css transitions","tags":{"defaultValue":{"name":"defaultValue","value":"false"}},"defaultValue":"false"},{"name":"focusTrapOptions","type":{"name":"unknown"},"isRequired":false,"description":"Focus trap options","tags":{"defaultValue":{"name":"defaultValue","value":"{ allowOutsideClick: true }"}},"defaultValue":"{ allowOutsideClick: true }"},{"name":"isOpen","type":{"name":"boolean"},"isRequired":true,"description":"Whether it is open or not","tags":{}},{"name":"onClose","type":{"name":"() => void"},"isRequired":false,"description":"A function that will be called when closed","tags":{}},{"name":"renderInPlace","type":{"name":"boolean"},"isRequired":false,"description":"Whether to render in place or in the specified/default destination","tags":{"defaultValue":{"name":"defaultValue","value":"false"}},"defaultValue":"false"},{"name":"transitionDuration","type":{"name":"number"},"isRequired":false,"description":"Duration of the animation","tags":{"defaultValue":{"name":"defaultValue","value":"200"}},"defaultValue":"200"}],"description":"","tags":{}},{"name":"ChangesetForm","fileName":"packages/changeset-form/addon/components/changeset-form/index.ts","args":[{"name":"changeset","type":{"name":"BufferedChangeset"},"isRequired":true,"description":"","tags":{}},{"name":"onReset","type":{"name":"(data: unknown, event: Event) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onSubmit","type":{"name":"(data: unknown, event: Event) => void"},"isRequired":false,"description":"","tags":{}},{"name":"runExecuteInsteadOfSave","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"Collapsible","fileName":"packages/core/addon/components/collapsible/index.ts","args":[{"name":"initialHeight","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"isOpen","type":{"name":"boolean"},"isRequired":true,"description":"","tags":{}}],"description":"","tags":{}},{"name":"FormFieldCheckbox","fileName":"packages/forms/addon/components/form-field/checkbox.ts","args":[{"name":"checked","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"name","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"onChange","type":{"name":"(value: boolean, event: Event) => void"},"isRequired":false,"description":"","tags":{}},{"name":"size","type":{"name":"enum","raw":"\"sm\" | \"lg\"","options":["'sm'","'lg'"]},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"FormFieldFeedback","fileName":"packages/forms/addon/components/form-field/feedback.ts","args":[{"name":"errors","type":{"name":"enum","raw":"string | string[]","options":["string","string[]"]},"isRequired":false,"description":"","tags":{}},{"name":"isError","type":{"name":"boolean"},"isRequired":false,"description":"","tags":{}},{"name":"size","type":{"name":"enum","raw":"\"sm\" | \"lg\"","options":["'sm'","'lg'"]},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"FormFieldHint","fileName":"packages/forms/addon/components/form-field/hint.ts","args":[{"name":"id","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"size","type":{"name":"enum","raw":"\"sm\" | \"lg\"","options":["'sm'","'lg'"]},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"FormField","fileName":"packages/forms/addon/components/form-field/index.ts","args":[{"name":"size","type":{"name":"enum","raw":"\"sm\" | \"lg\"","options":["'sm'","'lg'"]},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"FormFieldInput","fileName":"packages/forms/addon/components/form-field/input.ts","args":[{"name":"id","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"onChange","type":{"name":"(value: string, event: InputEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onInput","type":{"name":"(value: string, event: InputEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"size","type":{"name":"enum","raw":"\"sm\" | \"lg\"","options":["'sm'","'lg'"]},"isRequired":false,"description":"","tags":{}},{"name":"type","type":{"name":"string"},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"FormFieldLabel","fileName":"packages/forms/addon/components/form-field/label.ts","args":[{"name":"for","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"size","type":{"name":"enum","raw":"\"sm\" | \"lg\"","options":["'sm'","'lg'"]},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"FormFieldRadio","fileName":"packages/forms/addon/components/form-field/radio.ts","args":[{"name":"checked","type":{"name":"unknown"},"isRequired":false,"description":"","tags":{}},{"name":"name","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"onChange","type":{"name":"(value: unknown, event: Event) => void"},"isRequired":false,"description":"","tags":{}},{"name":"size","type":{"name":"enum","raw":"\"sm\" | \"lg\"","options":["'sm'","'lg'"]},"isRequired":false,"description":"","tags":{}},{"name":"value","type":{"name":"unknown"},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"FormFieldTextarea","fileName":"packages/forms/addon/components/form-field/textarea.ts","args":[{"name":"id","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"onChange","type":{"name":"(value: string, event: InputEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onInput","type":{"name":"(value: string, event: InputEvent) => void"},"isRequired":false,"description":"","tags":{}},{"name":"size","type":{"name":"enum","raw":"\"sm\" | \"lg\"","options":["'sm'","'lg'"]},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"DrawerBody","fileName":"packages/overlays/addon/components/drawer/body.ts","args":[],"description":"","tags":{}},{"name":"DrawerFooter","fileName":"packages/overlays/addon/components/drawer/footer.ts","args":[],"description":"","tags":{}},{"name":"DrawerHeader","fileName":"packages/overlays/addon/components/drawer/header.ts","args":[{"name":"labelledById","type":{"name":"string"},"isRequired":true,"description":"The id used to reference labelledById in Drawer component","tags":{}}],"description":"","tags":{}},{"name":"Drawer","fileName":"packages/overlays/addon/components/drawer/index.ts","args":[{"name":"allowCloseButton","type":{"name":"boolean"},"isRequired":false,"description":"If set to false, the close button will not be displayed.","tags":{"defaultValue":{"name":"defaultValue","value":"true"}},"defaultValue":"true"},{"name":"allowClosing","type":{"name":"boolean"},"isRequired":false,"description":"If set to false, the close button will not be displayed,\ncloseOnOutsideClick will be set to false, and closeOnEscapeKey will also be set\nto false.","tags":{"defaultValue":{"name":"defaultValue","value":"true"}},"defaultValue":"true"},{"name":"backdropTransitionName","type":{"name":"string"},"isRequired":false,"description":"The name of the transition to be used in the backdrop.","tags":{"defaultValue":{"name":"defaultValue","value":"`overlay-transition--fade`"}},"defaultValue":"`overlay-transition--fade`"},{"name":"closeButtonSize","type":{"name":"enum","raw":"\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\"","options":["'xs'","'sm'","'md'","'lg'","'xl'"]},"isRequired":false,"description":"The Close Button size.","tags":{}},{"name":"closeOnEscapeKey","type":{"name":"boolean"},"isRequired":false,"description":"Whether to close when the escape key is pressed","tags":{"defaultValue":{"name":"defaultValue","value":"true"}},"defaultValue":"true"},{"name":"closeOnOutsideClick","type":{"name":"boolean"},"isRequired":false,"description":"Whether to close when the area outside (the backdrop) is clicked","tags":{"defaultValue":{"name":"defaultValue","value":"true"}},"defaultValue":"true"},{"name":"destinationElementId","type":{"name":"string"},"isRequired":false,"description":"The destination where the overlay will be inserted, defaults to\n`document.body`","tags":{"defaultValue":{"name":"defaultValue","value":"undefined"}},"defaultValue":"undefined"},{"name":"didClose","type":{"name":"() => void"},"isRequired":false,"description":"A function that will be called when closing is finished executing, this\nincludes waiting for animations/transitions to finish.","tags":{}},{"name":"disableBackdrop","type":{"name":"boolean"},"isRequired":false,"description":"Whether to hide the backdrop or not","tags":{"defaultValue":{"name":"defaultValue","value":"false"}},"defaultValue":"false"},{"name":"disableFocusTrap","type":{"name":"boolean"},"isRequired":false,"description":"Whether the focus trap is disabled or not","tags":{"defaultValue":{"name":"defaultValue","value":"false"}},"defaultValue":"false"},{"name":"disableTransitions","type":{"name":"boolean"},"isRequired":false,"description":"Disable css transitions","tags":{"defaultValue":{"name":"defaultValue","value":"false"}},"defaultValue":"false"},{"name":"focusTrapOptions","type":{"name":"unknown"},"isRequired":false,"description":"Focus trap options","tags":{"defaultValue":{"name":"defaultValue","value":"{ allowOutsideClick: true }"}},"defaultValue":"{ allowOutsideClick: true }"},{"name":"isOpen","type":{"name":"boolean"},"isRequired":true,"description":"Whether it is open or not","tags":{}},{"name":"onClose","type":{"name":"() => void"},"isRequired":false,"description":"A function that will be called when closed","tags":{}},{"name":"placement","type":{"name":"enum","raw":"\"top\" | \"bottom\" | \"left\" | \"right\"","options":["'top'","'bottom'","'left'","'right'"]},"isRequired":false,"description":"The Drawer can appear from any side of the screen. The 'placement'\noption allows to choose where it appears from.","tags":{"defaultValue":{"name":"defaultValue","value":"'right'"}},"defaultValue":"'right'"},{"name":"renderInPlace","type":{"name":"boolean"},"isRequired":false,"description":"Whether to render in place or in the specified/default destination","tags":{"defaultValue":{"name":"defaultValue","value":"false"}},"defaultValue":"false"},{"name":"size","type":{"name":"enum","raw":"\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\" | \"full\"","options":["'xs'","'sm'","'md'","'lg'","'xl'","'full'"]},"isRequired":false,"description":"The Drawer size.","tags":{"defaultValue":{"name":"defaultValue","value":"'md'"}},"defaultValue":"'md'"},{"name":"transitionDuration","type":{"name":"number"},"isRequired":false,"description":"Duration of the animation","tags":{"defaultValue":{"name":"defaultValue","value":"200"}},"defaultValue":"200"},{"name":"transitionName","type":{"name":"string"},"isRequired":false,"description":"The name of the transition to be used in the modal.","tags":{"defaultValue":{"name":"defaultValue","value":"'overlay-transition--slide-from-[placement]'"}},"defaultValue":"'overlay-transition--slide-from-[placement]'"}],"description":"","tags":{}},{"name":"ModalBody","fileName":"packages/overlays/addon/components/modal/body.ts","args":[],"description":"","tags":{}},{"name":"ModalFooter","fileName":"packages/overlays/addon/components/modal/footer.ts","args":[],"description":"","tags":{}},{"name":"ModalHeader","fileName":"packages/overlays/addon/components/modal/header.ts","args":[{"name":"labelledById","type":{"name":"string"},"isRequired":true,"description":"The id used to reference labelledById in Modal component","tags":{}}],"description":"","tags":{}},{"name":"Modal","fileName":"packages/overlays/addon/components/modal/index.ts","args":[{"name":"allowCloseButton","type":{"name":"boolean"},"isRequired":false,"description":"If set to false, the close button will not be displayed.","tags":{"defaultValue":{"name":"defaultValue","value":"true"}},"defaultValue":"true"},{"name":"allowClosing","type":{"name":"boolean"},"isRequired":false,"description":"If set to false, the close button will not be displayed,\ncloseOnOutsideClick will be set to false, and closeOnEscapeKey will also be set\nto false.","tags":{"defaultValue":{"name":"defaultValue","value":"true"}},"defaultValue":"true"},{"name":"backdropTransitionName","type":{"name":"string"},"isRequired":false,"description":"The name of the transition to be used in the backdrop.","tags":{"defaultValue":{"name":"defaultValue","value":"`overlay-transition--fade`"}},"defaultValue":"`overlay-transition--fade`"},{"name":"closeButtonSize","type":{"name":"enum","raw":"\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\"","options":["'xs'","'sm'","'md'","'lg'","'xl'"]},"isRequired":false,"description":"The Close Button size.","tags":{}},{"name":"closeOnEscapeKey","type":{"name":"boolean"},"isRequired":false,"description":"Whether to close when the escape key is pressed","tags":{"defaultValue":{"name":"defaultValue","value":"true"}},"defaultValue":"true"},{"name":"closeOnOutsideClick","type":{"name":"boolean"},"isRequired":false,"description":"Whether to close when the area outside (the backdrop) is clicked","tags":{"defaultValue":{"name":"defaultValue","value":"true"}},"defaultValue":"true"},{"name":"destinationElementId","type":{"name":"string"},"isRequired":false,"description":"The destination where the overlay will be inserted, defaults to\n`document.body`","tags":{"defaultValue":{"name":"defaultValue","value":"undefined"}},"defaultValue":"undefined"},{"name":"didClose","type":{"name":"() => void"},"isRequired":false,"description":"A function that will be called when closing is finished executing, this\nincludes waiting for animations/transitions to finish.","tags":{}},{"name":"disableBackdrop","type":{"name":"boolean"},"isRequired":false,"description":"Whether to hide the backdrop or not","tags":{"defaultValue":{"name":"defaultValue","value":"false"}},"defaultValue":"false"},{"name":"disableFocusTrap","type":{"name":"boolean"},"isRequired":false,"description":"Whether the focus trap is disabled or not","tags":{"defaultValue":{"name":"defaultValue","value":"false"}},"defaultValue":"false"},{"name":"disableTransitions","type":{"name":"boolean"},"isRequired":false,"description":"Disable css transitions","tags":{"defaultValue":{"name":"defaultValue","value":"false"}},"defaultValue":"false"},{"name":"focusTrapOptions","type":{"name":"unknown"},"isRequired":false,"description":"Focus trap options","tags":{"defaultValue":{"name":"defaultValue","value":"{ allowOutsideClick: true }"}},"defaultValue":"{ allowOutsideClick: true }"},{"name":"isCentered","type":{"name":"boolean"},"isRequired":false,"description":"If set to true, the modal will be vertically centered","tags":{"defaultValue":{"name":"defaultValue","value":"false"}},"defaultValue":"false"},{"name":"isOpen","type":{"name":"boolean"},"isRequired":true,"description":"Whether it is open or not","tags":{}},{"name":"onClose","type":{"name":"() => void"},"isRequired":false,"description":"A function that will be called when closed","tags":{}},{"name":"renderInPlace","type":{"name":"boolean"},"isRequired":false,"description":"Whether to render in place or in the specified/default destination","tags":{"defaultValue":{"name":"defaultValue","value":"false"}},"defaultValue":"false"},{"name":"size","type":{"name":"enum","raw":"\"xs\" | \"sm\" | \"md\" | \"lg\" | \"xl\" | \"full\"","options":["'xs'","'sm'","'md'","'lg'","'xl'","'full'"]},"isRequired":false,"description":"The Modal size.","tags":{"defaultValue":{"name":"defaultValue","value":"'lg'"}},"defaultValue":"'lg'"},{"name":"transitionDuration","type":{"name":"number"},"isRequired":false,"description":"Duration of the animation","tags":{"defaultValue":{"name":"defaultValue","value":"200"}},"defaultValue":"200"},{"name":"transitionName","type":{"name":"string"},"isRequired":false,"description":"The name of the transition to be used in the modal.","tags":{"defaultValue":{"name":"defaultValue","value":"'overlay-transition--zoom'"}},"defaultValue":"'overlay-transition--zoom'"}],"description":"","tags":{}},{"name":"ChangesetFormFieldsBase","fileName":"packages/changeset-form/addon/components/changeset-form/fields/base.ts","args":[{"name":"changeset","type":{"name":"BufferedChangeset"},"isRequired":true,"description":"","tags":{}},{"name":"errors","type":{"name":"string[]"},"isRequired":false,"description":"","tags":{}},{"name":"fieldName","type":{"name":"string"},"isRequired":true,"description":"","tags":{}}],"description":"","tags":{}},{"name":"ChangesetFormFieldsCheckboxGroup","fileName":"packages/changeset-form/addon/components/changeset-form/fields/checkbox-group.ts","args":[{"name":"changeset","type":{"name":"BufferedChangeset"},"isRequired":true,"description":"","tags":{}},{"name":"errors","type":{"name":"string[]"},"isRequired":false,"description":"","tags":{}},{"name":"groupName","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"onChange","type":{"name":"(value: unknown, event: Event) => void"},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"ChangesetFormFieldsCheckbox","fileName":"packages/changeset-form/addon/components/changeset-form/fields/checkbox.ts","args":[{"name":"changeset","type":{"name":"BufferedChangeset"},"isRequired":true,"description":"","tags":{}},{"name":"errors","type":{"name":"string[]"},"isRequired":false,"description":"","tags":{}},{"name":"fieldName","type":{"name":"string"},"isRequired":true,"description":"","tags":{}},{"name":"onChange","type":{"name":"(value: unknown, event: Event) => void"},"isRequired":false,"description":"","tags":{}},{"name":"_groupName","type":{"name":"string"},"isRequired":false,"description":"","tags":{}},{"name":"_parentOnChange","type":{"name":"(value: unknown, event: Event) => void"},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"ChangesetFormFieldsInput","fileName":"packages/changeset-form/addon/components/changeset-form/fields/input.ts","args":[{"name":"changeset","type":{"name":"BufferedChangeset"},"isRequired":true,"description":"","tags":{}},{"name":"errors","type":{"name":"string[]"},"isRequired":false,"description":"","tags":{}},{"name":"fieldName","type":{"name":"string"},"isRequired":true,"description":"","tags":{}},{"name":"onInput","type":{"name":"(value: string, event: InputEvent) => void"},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"ChangesetFormFieldsRadioGroup","fileName":"packages/changeset-form/addon/components/changeset-form/fields/radio-group.ts","args":[{"name":"changeset","type":{"name":"BufferedChangeset"},"isRequired":true,"description":"","tags":{}},{"name":"errors","type":{"name":"string[]"},"isRequired":false,"description":"","tags":{}},{"name":"fieldName","type":{"name":"string"},"isRequired":true,"description":"","tags":{}},{"name":"onChange","type":{"name":"(value: unknown, event: Event) => void"},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"ChangesetFormFieldsRadio","fileName":"packages/changeset-form/addon/components/changeset-form/fields/radio.ts","args":[{"name":"changeset","type":{"name":"BufferedChangeset"},"isRequired":true,"description":"","tags":{}},{"name":"errors","type":{"name":"string[]"},"isRequired":false,"description":"","tags":{}},{"name":"fieldName","type":{"name":"string"},"isRequired":true,"description":"","tags":{}},{"name":"onChange","type":{"name":"(value: unknown, event: Event) => void"},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"ChangesetFormFieldsSelect","fileName":"packages/changeset-form/addon/components/changeset-form/fields/select.ts","args":[{"name":"changeset","type":{"name":"BufferedChangeset"},"isRequired":true,"description":"","tags":{}},{"name":"errors","type":{"name":"string[]"},"isRequired":false,"description":"","tags":{}},{"name":"fieldName","type":{"name":"string"},"isRequired":true,"description":"","tags":{}},{"name":"onChange","type":{"name":"(selection: unknown, select: Select, event?: Event) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onClose","type":{"name":"(select: Select, event: Event) => void"},"isRequired":false,"description":"","tags":{}},{"name":"onFocusOut","type":{"name":"(select: Select, event: FocusEvent) => void"},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}},{"name":"ChangesetFormFieldsTextarea","fileName":"packages/changeset-form/addon/components/changeset-form/fields/textarea.ts","args":[{"name":"changeset","type":{"name":"BufferedChangeset"},"isRequired":true,"description":"","tags":{}},{"name":"errors","type":{"name":"string[]"},"isRequired":false,"description":"","tags":{}},{"name":"fieldName","type":{"name":"string"},"isRequired":true,"description":"","tags":{}},{"name":"onInput","type":{"name":"(value: string, event: InputEvent) => void"},"isRequired":false,"description":"","tags":{}}],"description":"","tags":{}}];