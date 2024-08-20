# @motionwindui/checkbox

The MotionWindUI Checkbox component is a simple wrapper around the native HTML checkbox input element. It provides a more user-friendly interface and additional styling options. It is fully accessible and can be used in any form.

## Installation

```bash
npm install @motionwindui/checkbox
```

## Usage

```html
<Checkbox>
  Label
</Checkbox>
```

## Props

| Name              | Description                                                          | Type                                                                          | Default   |
| ----------------- | -------------------------------------------------------------------- | ----------------------------------------------------------------------------- | --------- |
| color             | The color of the checkbox.                                           | `"neutral" \| "primary" \| "secondary" \| "success" \| "warning" \| "danger"` | neutral   |
| size              | The size of the checkbox.                                            | `"sm" \| "md" \| "lg"`                                                        | md        |
| radius            | The border radius of the checkbox.                                   | `"none" \| "sm" \| "md" \| "lg" \| "full"`                                    | md        |
| children          | The label text for the checkbox element.                             | `React.ReactNode \| undefined`                                                | undefined |
| description       | The description text for the checkbox element.                       | `string \| undefined`                                                         | undefined |
| errorMessage      | The error message to display when the checkbox is in an error state. | `React.ReactNode \| string \| undefined`                                      | undefined |
| isIndeterminate   | Indicates whether the checkbox is in an indeterminate state.         | `boolean \| undefined`                                                        | false     |
| isReadOnly        | Indicates whether the checkbox is read-only.                         | `boolean \| undefined`                                                        | false     |
| isDisabled        | Indicates whether the checkbox is disabled.                          | `boolean \| undefined`                                                        | false     |
| isSelected        | Indicates whether the checkbox is checked.                           | `boolean \| undefined`                                                        | false     |
| icon              | The icon to display when the checkbox is checked.                    | `React.ReactNode \| undefined`                                                | undefined |
| disableAnimations | Disables the animations for the checkbox element.                    | `boolean \| undefined`                                                        | false     |


