# RateLimitScheduler

Provides a way to control and limit task execution based on defined rate limits for different time periods and parallel task limits.

## Installation

```bash
pnpm add @nimiq/utils
```

## Usage

```typescript
import { Priority, RateLimitScheduler } from '@nimiq/utils/rate-limit-scheduler'

// Define rate limits
const rateLimits = {
  second: 5, // Max 5 tasks per second
  minute: 100, // Max 100 tasks per minute
  parallel: 2, // Max 2 tasks running in parallel
}

// Initialize the RateLimitScheduler
const scheduler = new RateLimitScheduler(rateLimits)

// Schedule tasks
async function task() {
  console.log(`Task started at ${new Date().toISOString()}`)
  await new Promise(resolve => setTimeout(resolve, 200)) // Simulate async work
}

// Schedule tasks with normal priority
for (let i = 0; i < 10; i++) {
  scheduler.schedule(task)
}

// Schedule a high-priority task
scheduler.schedule(
  async () => console.log('High-priority task executed!'),
  Priority.HIGH,
)
```

## API Reference

### Constructor

#### `new RateLimitScheduler(limits: RateLimits)`

Creates a new RateLimitScheduler instance.

**Parameters:**
- `limits` - Configuration object defining rate limits

### Methods

#### `schedule(task: () => Promise<void>, priority?: Priority): Promise<void>`

Schedules a task for execution respecting rate limits.

**Parameters:**
- `task` - The async function to execute
- `priority` - Optional priority level (defaults to NORMAL)

**Returns:**
- `Promise<void>` - Resolves when the task completes

#### `clear(): void`

Clears all pending tasks from the scheduler.

#### `getStats(): SchedulerStats`

Returns current scheduler statistics.

**Returns:**
- `SchedulerStats` - Object containing current statistics

### Types

#### `RateLimits`

```typescript
interface RateLimits {
  second?: number // Max tasks per second
  minute?: number // Max tasks per minute
  hour?: number // Max tasks per hour
  parallel?: number // Max parallel tasks
}
```

#### `Priority`

```typescript
enum Priority {
  LOW = 0,
  NORMAL = 1,
  HIGH = 2,
  URGENT = 3
}
```

#### `SchedulerStats`

```typescript
interface SchedulerStats {
  pending: number // Number of pending tasks
  running: number // Number of currently running tasks
  completed: number // Number of completed tasks
  failed: number // Number of failed tasks
  currentRate: { // Current execution rates
    second: number
    minute: number
    hour: number
  }
}
```

## Examples

### Basic Usage

```typescript
import { RateLimitScheduler } from '@nimiq/utils/rate-limit-scheduler'

// Create scheduler with rate limits
const scheduler = new RateLimitScheduler({
  second: 2, // 2 tasks per second max
  minute: 60, // 60 tasks per minute max
  parallel: 3 // 3 parallel tasks max
})

// Schedule multiple tasks
const tasks = Array.from({ length: 10 }, (_, i) =>
  () => {
    console.log(`Task ${i + 1} executing`)
    return new Promise(resolve => setTimeout(resolve, 1000))
  })

// Schedule all tasks
tasks.forEach(task => scheduler.schedule(task))
```

### Priority-Based Scheduling

```typescript
import { Priority, RateLimitScheduler } from '@nimiq/utils/rate-limit-scheduler'

const scheduler = new RateLimitScheduler({
  second: 1,
  parallel: 1
})

// Schedule low priority tasks
for (let i = 0; i < 5; i++) {
  scheduler.schedule(
    () => {
      console.log(`Low priority task ${i + 1}`)
      return Promise.resolve()
    },
    Priority.LOW
  )
}

// Schedule high priority task (will jump ahead)
scheduler.schedule(
  () => {
    console.log('High priority task - executed first!')
    return Promise.resolve()
  },
  Priority.HIGH
)
```

### API Rate Limiting

```typescript
import { RateLimitScheduler } from '@nimiq/utils/rate-limit-scheduler'

class ApiClient {
  private scheduler: RateLimitScheduler

  constructor() {
    // GitHub API allows 5000 requests per hour
    this.scheduler = new RateLimitScheduler({
      hour: 5000,
      minute: 100,
      parallel: 10
    })
  }

  async makeRequest(url: string): Promise<any> {
    return this.scheduler.schedule(async () => {
      console.log(`Making request to ${url}`)
      const response = await fetch(url)
      return response.json()
    })
  }
}

const client = new ApiClient()

// These requests will be rate-limited automatically
const requests = [
  'https://api.github.com/users/octocat',
  'https://api.github.com/users/defunkt',
  'https://api.github.com/users/pjhyett'
]

requests.forEach(url => client.makeRequest(url))
```

### Batch Processing

```typescript
import { RateLimitScheduler } from '@nimiq/utils/rate-limit-scheduler'

async function processBatch(items: any[], batchSize: number = 100) {
  const scheduler = new RateLimitScheduler({
    second: 10,
    parallel: 5
  })

  const results = []

  for (let i = 0; i < items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize)

    const batchPromises = batch.map(item =>
      scheduler.schedule(async () => {
        // Process individual item
        console.log(`Processing item: ${item}`)
        await new Promise(resolve => setTimeout(resolve, 100))
        return `Processed: ${item}`
      })
    )

    const batchResults = await Promise.all(batchPromises)
    results.push(...batchResults)

    console.log(`Completed batch ${Math.floor(i / batchSize) + 1}`)
  }

  return results
}

// Process 1000 items in batches
const items = Array.from({ length: 1000 }, (_, i) => `item-${i}`)
processBatch(items, 50)
```

### Monitoring and Statistics

```typescript
import { RateLimitScheduler } from '@nimiq/utils/rate-limit-scheduler'

const scheduler = new RateLimitScheduler({
  second: 5,
  minute: 100,
  parallel: 3
})

// Monitor scheduler performance
setInterval(() => {
  const stats = scheduler.getStats()
  console.log('Scheduler Stats:', {
    pending: stats.pending,
    running: stats.running,
    completed: stats.completed,
    failed: stats.failed,
    currentRate: stats.currentRate
  })
}, 5000)

// Schedule some tasks
for (let i = 0; i < 50; i++) {
  scheduler.schedule(async () => {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 2000))
    if (Math.random() > 0.9) {
      throw new Error('Random failure')
    }
  })
}
```

### Error Handling

```typescript
import { Priority, RateLimitScheduler } from '@nimiq/utils/rate-limit-scheduler'

const scheduler = new RateLimitScheduler({
  second: 2,
  parallel: 1
})

async function resilientTask(taskId: string, maxRetries: number = 3) {
  let attempts = 0

  while (attempts < maxRetries) {
    try {
      await scheduler.schedule(async () => {
        console.log(`Executing task ${taskId}, attempt ${attempts + 1}`)

        // Simulate random failure
        if (Math.random() > 0.7) {
          throw new Error(`Task ${taskId} failed`)
        }

        console.log(`Task ${taskId} completed successfully`)
      })

      return // Success, exit retry loop
    }
    catch (error) {
      attempts++
      console.log(`Task ${taskId} failed, attempt ${attempts}/${maxRetries}`)

      if (attempts >= maxRetries) {
        console.error(`Task ${taskId} failed after ${maxRetries} attempts`)
        throw error
      }

      // Wait before retry
      await new Promise(resolve => setTimeout(resolve, 1000 * attempts))
    }
  }
}

// Schedule resilient tasks
for (let i = 0; i < 5; i++) {
  resilientTask(`task-${i}`)
}
```

### Dynamic Rate Adjustment

```typescript
import { RateLimitScheduler } from '@nimiq/utils/rate-limit-scheduler'

class AdaptiveScheduler {
  private scheduler: RateLimitScheduler
  private successCount: number = 0
  private errorCount: number = 0

  constructor(initialLimits: RateLimits) {
    this.scheduler = new RateLimitScheduler(initialLimits)
  }

  async schedule(task: () => Promise<void>): Promise<void> {
    try {
      await this.scheduler.schedule(task)
      this.successCount++
      this.adjustLimits()
    }
    catch (error) {
      this.errorCount++
      this.adjustLimits()
      throw error
    }
  }

  private adjustLimits(): void {
    const errorRate = this.errorCount / (this.successCount + this.errorCount)

    if (errorRate > 0.1) {
      // High error rate, reduce limits
      console.log('High error rate detected, reducing limits')
      this.scheduler = new RateLimitScheduler({
        second: 1,
        parallel: 1
      })
    }
    else if (errorRate < 0.05 && this.successCount > 50) {
      // Low error rate, increase limits
      console.log('Low error rate, increasing limits')
      this.scheduler = new RateLimitScheduler({
        second: 10,
        parallel: 5
      })
    }
  }
}
```

## Use Cases

- **API rate limiting** - Respect third-party API limits
- **Batch processing** - Process large datasets efficiently
- **Resource management** - Control concurrent operations
- **Task scheduling** - Prioritize and schedule background tasks
- **Performance optimization** - Prevent system overload

## Related Modules

- [Fiat API](./fiat-api) - Uses rate limiting for API calls
- [Browser Detection](./browser-detection) - May need throttling for feature detection
- [Utf8Tools](./utf8-tools) - Batch processing of text data

## Next Steps

- Learn about [Fiat API](./fiat-api) for rate-limited API usage
- Explore [Browser Detection](./browser-detection) for environment-specific limits
- Check out the [Web Client Getting Started](/web-client/getting-started) guide
