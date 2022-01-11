import { hasOwnProp, generateUniqueId } from './helpers';

export const eventFactory = (name: string, value: any) => {
  const fakeEvent = new Event('change', { bubbles: true });
  const event: React.ChangeEvent<any> = {
    ...fakeEvent,
    target: {
      ...fakeEvent.target,
      name: name,
      value: value,
    },
    nativeEvent: fakeEvent,
    isDefaultPrevented: () => false,
    persist: () => {},
    isPropagationStopped: () => false,
  } as React.SyntheticEvent<any>;

  return event;
};

export class GlobalEventListener {
  callbacks: object;
  listeners: object;

  constructor() {
    this.callbacks = {};
    this.listeners = {};
  }

  handleEvent = (name, event) => {
    for (const id in this.callbacks) {
      if (hasOwnProp(this.callbacks, id)) this.callbacks[id][name](event);
    }
  };

  register = callbacks => {
    const id = generateUniqueId();

    for (const i in callbacks) {
      if (hasOwnProp(callbacks, i)) {
        if (hasOwnProp(this.listeners, i)) window.removeEventListener(i, this.listeners[id]);

        this.listeners[i] = this.handleEvent.bind(this, i);
        window.addEventListener(i, this.listeners[i]);
      }
    }

    this.callbacks[id] = callbacks;

    return id;
  };

  unregister = id => {
    if (id && this.callbacks[id]) {
      for (const i in this.callbacks[id]) {
        if (hasOwnProp(this.callbacks[id], i) && hasOwnProp(this.listeners, i)) {
          window.removeEventListener(i, this.listeners[i]);
        }
      }

      delete this.callbacks[id];
    }
  };

  dispatchGlobalEvent(eventName, opts, target = window) {
    // Compatibale with IE
    // @see http://stackoverflow.com/questions/26596123/internet-explorer-9-10-11-event-constructor-doesnt-work
    let event;

    if (typeof window['CustomEvent'] === 'function') {
      event = new window['CustomEvent'](eventName, {
        detail: opts,
      });
    } else {
      event = document.createEvent('Event');
      event.initEvent(eventName, false, true, opts);
    }

    if (target) {
      target.dispatchEvent(event);
    }
  }
}

export default new GlobalEventListener();
