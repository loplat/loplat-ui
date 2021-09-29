import {
  Renderable,
  Toast,
  ToastOptions,
  ToastType,
  DefaultToastOptions,
  ValueOrFunction,
  resolveValue,
} from './types';
import { generateId } from './utils';
import { dispatch, ActionType } from './store';

type Message = ValueOrFunction<Renderable, Toast>;

type ToastHandler = (message: Message, options?: ToastOptions) => string;

const createToast = (message: Message, type: ToastType = 'white', opts?: ToastOptions): Toast => ({
  createdAt: Date.now(),
  visible: true,
  type,
  ariaProps: {
    role: 'status',
    'aria-live': 'polite',
  },
  message,
  pauseDuration: 0,
  ...opts,
  id: opts?.id || generateId(),
});

const createHandler =
  (type?: ToastType): ToastHandler =>
  (message, options) => {
    const toast = createToast(message, type, options);
    dispatch({ type: ActionType.UPSERT_TOAST, toast });
    return toast.id;
  };

const toast = (message: Message, opts?: ToastOptions) => createHandler('white')(message, opts);

toast.loading = createHandler('loading');
toast.success = createHandler('success');
toast.danger = createHandler('danger');
toast.info = createHandler('info');
toast.white = createHandler('white');
toast.warning = createHandler('warning');
toast.custom = createHandler('custom');

toast.dismiss = (toastId?: string) => {
  dispatch({
    type: ActionType.DISMISS_TOAST,
    toastId,
  });
};

toast.remove = (toastId?: string) => dispatch({ type: ActionType.REMOVE_TOAST, toastId });

toast.promise = <T>(
  promise: Promise<T>,
  msgs: {
    loading: Renderable;
    success: ValueOrFunction<Renderable, T>;
    error: ValueOrFunction<Renderable, any>;
  },
  opts?: DefaultToastOptions,
) => {
  const id = toast.loading(msgs.loading, { ...opts, ...opts?.loading });

  promise
    .then((p) => {
      toast.success(resolveValue(msgs.success, p), {
        id,
        ...opts,
        ...opts?.success,
      });
      return p;
    })
    .catch((e) => {
      toast.danger(resolveValue(msgs.error, e), {
        id,
        ...opts,
        ...opts?.danger,
      });
    });

  return promise;
};

export { toast };
