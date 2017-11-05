import getDecorators from "inversify-inject-decorators";
import "reflect-metadata";

import container from "../bindings/inversify.config";

export const {
  lazyInject,
  lazyInjectNamed,
  lazyInjectTagged,
  lazyMultiInject,
} = getDecorators(container);

export default container;
