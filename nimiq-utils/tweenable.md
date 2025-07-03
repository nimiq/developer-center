# Tweenable

Allows you to handle tween animations with customizable easing functions.

## Installation

```bash
pnpm add @nimiq/utils
```

## Usage

```typescript
import Tweenable from '@nimiq/utils/tweenable'

// Create a Tweenable instance
const tween = new Tweenable(100, 0, 2000) // Target value: 100, Start value: 0, Tween time: 2000ms

// Retrieve the current value during animation
setInterval(() => {
  console.log(`Current Value: ${tween.currentValue}`)
  if (tween.finished)
    console.log('Animation complete!')
}, 100)

// Update the target value and restart the tween
tween.tweenTo(200, 1500) // Tween to 200 over 1500ms

// Use a custom easing function
const customEasing = (t: number) => t * t // Quadratic easing
const tweenWithCustomEasing = new Tweenable(50, 0, 3000, Date.now(), customEasing)
```

## API Reference

### Constructor

#### `new Tweenable(targetValue: number, startValue?: number, tweenTime?: number, startTime?: number, easingFunction?: (t: number) => number)`

Creates a new Tweenable animation instance.

### Methods

#### `tweenTo(targetValue: number, tweenTime?: number): void`

Updates the target value and restarts the animation.

### Properties

#### `currentValue: number`

Gets the current animated value.

#### `finished: boolean`

Indicates if the animation is complete.

## Use Cases

- **UI animations** - Smooth value transitions
- **Game development** - Object movement and effects
- **Data visualization** - Animated charts and graphs
- **Interactive elements** - Smooth user interactions

## Related Modules

- [FormattableNumber](./formattable-number) - Format animated values
- [BrowserDetection](./browser-detection) - Optimize for different browsers

## Next Steps

- Learn about [FormattableNumber](./formattable-number) for value formatting
- Check out the [Web Client Getting Started](/web-client/getting-started) guide
