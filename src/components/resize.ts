import { useEventBus } from '@vueuse/core';

const eventBus = useEventBus('resize');
export default eventBus;
