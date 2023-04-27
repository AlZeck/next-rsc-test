import type { ValidationMap, WeakValidationMap, ReactElement, FC } from "react";

interface ServerFunctionComponent<P = {}> {
	(props: P, context?: any): Promise<ReactElement<P, any> | null>;
	propTypes?: WeakValidationMap<P> | undefined;
	contextTypes?: ValidationMap<any> | undefined;
	defaultProps?: Partial<P> | undefined;
	displayName?: string | undefined;
}
type SFC<P = {}> = ServerFunctionComponent<P>;

/**
 * Workaround for for https://github.com/vercel/next.js/issues/42292
 */
const RSC = <P = {},>(C: SFC<P>): FC<P> => C as any;

export default RSC;
