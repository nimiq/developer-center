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

<table>
<thead>
  <tr>
    <th>
      Method
    </th>
    
    <th>
      Description
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        new Tweenable(config)
      </code>
    </td>
    
    <td>
      Creates tween with from, to, duration, and easing options
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        start()
      </code>
    </td>
    
    <td>
      Starts the animation
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        stop()
      </code>
    </td>
    
    <td>
      Stops the animation
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        pause()
      </code>
    </td>
    
    <td>
      Pauses the animation
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        resume()
      </code>
    </td>
    
    <td>
      Resumes paused animation
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        seek(time)
      </code>
    </td>
    
    <td>
      Jumps to specific time in animation
    </td>
  </tr>
</tbody>
</table>
