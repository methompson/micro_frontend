export const myQNavEventName = 'MyQNavEvent';

export type eventHandler = (
  payload?: Record<string, unknown>,
) => unknown | Promise<unknown>;

/**
 * The event bus is used to communicate between the host and client applications.
 * This allows host applications to communicate with client applications and client
 * applications to communicate with each other.
 */

export class EventBus {
  /**
   * Each action has a single list with associated event handlers.
   */
  protected actions: Record<string, eventHandler[]> = {};

  /**
   * The emit method will call each event handler in the list of actions for the given event.
   */
  emit(event: string, payload?: Record<string, unknown>) {
    const actions = this.actions[event] ?? [];
    try {
      const promises = actions.map((action) => action(payload));
      Promise.all(promises);
    } catch (e) {
      console.error(e);
    }
  }

  /**
   * The subscribe method will add the given event handler to the list of actions for the given event.
   * When subscribing to an event, caution should be taken NOT to use anonymous functions or closures.
   * This is because the unsubscribe method will not be able to remove the event handler from the list
   * of actions. This will result in a memory leak. Rather, we need a reference to the function that
   * was passed to the subscribe method so that we can pass it to the unsubscribe method.
   */
  subscribe(event: string, action: eventHandler) {
    let included = false;
    const actions = this.actions[event] ?? [];

    // Check to see if the action is already in the list of actions for the given event.
    // This relies on function references being the same for the same function.
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

  /**
   * The unsubscribe method will remove the given event handler from the list of actions for the given event.
   * When unsubscribing from an event, caution should be taken NOT to use anonymous functions or closures.
   * This is because the unsubscribe method will not be able to remove the event handler from the list
   * of actions. This will result in a memory leak. Rather, we need a reference to the function that
   * was passed to the subscribe method so that we can pass it to the unsubscribe method.
   */
  unsubscribe(event: string, action: eventHandler) {
    const actions = this.actions[event];

    if (!actions) {
      return;
    }

    // Filter out the action from the list of actions for the given event.
    this.actions[event] = actions.filter((a) => a !== action);
  }
}
