export interface MyQNavEventDetail extends EventInit {
  fullPath: string;
}

export const myQNavEventName = 'MyQNavEvent';

export class MyQNavEvent<
  MyQNavEventDetail,
> extends CustomEvent<MyQNavEventDetail> {
  constructor(eventInitDict: CustomEventInit<MyQNavEventDetail>) {
    super(myQNavEventName, eventInitDict);
  }
}

export function dispatchMyQNavEvent(fullPath: string) {
  const event = new MyQNavEvent<MyQNavEventDetail>({
    detail: {
      fullPath,
    },
  });
  window.dispatchEvent(event);
}
