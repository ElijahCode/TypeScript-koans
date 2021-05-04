// eslint-disable-next-line @typescript-eslint/no-explicit-any

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];

type FIXME = OrderState[];

// Hint: type guards
export const getUserOrderStates = (orderStates1: OrderState[]): FIXME =>
  orderStates1.filter(
    (state) => state !== "buyingSupplies" && state !== "producing"
  );
