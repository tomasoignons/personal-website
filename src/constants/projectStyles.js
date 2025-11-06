// Project category to gradient and styling mapping
export const CATEGORY_GRADIENTS = {
  'Website': 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', // Blue
  'Data Analysis': 'linear-gradient(135deg, #059669 0%, #065f46 100%)', // Green
  'Startup': 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)', // Pink
  'Bots': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', // Orange
  'Machine Learning': 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)', // Sky Blue
  'Telegram Bot': 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', // Orange (same as Bots)
  'Content Creation': 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)', // Indigo
  'Research Project': 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', // Purple
  'Mobile App': 'linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)', // Teal
  'Web App': 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', // Cyan
  'Automation': 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)', // Deep Orange
  'Homelab': 'linear-gradient(135deg, #64748b 0%, #475569 100%)', // Slate
  'TBD': 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)' // Gray
}

export const CATEGORY_BADGE_CLASSES = {
  'Website': 'badge-primary',
  'Data Analysis': 'badge-success',
  'Startup': 'badge-error',
  'Bots': 'badge-warning',
  'Machine Learning': 'badge-info',
  'Telegram Bot': 'badge-warning',
  'Content Creation': 'badge-secondary',
  'Research Project': 'badge-accent',
  'Mobile App': 'badge-success',
  'Web App': 'badge-info',
  'Automation': 'badge-warning',
  'Homelab': 'badge-neutral',
  'TBD': 'badge-ghost'
}

export function getCategoryGradient(category) {
  return CATEGORY_GRADIENTS[category] || CATEGORY_GRADIENTS['TBD']
}

export function getCategoryBadgeClass(category) {
  return CATEGORY_BADGE_CLASSES[category] || 'badge-ghost'
}
