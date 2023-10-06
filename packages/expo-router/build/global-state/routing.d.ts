import type { RouterStore } from './router-store';
import { Href } from '../link/href';
export declare function push(this: RouterStore, url: Href): any;
export declare function replace(this: RouterStore, url: Href): any;
export declare function goBack(this: RouterStore): void;
export declare function navigateByEvent(this: RouterStore, event: string, url: Href): any;
export declare function canGoBack(this: RouterStore): boolean;
export declare function setParams(this: RouterStore, params?: Record<string, string | number>): any;
export declare function linkTo(this: RouterStore, originalHref: string, originalEvent?: string): void;
//# sourceMappingURL=routing.d.ts.map