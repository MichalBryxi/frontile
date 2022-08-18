import Component from '@glimmer/component';
import { action } from '@ember/object';

export interface CloseButtonArgs {
  /**
   * The icon size
   *
   * @defaultValue 'lg'
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';

  /**
   * The function to call when button is clicked
   */
  onClick?: (event: Event) => void;
}

export interface CloseButtonSignature {
  Args: CloseButtonArgs;
  Blocks: {
    default: [string | null];
  };
  Element: HTMLButtonElement;
}

export default class CloseButton extends Component<CloseButtonSignature> {
  @action handleClick(event: Event): void {
    if (typeof this.args.onClick === 'function') {
      this.args.onClick(event);
    }
  }
}
