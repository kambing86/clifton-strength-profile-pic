import { createEventBus, createUseEventBus } from '@kambing86/event-bus-ts';

export const EventType = {
  CHANGE_STRENGTH: 'changeStrength',
  SET_STRENGTH: 'setStrength'
} as const;

// define the payload data for Event
export type EventDataMapping = {
  [EventType.CHANGE_STRENGTH]: { rank: number; strength: string, zIndex: number };
  [EventType.SET_STRENGTH]: {rank: number; strength: string; zIndex: number; color: string}
};

export const eventBus = createEventBus<EventDataMapping>();

export const useEventBus = createUseEventBus<EventDataMapping>(eventBus);
