import { useEventBus } from '@vueuse/core';

const eventBus = useEventBus('resize');

export const playgroundEventBus = useEventBus('playground');
export const playButtonEventBus = useEventBus('playButton');
export default eventBus;
