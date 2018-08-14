// @flow
import * as d3 from 'd3'

export type TrackId = 'CRAFTMANSHIP' | 'INNOVATION' | 'DELIVERY' | 'GROWTH' | 'VALUES'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5 | 6

export type MilestoneMap = {
  'CRAFTMANSHIP': Milestone,
  'INNOVATION': Milestone,
  'DELIVERY': Milestone,
  'GROWTH': Milestone,
  'VALUES': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5, 6]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    case 6: return 30
    default: return 0
  }
}

export const pointsToLevels = {
  '5': '1.1',
  '9': '1.2',
  '13': '1.3',
  '15': '2.1',
  '21': '2.2',
  '27': '2.3',
  '30': '3.1',
  '42': '3.2',
  '54': '3.3',
  '60': '4.1',
  '76': '4.2',
  '92': '4.3',
  '100': '5.1',
  '120': '5.2',
  '140': '5.3',
}

export const maxLevel = 140

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'CRAFTMANSHIP': Track,
  'INNOVATION': Track,
  'DELIVERY': Track,
  'GROWTH': Track,
  'VALUES': Track
|}

export const tracks: Tracks = {
  "CRAFTMANSHIP": {
    "displayName": "Craftmanship",
    "category": "A",
    "description": "TODO: Craftmansip description.",
    "milestones": [{
      "summary": "TODO: Craftmanship milestone 1.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Craftmanship milestone 2.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Craftmanship milestone 3.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Craftmanship milestone 4.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Craftmanship milestone 5.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Craftmanship milestone 6.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }],
  },

  "INNOVATION": {
    "displayName": "Innovation",
    "category": "B",
    "description": "TODO: Innovation description.",
    "milestones": [{
      "summary": "TODO: Innovation milestone 1.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Innovation milestone 2.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Innovation milestone 3.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Innovation milestone 4.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {

      "summary": "TODO: Innovation milestone 5.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Innovation milestone 6.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }],
  },

  "DELIVERY": {
    "displayName": "Delivery",
    "category": "C",
    "description": "TODO: Delivery description.",
    "milestones": [{
      "summary": "TODO: Delivery milestone 1.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Delivery milestone 2.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Delivery milestone 3.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Delivery milestone 4.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Delivery milestone 5.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Delivery milestone 6.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }],
  },

  "GROWTH": {
    "displayName": "Growth",
    "category": "D",
    "description": "TODO: Growth description.",
    "milestones": [{
      "summary": "TODO: Growth milestone 1.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Growth milestone 2.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Growth milestone 3.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Growth milestone 4.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Growth milestone 5.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Growth milestone 6.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }],
  },

  "VALUES": {
    "displayName": "Values",
    "category": "E",
    "description": "TODO: Values description.",
    "milestones": [{
      "summary": "TODO: Values milestone 1.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Values milestone 2.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Values milestone 3.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Values milestone 4.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Values milestone 5.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }, {
      "summary": "TODO: Values milestone 6.",
      "signals": [
        "1",
        "2",
        "3",
      ],
      "examples": [
        "A",
        "B",
        "C",
      ],
    }],
  }

}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#597CF4', '#3BE2A0', '#FFD058', '#FF6187', '#ADADAD'])

export const titles = [
  {label: 'Junior Software Engineer', minPoints: 0, maxPoints: 16},
  {label: 'Software Engineer', minPoints: 17, maxPoints: 35},
  {label: 'Senior Software Engineer', minPoints: 36, maxPoints: 57},
  {label: 'Staff Software Engineer', minPoints: 58, maxPoints: 89},
  {label: 'Principal Software Engineer', minPoints: 90}
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
                             && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}
