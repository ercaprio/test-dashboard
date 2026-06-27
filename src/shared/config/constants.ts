export const STATUS_LABELS: Record<string, string> = {
  open: 'Новые',
  approved: 'Утверждены',
  rejected: 'Отклонены',
  expired: 'Истек срок',
}

export const SERVICE_TYPE_LABELS: Record<string, string> = {
  avia: 'Авиа',
  railway: 'ЖД',
  accommodation: 'Проживание',
}

export const SERVICE_TYPE_COLORS: Record<string, string> = {
  avia: '#4097FB',
  railway: '#425C80',
  accommodation: '#78C6FB',
}

export const CREATORS_TYPES: Record<string, string> = {
  traveler: 'Селфбукер',
  manager: 'Менеджер',
  admin: 'Админ',
}

export const CREATORS_TYPES_COLORS: Record<string, string> = {
  traveler: '#4097FB',
  manager: '#425C80',
  admin: '#78C6FB',
}

export const ROLE_OPTIONS = [
  { label: 'Селфбукер', value: 'TRAVELER' },
  { label: 'Клиент',    value: 'CLIENT' },
  { label: 'Админ',     value: 'ADMIN' },
]

export const SERVICE_OPTIONS = [
  { label: 'Авиа',       value: 'avia' },
  { label: 'ЖД',         value: 'railway' },
  { label: 'Проживание', value: 'accommodation' },
]

export const STATUS_OPTIONS = [
  { label: 'Утверждён', value: 'approved' },
  { label: 'Отклонён',  value: 'rejected' },
  { label: 'Новый',     value: 'open' },
  { label: 'Истёк',     value: 'expired' },
]

export const PERIOD_OPTIONS = [
  { label: 'Сегодня',  value: '0' },
  { label: '7 дней',   value: '7' },
  { label: '30 дней',  value: '30' },
  { label: '90 дней',  value: '90' },
]

export const COST_OPTIONS = [
  { label: '0 – 10 000',       value: '0-10000' },
  { label: '10 000 – 50 000',  value: '10000-50000' },
  { label: '50 000 – 100 000', value: '50000-100000' },
  { label: '100 000+',         value: '100000+' },
]