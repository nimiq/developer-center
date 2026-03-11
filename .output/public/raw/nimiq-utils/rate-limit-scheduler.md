# Rate Limit Scheduler

Controls and limits task execution based on defined rate limits and parallel task limits.

## Usage

### Basic usage

```typescript
import { Priority, RateLimitScheduler } from '@nimiq/utils/rate-limit-scheduler'

const scheduler = new RateLimitScheduler({ maxParallel: 3, maxPerSecond: 10 })
await scheduler.schedule(() => fetch('/api/data'), Priority.HIGH)
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
        new RateLimitScheduler(config)
      </code>
    </td>
    
    <td>
      Creates scheduler with parallel and rate limits
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        schedule(task, priority?)
      </code>
    </td>
    
    <td>
      Schedules task with optional priority
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        Priority.LOW/NORMAL/HIGH/URGENT
      </code>
    </td>
    
    <td>
      Task priority levels
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        getStats()
      </code>
    </td>
    
    <td>
      Returns scheduler statistics
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        clear()
      </code>
    </td>
    
    <td>
      Clears all pending tasks
    </td>
  </tr>
</tbody>
</table>
