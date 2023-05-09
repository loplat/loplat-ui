const TABBABLE_TAGS = ['a', 'input', 'select', 'button', 'textarea', 'details'];

export const getTabbableElements = (element: Element) => {
  return element.querySelectorAll(TABBABLE_TAGS.join(', '));
};
