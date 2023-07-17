export const myQNavEventName = 'MyQNavEvent';

// Review the commentary in the EventBus in micro_app_one to understand what is happening here.

export type eventHandler = (
  payload?: Record<string, unknown>,
) => unknown | Promise<unknown>;

export class EventBus {
  protected actions: Record<string, eventHandler[]> = {};

  emit(event: string, payload?: Record<string, unknown>) {
    const actions = this.actions[event] ?? [];
    try {
      const promises = actions.map((action) => action(payload));
      Promise.all(promises);
    } catch (e) {
      console.error(e);
    }
  }

  subscribe(event: string, action: eventHandler) {
    let included = false;
    const actions = this.actions[event] ?? [];

    actions.forEach((a) => {
      if (a === action) {
        included = true;
      }
    });

    if (!included) {
      actions.push(action);
      this.actions[event] = actions;
    }
  }

  unsubscribe(event: string, action: eventHandler) {
    const actions = this.actions[event];

    if (!actions) {
      return;
    }

    this.actions[event] = actions.filter((a) => a !== action);
  }
}
