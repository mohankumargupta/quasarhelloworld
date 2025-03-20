import { useEventBus } from '@vueuse/core';

const eventBus = useEventBus('resize');

export const playgroundEventBus = useEventBus('playground');
export default eventBus;
