import { AsyncSeriesHook } from './async-series-hook';

describe('async-series-hook.ts', () => {
  it('同步钩子测试', async () => {
    const hook = new AsyncSeriesHook<[], { str: string }>();
    hook.tapPromise(async ctx => {
      ctx.str += '-age';
    });
    hook.tap(ctx => {
      ctx.str += '-name';
    });
    const context = await hook.call({ str: 't' });
    expect(context.str).toBe('t-age-name');
  });
});
