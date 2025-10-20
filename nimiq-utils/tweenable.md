# Tweenable

Animation utility for handling tween animations with customizable easing functions.

## Usage

### Basic usage

```typescript
import Tweenable from '@nimiq/utils/tweenable'

const tween = new Tweenable({ from: { x: 0 }, to: { x: 100 }, duration: 1000 })
tween.start()
```

## API

| Method | Description |
| --- | --- |
| `new Tweenable(config)` | Creates tween with from, to, duration, and easing options |
| `start()` | Starts the animation |
| `stop()` | Stops the animation |
| `pause()` | Pauses the animation |
| `resume()` | Resumes paused animation |
| `seek(time)` | Jumps to specific time in animation |
