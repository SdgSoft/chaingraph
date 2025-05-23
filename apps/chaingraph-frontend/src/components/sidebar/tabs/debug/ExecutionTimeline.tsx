/*
 * Copyright (c) 2025 BadLabs
 *
 * Use of this software is governed by the Business Source License 1.1 included in the file LICENSE.txt.
 *
 * As of the Change Date specified in that file, in accordance with the Business Source License, use of this software will be governed by the Apache License, version 2.0.
 */

import type { ExecutionEventEnum, ExecutionEventImpl } from '@badaitech/chaingraph-types'
import { OptimizedEventCard } from './EventCard'

interface ExecutionTimelineProps {
  events: ExecutionEventImpl[]
  selectedEventTypes: Set<ExecutionEventEnum>
}

export function ExecutionTimeline({
  events,
  selectedEventTypes,
}: ExecutionTimelineProps) {
  const filteredEvents = events.filter(event =>
    selectedEventTypes.has(event.type),
  )

  return (
    <div className="space-y-1">
      {filteredEvents.map((event, index) => (
        <div key={event.index} className="space-y-1">
          {/* <EventCard */}
          <OptimizedEventCard
            event={event}
            index={index}
          />
        </div>
      ))}
    </div>
  )
}
