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

| Method | Description |
| --- | --- |
| `new RateLimitScheduler(config)` | Creates scheduler with parallel and rate limits |
| `schedule(task, priority?)` | Schedules task with optional priority |
| `Priority.LOW/NORMAL/HIGH/URGENT` | Task priority levels |
| `getStats()` | Returns scheduler statistics |
| `clear()` | Clears all pending tasks |
