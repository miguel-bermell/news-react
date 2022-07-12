import toast, { Toaster } from "react-hot-toast";

class NotifyService {
  constructor() {
    this.toast = toast;
  }

  success(message) {
    this.toast.success(message);
  }

  error(message) {
    this.toast.error(message, {id: 'error'});
  }

  warning(message) {
    this.toast.success(message, {
      icon: '⚠️​'
    });
  }
}

export default new NotifyService();
export const ToasterNotify = Toaster
