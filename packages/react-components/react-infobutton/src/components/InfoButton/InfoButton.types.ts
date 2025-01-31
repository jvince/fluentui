import type { ComponentProps, ComponentState, Slot } from '@fluentui/react-utilities';
import type { PopoverProps, PopoverSurface } from '@fluentui/react-popover';

export type InfoButtonSlots = {
  root: NonNullable<Slot<'button'>>;

  /**
   * The Popover element that wraps the info and root slots. Use this slot to pass props to the Popover.
   */
  popover: NonNullable<Slot<Partial<PopoverProps>>>;

  /**
   * The information to be displayed in the PopoverSurface when the button is pressed.
   */
  info: NonNullable<Slot<typeof PopoverSurface>>;
};

/**
 * InfoButton Props
 */
export type InfoButtonProps = Omit<ComponentProps<Partial<InfoButtonSlots>>, 'disabled'> & {
  /**
   * Size of the InfoButton.
   *
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
};

/**
 * State used in rendering InfoButton
 */
export type InfoButtonState = ComponentState<InfoButtonSlots> & Required<Pick<InfoButtonProps, 'size'>>;
