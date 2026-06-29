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

export const INITIATOR_TYPE_LABELS = {
  TRAVELER: 'Селфбукер',
  CLIENT: 'Клиент',
  ADMIN: 'Админ',
}

type StatusColor = {
  dark?: string
  medium?: string
  light?: string
}

type ApprovedStatusValue = {
  label: string
  color: StatusColor
}

type ExternalStatusValue = {
  label: string
  priority: number
  color: StatusColor
}

export const APPROVED_STATUSES_LABELS: Record<string, ApprovedStatusValue> = {
  approved: {
    label: 'УТВЕРЖДЕН',
    color: {
      dark: '#009683',
      light: '#E6F5F2 ',
    }
  },
  rejected: {
    label: 'ОТКЛОНЕН',
    color: {
      dark: '#ED413F',
      light: '#F5E8E8',
    }
  },
  open: {
    label: 'НОВЫЙ',
    color: {
      dark: '#1F87FF',
      light: '#E8F2FF',
    }
  },
  expired: {
    label: 'ИСТЕК СРОК',
    color: {
      dark: '#9DA1A8',
      light: '#E6E7E8',
    }
  },
  partially: {
    label: 'ЧАСТИЧНО',
    color: {
      dark: '#FC784C',
      light: '#F7EEEB',
    }
  },
}

export const EXTERNAL_STATUSES_LABELS: Record<string, ExternalStatusValue> = {
  'In Progress': {
    label: 'В РАБОТЕ', priority: 6, color: {
      dark:   '#78599E',
      medium: '#BBABCC',
      light:  '#F3EBFC',
    }
  }, 
  Assigned:      { label: 'В РАБОТЕ',   priority: 5, color: {
      dark:   '#78599E',
      medium: '#BBABCC',
      light:  '#F3EBFC',
    }
  }, 
  Open:          { label: 'В РАБОТЕ',   priority: 5, color: {
      dark:   '#78599E',
      medium: '#BBABCC',
      light:  '#F3EBFC',
    }
  }, 
  Onhold: {
    label: 'НА ПАУЗЕ', priority: 3, color: {
      dark: '#F5A623',
      medium: '#FAC97A',
      light: '#FEF3E0'
    }
  },
  Completed: {
    label: 'ЗАВЕРШЕНА', priority: 2, color: {
      dark: '#1A6AFF',
      medium: '#7AAEFF',
      light: '#E8F0FF'
    }
  },
  Cancelled: {
    label: 'ОТМЕНЕНА', priority: 1, color: {
      dark: '#E53935',
      medium: '#EF9A9A',
      light: '#FFEBEE'
    }
  },
  Closed:        { label: 'ЗАКРЫТА',    priority: 0, color: {
      dark:   '#009683',
      medium: '#74C2B8',
      light:  '#E6F5F2',
    }
  }, 
  Resolved:      { label: 'ЗАКРЫТА',    priority: 0,  color: {
      dark:   '#009683',
      medium: '#74C2B8',
      light:  '#E6F5F2',
    }
  }, 
}