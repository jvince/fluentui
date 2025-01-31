import * as React from 'react';
import type { SlotComponentType, UnknownSlotProps } from '@fluentui/react-utilities';
import { getMetadataFromSlotComponent } from '../utils/getMetadataFromSlotComponent';
import { Runtime } from '../utils/Runtime';

/**
 * @internal
 */
export function jsxStaticFromSlotComponent<Props extends UnknownSlotProps>(
  type: SlotComponentType<Props>,
  overrideProps: Props | null,
  key?: React.Key,
): React.ReactElement<Props> {
  const { elementType, renderFunction, props: slotProps } = getMetadataFromSlotComponent(type);

  const props: Props = { ...slotProps, ...overrideProps };

  if (renderFunction) {
    return Runtime.jsxs(
      React.Fragment,
      {
        children: renderFunction(elementType, props),
      },
      key,
    ) as React.ReactElement<Props>;
  }

  return Runtime.jsxs(elementType, props, key);
}
